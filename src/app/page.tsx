/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoScreen from "@/components/InfoScreen/InfoScreen";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout/MainLayout";
import { getSheetData, updateSheetData } from "@/lib/GoogleSpreadsheet";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/signin");
  }
  const sheetData: any = await getSheetData(session?.user?.email);

  if (!sheetData) {
    redirect("/signout/do-not-exist");
  }
  if (sheetData[6] == "TRUE") {
    redirect("/signout/already-logged-in");
  }
  if (sheetData[7] == "TRUE") {
    redirect("/signout/already-checked-in");
  }
  await updateSheetData(sheetData, "login");

  return (
    <MainLayout color="green" text="Thông tin của bạn">
      <InfoScreen data={sheetData} />
      <h5 className={styles.status}>
        {sheetData[1].includes("concert")
          ? " Bạn hãy quay lại website vào lúc 7h:30 để check-in concert!"
          : ""}
      </h5>
    </MainLayout>
  );
}
