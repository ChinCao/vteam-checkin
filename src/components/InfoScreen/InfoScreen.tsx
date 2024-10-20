/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import styles from "./infoScreen.module.css";
import Success from "@/components/Success/Success";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";

type StudentInfoArray = [
  string, // '16'
  string, // 'Tía (9-10-11-12, có concert)'
  string, // 'Cao Cự Chính'
  string, // '11B4'
  string, // 'VS054678'
  string, // 'chinh054678@stu.vinschool.edu.vn'
  string, // 'TRUE'
  string // 'FALSE'
];

export default function InfoScreen({ data }: { data: StudentInfoArray }) {
  const [password, setPassword] = useState<string>("");
  const captureRef = useRef<HTMLDivElement | null>(null);
  const [canvasUrl, setCanvasUrl] = useState<string | null>(null);
  const [finishedCapture, setFinishedCapture] = useState(false);

  useEffect(() => {
    const captureElement = async () => {
      if (captureRef.current) {
        const canvas = await html2canvas(captureRef.current);
        const imgData = canvas.toDataURL("image/png");
        setCanvasUrl(imgData);
      }
    };

    captureElement();
    setFinishedCapture(true);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.form} ref={captureRef}>
        <Success display={finishedCapture} data={data} />
      </div>

      {canvasUrl && (
        <Image
          className={styles.information}
          src={canvasUrl}
          width={400}
          height={300}
          alt="Thông tin vé"
        />
      )}
      <form className={styles.password}>
        <input
          type="text"
          placeholder="Đưa cho staff VTEAM"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton data={data} password={password} />
      </form>
    </div>
  );
}
