"use client";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Login</h1>
      <button
        onClick={handleGoogleSignIn}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
