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
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      redirect("/");
    }
  }, [status]);
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
      <h5>Đăng nhập bằng email đã đăng ký form Silencio</h5>
    </MainLayout>
  );
};

export default LoginPage;
