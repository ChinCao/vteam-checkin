import styles from "./css/LoadingInformation.module.css";

const LoadingInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={`${styles.loader} ${styles.one}`}></span>
        <span className={styles.loader}></span>
      </div>
      <span className={`${styles.loader} ${styles.banner}`}></span>
    </div>
  );
};

export default LoadingInformation;
