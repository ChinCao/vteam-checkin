"use client";
import MainLayout from "@/components/MainLayout/MainLayout";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./signin.module.css";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";

const LoginPage = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const { data: session, status } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [loginStatus, setLoginStatus] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingValue = localStorage.getItem("loginStatus");
      if (!existingValue) {
        localStorage.setItem(
          "loginStatus",
          "Đăng nhập bằng email đã đăng ký Silencio"
        );
      }

      if (status === "authenticated") {
        localStorage.setItem(
          "loginStatus",
          "Đăng nhập bằng email đã đăng ký Silencio"
        );
        redirect("/");
      }
      setLoginStatus(existingValue!);
    }
  }, [session?.user?.email, status]);

  return (
    <MainLayout color="#980000" text="cổng đăng nhập">
      <button
        className={styles.google}
        onClick={handleGoogleSignIn}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        <Image
          className={styles.logo}
          src="/google.webp"
          width={50}
          height={50}
          alt="logo"
        />
        <h1>Đăng nhập bằng google</h1>
      </button>
      <CountdownTimer />
      <h4 className={styles.status}>{loginStatus}</h4>
    </MainLayout>
  );
};

export default LoginPage;
