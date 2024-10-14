/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import InfoScreen from "@/components/InfoScreen/InfoScreen";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/logo-transparent.png"
          width={150}
          height={120}
          alt="logo"
        />
        <h1 className={styles.title}>Thông tin vé của bạn</h1>
        <InfoScreen />
        <h5
          style={{
            fontSize: "17px",
            textAlign: "center",
            marginTop: "20px",
            fontWeight: 300,
          }}
        >
          Bạn hãy quay lại website vào lúc 7h:30 để check-in concert!
        </h5>
      </main>
    </div>
  );
}

{
  /* <input required type="text" placeholder="Mật mã/ID" /> */
}
{
  /* <input required type="text" placeholder="Tên/Name" /> */
}
{
  /* <input required type="text" placeholder="Mã số HS/StudentID" /> */
}

{
  /* <button className="getCode">Kiểm tra thông tin</button> */
}
{
  /* <input required type="text" placeholder="Tên/Name" /> */
}
{
  /* <input required type="text" placeholder="Lớp/Class" /> */
}
{
  /* <button type="submit" onClick={handleSubmit}>
            Check-in
          </button> */
}
