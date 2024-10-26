/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { Checkin } from "./Checkin";
import { ISCONCERT, Theme } from "@/constants/constants";
import styles from "./css/SubmitButton.module.css";
import { useState } from "react";
import LoadingSpinner from "../Loader/LoadingSpinner";
import { NextResponse } from "next/server";

const SubmitButton = ({
  data,
  password,
  theme,
}: {
  data: any;
  password: string;
  theme: Theme;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const correct = await Checkin(data, password);
    if (correct) {
      setIsCorrect(true);
      try {
        if (ISCONCERT()) {
          router.push("/checkin-concert-successful");
        } else {
          router.push("/checkin-successful");
        }
      } catch (error) {
        setIsLoading(false);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
      }
    } else {
      setIsLoading(false);
      setIsCorrect(false);
    }
  };

  return (
    <button
      type="submit"
      disabled={isLoading}
      onClick={handleSubmit}
      style={{ background: theme.color }}
      className={!isCorrect ? styles.wrong : ""}
      onMouseEnter={(e: any) => {
        e.target.style.borderColor = theme.color;
        e.target.style.color = theme.color;
        e.target.style.background = "transparent";
      }}
      onMouseLeave={(e: any) => {
        e.target.style.borderColor = "transparent";
        e.target.style.color = "white";
        e.target.style.background = theme.color;
      }}
    >
      {isLoading ? (
        <LoadingSpinner size="20px" />
      ) : (
        <>{isCorrect ? "Check-in" : "Sai mã"}</>
      )}
    </button>
  );
};

export default SubmitButton;
