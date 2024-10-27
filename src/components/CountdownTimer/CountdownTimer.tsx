"use client";
import { CONCERT_DATE, ISCONCERT } from "@/constants/constants";
import styles from "./timer.module.css";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { AutoLogOut } from "../../lib/AutoLogOut";
import { useRouter } from "next/navigation";
import { GetCSRF } from "@/lib/Tokens";

const CountdownTimer: React.FC = () => {
  const targetDate: Date = CONCERT_DATE;
  const router = useRouter();

  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  const { data: session } = useSession();

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false); // Track if component has mounted

  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return null;
  }, [targetDate]);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the first render
  }, []);

  useEffect(() => {
    const handleLogout = async () => {
      const response = await AutoLogOut(session, false, await GetCSRF());
      if (response) {
        router.push("/concert-relogin");
      }
    };

    if (!ISCONCERT() && mounted) {
      const timer = setInterval(async () => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);
        if (newTimeLeft === null) {
          clearInterval(timer);
          await handleLogout();
        }
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval on unmount
    } else {
      setTimeLeft(null);
    }
  }, [calculateTimeLeft, router, session, mounted]);

  return (
    <div className={styles.container}>
      {timeLeft && <h4>Concert countdown:</h4>}
      {timeLeft ? (
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </span>
      ) : (
        <>{mounted ? <span>Đã có thể check-in concert!</span> : ""}</>
      )}
    </div>
  );
};

export default CountdownTimer;
