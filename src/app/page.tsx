import InfoScreen from "@/components/InfoScreen/InfoScreen";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout/MainLayout";

export default async function Home() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/signin");
  }
  return (
    <MainLayout color="green" text="Thông tin của bạn">
      <InfoScreen email={session?.user?.email} />
      <h5 className={styles.status}>
        Bạn hãy quay lại website vào lúc 7h:30 để check-in concert!
      </h5>
    </MainLayout>
  );
}

{
  /* <input required type="text" placeholder="Mật mã/ID" /> */
}
{
  /* <input required type="text" placeholder="Tên/Name" /> */
}
{
  /* <input required type="text" placeholder="Mã số HS/StudentID" /> */
}

{
  /* <button className="getCode">Kiểm tra thông tin</button> */
}
{
  /* <input required type="text" placeholder="Tên/Name" /> */
}
{
  /* <input required type="text" placeholder="Lớp/Class" /> */
}
{
  /* <button type="submit" onClick={handleSubmit}>
            Check-in
          </button> */
}
