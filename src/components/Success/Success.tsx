import styles from "./success.module.css";

type StudentInfoArray = [
  string, // '16'
  string, // 'Tía (9-10-11-12, có concert)'
  string, // 'Hồ Nguyễn Ánh Minh'
  string, // '10A4'
  string, // 'VS053960'
  string, // 'minh053960@stu.vinschool.edu.vn'
  string, // 'TRUE' (should be converted to boolean)
  string // 'FALSE' (should be converted to boolean)
];

const Success = ({
  display,
  data,
}: {
  display: boolean;
  data: StudentInfoArray;
}) => {
  return (
    <>
      {!display && (
        <div className={styles.container}>
          <p>Đưa màn hình này cho staff VTEAM để check-in nhé</p>
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
