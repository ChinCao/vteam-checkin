import { isConcert, SpreadsheetData } from "@/constants/constants";
import styles from "./success.module.css";

const Success = ({
  display,
  data,
}: {
  display: boolean;
  data: SpreadsheetData;
}) => {
  return (
    <>
      {!display && (
        <div className={styles.container}>
          <p className={styles.noti}>
            Đưa màn hình này cho staff VTEAM để check-in{" "}
            {isConcert() ? "concert" : "Silencio"}
          </p>
          <h1>
            Tên: <span>{data[2]}</span>
          </h1>
          <h1>
            Lớp: <span>{data[3]}</span>
          </h1>
          <h1>
            Mã số HS: <span>{data[4]}</span>
          </h1>
          <h1>
            Hạng vé: <span>{data[1]}</span>
          </h1>
          <h1>
            Concert: <span>{data[1].includes("concert") ? "Có" : "Không"}</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Success;
