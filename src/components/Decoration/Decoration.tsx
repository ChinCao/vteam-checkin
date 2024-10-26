"use client";
import Image from "next/image";
import styles from "./Decoration.module.css";
import { useSession } from "next-auth/react";

const Decoration = ({ theme }: { theme: string }) => {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <Image
          className={`${styles.decoration} ${styles.decoration_logout}`}
          priority
          src="/background_element_silencio.png"
          width={720}
          height={720}
          alt="decoration"
        />
      ) : (
        <Image
          className={`${styles.decoration} ${styles.decoration_login}`}
          priority
          src="/vteam_background_element 3_ silencio.png"
          width={720}
          height={720}
          alt="decoration"
          style={{
            filter:
              theme == "Nguyệt"
                ? "hue-rotate(573deg) saturate(2) contrast(1.2)"
                : theme == "Nhị"
                ? "hue-rotate(-82deg) saturate(2.4) contrast(1.4)"
                : "",
          }}
        />
      )}

      {!session ? (
        <div className={styles.lantern_container}>
          <div className={styles.glow}></div>
          <Image
            className={`${styles.decoration} ${styles.lantern_logout}`}
            priority
            src="/lantern.png"
            width={200}
            height={200}
            alt="decoration"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Decoration;
