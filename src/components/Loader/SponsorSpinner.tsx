"use client";

import LoadingSpinner from "@/components/Loader/LoadingSpinner";
import styles from "./SponsorSpinner.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SponsorSpinner = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname != "/signin" && pathname != "/" ? (
        <div className={styles.page}>
          <div className={styles.spinner_container}>
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
          <a
            className={styles.text}
            href="https://linktr.ee/vectr.vcp"
            target="_blank"
            rel="noopener"
          >
            Website này được phát triển và tài trợ bởi CLB VECTR
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SponsorSpinner;
