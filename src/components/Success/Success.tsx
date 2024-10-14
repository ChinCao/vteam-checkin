import styles from "./success.module.css";

const Success = ({ display }: { display: boolean }) => {
  return (
    <>
      {!display && (
        <div className={styles.container}>
          <p>Đưa màn hình này cho staff VTEAM để check-in nhé</p>
          <h1>
            Tên: <span>Cao Cự Chính</span>
          </h1>
          <h1>
            Lớp: <span>11B4</span>
          </h1>
          <h1>
            Mã số HS: <span>VS054678</span>
          </h1>
          <h1>
            Hạng vé: <span> {`Bạch (9-10-11-12)`}</span>
          </h1>
          <h1>
            Concert: <span>Có</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Success;
