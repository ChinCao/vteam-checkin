import styles from "./rejected.module.css";

const Rejected = () => {
  const newCheckin = true;
  const rightCode = false;
  return (
    <div className={styles.container}>
      {newCheckin && rightCode && (
        <>
          <h1>Hình như thông tin đã có chút nhầm lẫn</h1>
          <h3>Hãy vào check-in với staff VTEAM tại quầy nếu cứ gặp lỗi nhé</h3>
          <h4>Chúc bạn có 1 đêm Halloween nồng cháy cùng với chúng mình!</h4>
        </>
      )}
      {newCheckin && !rightCode && (
        <>
          <h1>
            Mật mã của bạn không chính xác! Hãy check Email đăng ký Silencio để
            lấy mã !
          </h1>
        </>
      )}
      {!newCheckin && rightCode && <h1>Xin lỗi, nhưng bạn đã check-in rồi!</h1>}
    </div>
  );
};

export default Rejected;
