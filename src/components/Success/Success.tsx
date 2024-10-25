import {
  CLASS_INDEX,
  ISCONCERT,
  NAME_INDEX,
  SpreadsheetData,
  STUDENTID_INDEX,
  TICKET_TYPE_INDEX,
  TICKET_WITH_CONCERT,
} from "@/constants/constants";
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
            Tên: <span>{data[NAME_INDEX].toUpperCase()}</span>
          </h1>
          <h1>
            Lớp: <span>{data[CLASS_INDEX].toUpperCase()}</span>
          </h1>
          <h1>
            Mã số HS: <span>{data[STUDENTID_INDEX].toUpperCase()}</span>
          </h1>
          <h1>
            Hạng vé: <span>{data[TICKET_TYPE_INDEX].toUpperCase()}</span>
          </h1>
          <h1>
            Concert:{" "}
            <span>
              {data[TICKET_TYPE_INDEX].includes(TICKET_WITH_CONCERT)
                ? "CÓ"
                : "KHÔNG"}
            </span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Success;
