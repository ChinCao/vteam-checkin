/* eslint-disable @typescript-eslint/no-explicit-any */

import HomePage from "@/components/HomePage/Homepage";
import MainLayout from "@/components/MainLayout/MainLayout";
import { GET_THEME } from "@/constants/constants";

export default async function Home() {
  const { props, component } = await HomePage();

  return (
    <MainLayout
      theme={GET_THEME(props.sheetData)}
      text="thông tin vé"
      banner={true}
    >
      {component}
    </MainLayout>
  );
}
