"use client";
import MainLayout from "@/components/MainLayout/MainLayout";
import { useSession } from "next-auth/react";
import styles from "./signin.module.css";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import { ISCHECKIN, RED_MAIN } from "@/constants/constants";
import SigninButton from "@/components/SigninButton/SigninButton";

const LoginPage = () => {
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
    <MainLayout
      theme={{ color: RED_MAIN, name: "" }}
      text="cổng đăng nhập"
      banner={false}
    >
      {ISCHECKIN() ? (
        <SigninButton status="Đăng nhập bằng Google" />
      ) : (
        <SigninButton status="Chưa đến giờ check-in" />
      )}

      <CountdownTimer countDownType={"check-in"} />
      <CountdownTimer countDownType={"concert"} />
      <h4 className={styles.status}>{loginStatus}</h4>
    </MainLayout>
  );
};

export default LoginPage;
