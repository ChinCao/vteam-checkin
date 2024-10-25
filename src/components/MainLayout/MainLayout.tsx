import { red_main } from "@/constants/constants";
import styles from "./mainlayout.module.css";
import Image from "next/image";

interface MainLayoutProps {
  color: string;
  text: string;
  children: React.ReactNode;
}

export default function MainLayout({ color, text, children }: MainLayoutProps) {
  return (
    <div className={styles.page}>
      <div
        className={styles.wrapper}
        style={{
          borderColor: color,
        }}
      >
        <div className={styles.poster_container}>
          <Image
            className={styles.poster}
            priority
            src="/poster.jpg"
            width={720}
            height={720}
            alt="logo"
            style={{ borderColor: color }}
          />
        </div>

        <main
          className={styles.main}
          style={{
            color: color,
          }}
        >
          {color == red_main ? (
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
            />
          )}

          {color == red_main ? (
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

          <div className={styles.header}>
            <div className={styles.logo}>
              <Image
                className={styles.logo_vteam}
                priority
                src="/logo-transparent.png"
                width={100}
                height={80}
                alt="logo"
              />
              <Image
                className={styles.silencio}
                priority
                src="/SILENCIO.png"
                width={300}
                height={120}
                alt="logo"
              />
            </div>
          </div>
          <h1 className={styles.title}>{text}</h1>
          {children}
        </main>
      </div>
    </div>
  );
}
