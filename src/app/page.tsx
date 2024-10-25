/* eslint-disable @typescript-eslint/no-explicit-any */

import HomePage from "@/components/HomePage/Homepage";
import MainLayout from "@/components/MainLayout/MainLayout";

export default async function Home() {
  const { props, component } = await HomePage();

  return (
    <MainLayout
      color="green"
      text="thông tin vé"
      banner={true}
      sheetData={props.sheetData}
    >
      {component}
    </MainLayout>
  );
}
