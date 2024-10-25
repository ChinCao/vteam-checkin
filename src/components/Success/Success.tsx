import { ISCONCERT, SpreadsheetData } from "@/constants/constants";
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
            {ISCONCERT() ? "concert" : "Silencio"}
          </p>
          <h1>
            Tên: <span>{data[2].toUpperCase()}</span>
          </h1>
          <h1>
            Lớp: <span>{data[3].toUpperCase()}</span>
          </h1>
          <h1>
            Mã số HS: <span>{data[4].toUpperCase()}</span>
          </h1>
          <h1>
            Hạng vé: <span>{data[1].toUpperCase()}</span>
          </h1>
          <h1>
            Concert: <span>{data[1].includes("concert") ? "CÓ" : "KHÔNG"}</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Success;
