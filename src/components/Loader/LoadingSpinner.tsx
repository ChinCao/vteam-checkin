import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({
  margin_right,
  size,
}: {
  margin_right?: string;
  size?: string;
}) => {
  return (
    <span
      className={styles.loader}
      style={{
        marginRight: margin_right ? margin_right : "",
        width: size ? size : "",
        height: size ? size : "",
      }}
    ></span>
  );
};

export default LoadingSpinner;
