/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoScreen from "@/components/InfoScreen/InfoScreen";
import styles from "./home.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getSheetData, updateSheetData } from "@/lib/GoogleSpreadsheet";
import CountdownTimer from "@/components/CountdownTimer/CountdownTimer";
import {
  CHECKIN_INDEX,
  CONCERT_CHECKIN_INDEX,
  CONCERT_LOGIN_INDEX,
  CSRF_CONCERT,
  CSRF_SILENCIO,
  ISCONCERT,
  LOGIN_INDEX,
  TICKET_TYPE_INDEX,
  TICKET_WITH_CONCERT,
} from "@/constants/constants";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { AutoLogOut } from "@/lib/AutoLogOut";
import { GetCSRF } from "@/lib/Tokens";

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

  if (!ISCONCERT()) {
    if (sheetData[CHECKIN_INDEX] == "TRUE") {
      redirect("/already-checked-in");
    }
    if (sheetData[LOGIN_INDEX] == "TRUE" && sheetData[CSRF_SILENCIO] != csrf) {
      redirect("/already-logged-in");
    }
    await updateSheetData(sheetData, "login", csrf);
  } else {
    if (await AutoLogOut(session, sheetData, csrf)) {
      redirect("/concert-relogin");
    }
    if (!sheetData[TICKET_TYPE_INDEX].includes(TICKET_WITH_CONCERT)) {
      redirect("/no-concert-ticket");
    }
    if (sheetData[CONCERT_CHECKIN_INDEX] == "TRUE") {
      redirect("/already-checked-in");
    }
    if (
      sheetData[CONCERT_LOGIN_INDEX] == "TRUE" &&
      sheetData[CSRF_CONCERT] != csrf
    ) {
      redirect("/already-logged-in");
    }

    await updateSheetData(sheetData, "login-concert", csrf);
  }

  return {
    props: {
      sheetData,
    },
    component: (
      <>
        <InfoScreen data={sheetData} />
        <h5 className={styles.status}>
          {sheetData[1].includes(TICKET_WITH_CONCERT) ? (
            <>
              <CountdownTimer />
              Bạn hãy quay lại website vào lúc 19h:30 để check-in concert!
            </>
          ) : (
            ""
          )}
        </h5>
      </>
    ),
  };
}
