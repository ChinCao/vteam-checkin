"use client";
import { CHECKIN_DATE, CONCERT_DATE, ISCONCERT } from "@/constants/constants";
import styles from "./timer.module.css";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { AutoLogOut } from "../../lib/AutoLogOut";
import { useRouter } from "next/navigation";
import { GetCSRF } from "@/lib/Tokens";

const CountdownTimer = ({ countDownType }: { countDownType: string }) => {
  let targetDate: Date;
  if (countDownType == "concert") {
    targetDate = CONCERT_DATE;
  } else {
    targetDate = CHECKIN_DATE;
  }
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
    if (countDownType == "concert") {
      if (!ISCONCERT() && mounted) {
        const timer = setInterval(async () => {
          const newTimeLeft = calculateTimeLeft();
          setTimeLeft(newTimeLeft);
          if (newTimeLeft === null) {
            clearInterval(timer);
            await handleLogout();
          }
        }, 1000);

        return () => clearInterval(timer);
      } else {
        setTimeLeft(null);
      }
    } else {
      const timer = setInterval(async () => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);
        if (newTimeLeft === null) {
          clearInterval(timer);
          router.refresh();
        }
      }, 1000);
    }
  }, [calculateTimeLeft, router, session, mounted, countDownType]);

  return (
    <div className={styles.container}>
      {timeLeft && (
        <h4>
          {countDownType == "concert" ? "Concert" : "Check-in"} countdown:
        </h4>
      )}
      {timeLeft ? (
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </span>
      ) : (
        <>
          {mounted ? (
            <span>
              {countDownType == "concert"
                ? " Đã có thể check-in concert!"
                : "Đã có thể đăng nhập"}
            </span>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
