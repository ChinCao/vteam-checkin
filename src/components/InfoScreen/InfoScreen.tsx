"use client";
import Image from "next/image";
import styles from "./infoScreen.module.css";
import Success from "@/components/Success/Success";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";

type StudentInfoArray = [
  string, // '16'
  string, // 'Tía (9-10-11-12, có concert)'
  string, // 'Hồ Nguyễn Ánh Minh'
  string, // '10A4'
  string, // 'VS053960'
  string, // 'minh053960@stu.vinschool.edu.vn'
  string, // 'TRUE' (should be converted to boolean)
  string // 'FALSE' (should be converted to boolean)
];

export default function InfoScreen({ data }: { data: StudentInfoArray }) {
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
      <button className="getCode">Check-in</button>
    </div>
  );
}
