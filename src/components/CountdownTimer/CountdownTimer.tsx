"use client";
import { concert_date, isConcert } from "@/constants/constants";
import styles from "./timer.module.css";
import React, { useState, useEffect, useCallback } from "react";
import { signOut, useSession } from "next-auth/react";
import { AutoLogOut } from "./AutoLogOut";
import { useRouter } from "next/navigation";

const CountdownTimer: React.FC = () => {
  const targetDate: Date = concert_date;
  const router = useRouter();

  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  const { data: session } = useSession();

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

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const handleLogout = async () => {
      const response = await AutoLogOut(session);
      if (response) {
        localStorage.setItem(
          "loginStatus",
          "Bạn hãy login vào lại để check-in concert"
        );
        signOut({ redirect: true, callbackUrl: "/signin" });
      }
    };

    if (!isConcert()) {
      const timer = setInterval(async () => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);
        if (newTimeLeft === null) {
          clearInterval(timer);
          await handleLogout();
        }
      }, 1000);
    } else {
      setTimeLeft(null);
    }
  }, [calculateTimeLeft, router, session]);

  return (
    <div className={styles.container}>
      {timeLeft && <h4>Concert countdown:</h4>}
      {timeLeft ? (
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </span>
      ) : (
        <span>Đã có thể check-in concert!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
