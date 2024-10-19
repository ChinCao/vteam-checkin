"use client";
import MainLayout from "@/components/MainLayout/MainLayout";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./signin.module.css";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const { data: session, status } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  useEffect(() => {
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
  }, [session?.user?.email, status]);
  return (
    <MainLayout color="#980000" text="Cổng đăng nhập">
      <button
        className={styles.google}
        onClick={handleGoogleSignIn}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        <Image src="/google.webp" width={50} height={50} alt="logo" />
        Đăng nhập bằng Google
      </button>
      <h4>{localStorage.getItem("loginStatus")}</h4>
    </MainLayout>
  );
};

export default LoginPage;
