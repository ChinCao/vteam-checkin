/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import styles from "./css/infoScreen.module.css";
import Success from "@/components/Success/Success";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import { GET_THEME, SpreadsheetData } from "@/constants/constants";

export default function InfoScreen({ data }: { data: SpreadsheetData }) {
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
  const theme = GET_THEME(data);

  return (
    <div className={styles.page}>
      <div className={styles.form} ref={captureRef}>
        <Success display={finishedCapture} data={data} theme={theme} />
      </div>

      {canvasUrl && (
        <Image
          className={styles.information}
          src={canvasUrl}
          style={{
            borderColor: theme.color,
          }}
          width={400}
          height={300}
          alt="Thông tin vé"
        />
      )}
      <form className={styles.password}>
        <input
          type={password.length >= 3 ? "password" : "text"}
          style={{ borderColor: theme.color }}
          className={styles.no_spinner}
          placeholder="Đưa cho staff VTEAM"
          value={password}
          onChange={(e: any) => {
            if (password.length == 3) {
              const length = e.target.value.length;
              e.target.setSelectionRange(length, length);
            }
            setPassword(e.target.value);
          }}
          inputMode="numeric"
        />
        <SubmitButton data={data} password={password} theme={theme} />
      </form>
    </div>
  );
}
