/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoScreen from "@/components/InfoScreen/InfoScreen";
import styles from "./home.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getSheetData, updateSheetData } from "@/lib/GoogleSpreadsheet";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import { isConcert } from "@/constants/constants";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { AutoLogOut } from "@/lib/AutoLogOut";
import { GetCSRF, DeleteCSRF } from "@/lib/CSRF";

export default async function HomePage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/signin");
  }

  const sheetData: any = await getSheetData(session?.user?.email);

  if (!sheetData) {
    redirect("/do-not-exist");
  }

  const csrf = await GetCSRF();

  if (!isConcert()) {
    if (sheetData[7] == "TRUE") {
      DeleteCSRF();
      redirect("/already-checked-in");
    }
    if (sheetData[6] == "TRUE" && sheetData[10] != csrf) {
      DeleteCSRF();
      redirect("/already-logged-in");
    }
    await updateSheetData(sheetData, "login", csrf);
  } else {
    if (await AutoLogOut(session, sheetData, csrf)) {
      DeleteCSRF();
      redirect("/concert-relogin");
    }
    if (!sheetData[1].includes("concert")) {
      DeleteCSRF();
      redirect("/no-concert-ticket");
    }
    if (sheetData[9] == "TRUE") {
      DeleteCSRF();
      redirect("/already-checked-in");
    }
    if (sheetData[8] == "TRUE" && sheetData[11] != csrf) {
      DeleteCSRF();
      redirect("/already-logged-in");
    }

    await updateSheetData(sheetData, "login-concert", csrf);
  }

  return (
    <>
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
    </>
  );
}
