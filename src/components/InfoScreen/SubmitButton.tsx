/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { Checkin } from "./Checkin";
import { isConcert } from "@/constants/constants";
import styles from "./css/SubmitButton.module.css";
import { useState } from "react";
import LoadingSpinner from "../Loader/LoadingSpinner";
import { NextResponse } from "next/server";

const SubmitButton = ({ data, password }: { data: any; password: string }) => {
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
        if (isConcert()) {
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
      className={!isCorrect ? styles.wrong : ""}
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
