"use client";
import { concert_date } from "@/constants/constants";
import styles from "./timer.module.css";

import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const targetDate: Date = concert_date;

  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft | null => {
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
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className={styles.container}>
      {timeLeft && <h4>Concert countdown</h4>}
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
