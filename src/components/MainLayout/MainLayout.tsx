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
      <main
        className={styles.main}
        style={{ color: color, borderColor: color }}
      >
        <Image
          priority
          src="/logo-transparent.png"
          width={150}
          height={120}
          alt="logo"
        />
        <h1 className={styles.title}>{text}</h1>
        {children}
      </main>
    </div>
  );
}
