import { red_main } from "@/constants/constants";
import Image from "next/image";
import styles from "./Decoration.module.css";

const Decoration = ({ color }: { color: string }) => {
  return (
    <>
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
    </>
  );
};

export default Decoration;
