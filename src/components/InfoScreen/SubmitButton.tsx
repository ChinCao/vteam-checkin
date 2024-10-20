/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateSheetData } from "@/lib/GoogleSpreadsheet";
import router from "next/navigation";

const SubmitButton = async ({
  data,
  password,
}: {
  data: any;
  password: string;
}) => {
  "use server";
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password == data[2][0] + data[4].slice(-2)) {
      localStorage.setItem(
        "loginStatus",
        "Đăng nhập bằng email đã đăng ký Silencio"
      );
      updateSheetData(data);
      router.push("/signout");
    }
  };

  return (
    <button type="submit" onClick={handleSubmit}>
      Check-in
    </button>
  );
};

export default SubmitButton;
