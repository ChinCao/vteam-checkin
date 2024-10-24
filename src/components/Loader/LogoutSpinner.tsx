import LoadingSpinner from "@/components/Loader/LoadingSpinner";
import styles from "./LogoutSpinner.module.css";
import Image from "next/image";

const LogoutSpinner = () => {
  return (
    <div className={styles.page}>
      <Image
        className={styles.logo_vectr}
        priority
        src="/vectr.png"
        width={100}
        height={100}
        alt="logo"
      />
      <LoadingSpinner size="150px" />
    </div>
  );
};

export default LogoutSpinner;
