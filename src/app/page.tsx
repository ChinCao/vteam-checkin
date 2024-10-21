/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoScreen from "@/components/InfoScreen/InfoScreen";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import MainLayout from "@/components/MainLayout/MainLayout";
import { getSheetData, updateSheetData } from "@/lib/GoogleSpreadsheet";
import { cookies } from "next/headers";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import { isConcert } from "@/constants/constants";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/signin");
  }
  const sheetData: any = await getSheetData(session?.user?.email);

  if (!sheetData) {
    redirect("/signout/do-not-exist");
  }
  // const csrf = cookies()
  //   .get("__Host-next-auth.csrf-token")
  //   ?.value.split("|")[0];

  const csrf = cookies().get("next-auth.csrf-token")?.value.split("|")[0];

  if (!isConcert()) {
    if (sheetData[7] == "TRUE") {
      redirect("/signout/already-checked-in");
    }
    if (sheetData[6] == "TRUE" && sheetData[10] != csrf) {
      redirect("/signout/already-logged-in");
    }
    await updateSheetData(sheetData, "login", csrf);
  } else {
    if (!sheetData[1].includes("concert")) {
      redirect("/signout/no-concert-ticket");
    }
    if (sheetData[9] == "TRUE") {
      redirect("/signout/already-checked-in");
    }
    if (sheetData[8] == "TRUE" && sheetData[11] != csrf) {
      redirect("/signout/already-logged-in");
    }
    await updateSheetData(sheetData, "login-concert", csrf);
  }

  return (
    <MainLayout color="green" text="Thông tin của bạn">
      <InfoScreen data={sheetData} />
      <h5 className={styles.status}>
        {sheetData[1].includes("concert") ? (
          <>
            <CountdownTimer />
            Bạn hãy quay lại website vào lúc 19h:30 để check-in concert!
          </>
        ) : (
          ""
        )}
      </h5>
    </MainLayout>
  );
}
