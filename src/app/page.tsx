/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Success from "@/components/Success/Success";
import Rejected from "@/components/Rejected/Rejected";

export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const isSuccess = true;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/logo-transparent.png"
          width={150}
          height={120}
          alt="logo"
        />
        <h1 style={{ textAlign: "center" }}>Thông tin vé của bạn</h1>
        <form className={styles.form}>
          {isSuccess && <Success />}
          {!isSuccess && <Rejected />}
          <button className="getCode">Kiểm tra thông tin</button>
          {/* <input required type="text" placeholder="Mật mã/ID" /> */}
          {/* <input required type="text" placeholder="Tên/Name" /> */}
          {/* <input required type="text" placeholder="Mã số HS/StudentID" /> */}
          <input
            type="text"
            className={styles.verifyStatus}
            disabled
            placeholder="Thông tin hợp lệ"
          />
          <input
            type="text"
            className={styles.coordinator}
            placeholder="Mã coordinator"
          />
          <button className="getCode">Checkin</button>
          {/* <button className="getCode">Kiểm tra thông tin</button> */}
          {/* <input required type="text" placeholder="Tên/Name" /> */}
          {/* <input required type="text" placeholder="Lớp/Class" /> */}
          {/* <button type="submit" onClick={handleSubmit}>
            Check-in
          </button> */}
        </form>
      </main>
    </div>
  );
}
