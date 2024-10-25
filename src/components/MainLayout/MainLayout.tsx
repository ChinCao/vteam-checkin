import Decoration from "../Decoration/Decoration";
import styles from "./mainlayout.module.css";
import Image from "next/image";

interface MainLayoutProps {
  color: string;
  text: string;
  banner: boolean;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sheetData?: any;
}

export default function MainLayout({
  color,
  text,
  banner,
  sheetData,
  children,
}: MainLayoutProps) {
  return (
    <div className={styles.page}>
      <div
        className={styles.wrapper}
        style={{
          borderColor: color,
        }}
      >
        <div className={styles.main_content}>
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
            <Decoration color={color} />
            <h1 className={styles.title}>{text}</h1>
            {children}
          </main>
        </div>
        {banner ? (
          <Image
            className={styles.banner}
            priority
            src={
              sheetData[1].includes("Nguyệt")
                ? "/nguyet.png"
                : sheetData[1].includes("Bầu")
                ? "/bau.png"
                : "/nhi.png"
            }
            width={1100}
            height={120}
            alt="banner"
            style={{ borderColor: color }}
          />
        ) : null}
      </div>
    </div>
  );
}
