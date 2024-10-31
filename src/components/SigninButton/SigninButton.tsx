"use client";

import React, { useState } from "react";
import LoadingSpinner from "../Loader/LoadingSpinner";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";
import styles from "./SigninButton.module.css";
import Image from "next/image";
import { ISCHECKIN } from "@/constants/constants";

const SigninButton = ({ status }: { status: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleGoogleSignIn = () => {
    try {
      setIsLoading(true);
      signIn("google", { callbackUrl: "/" });
    } catch (error) {
      setIsLoading(false);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  };

  return (
    <button
      className={styles.google}
      onClick={ISCHECKIN() ? handleGoogleSignIn : undefined}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      {!isLoading ? (
        <Image
          className={styles.logo}
          src="/google.webp"
          width={50}
          height={50}
          alt="logo"
        />
      ) : (
        <LoadingSpinner margin_right="15px" size="35px" />
      )}
      <h1>{status}</h1>
    </button>
  );
};

export default SigninButton;
