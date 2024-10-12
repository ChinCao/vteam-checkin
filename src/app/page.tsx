"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const handleSubmit = () => {
    // e.preventDefault();
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/logo-transparent.png"
          width={150}
          height={120}
          alt="logo"
        />
        <h1>Check-in Silencio</h1>
        <form className={styles.form}>
          <input required type="text" placeholder="Tên/Name" />
          <input required type="text" placeholder="Lớp/Class" />
          <input required type="text" placeholder="Mã số HS/Student ID" />
          <button type="submit" onClick={handleSubmit}>
            Check-in
          </button>
        </form>
      </main>
    </div>
  );
}
