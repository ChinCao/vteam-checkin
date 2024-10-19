import InfoScreen from "@/components/InfoScreen/InfoScreen";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout/MainLayout";
import { getSheetData } from "@/lib/GoogleSpreadsheet";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/signin");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sheetData: any = await getSheetData(session?.user?.email);

  if (!sheetData) {
    redirect("/signout/do-not-exist");
  }
  if (sheetData[6] == "TRUE") {
    redirect("/signout/already-checked-in");
  }

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
