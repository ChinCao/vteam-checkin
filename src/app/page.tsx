/* eslint-disable @typescript-eslint/no-explicit-any */

import HomePage from "@/components/HomePage/Homepage";
import LoadingInformation from "@/components/Loader/LoadingInformation";
import MainLayout from "@/components/MainLayout/MainLayout";
import { Suspense } from "react";

export default function Home() {
  return (
    <MainLayout color="green" text="thông tin vé">
      <Suspense fallback={<LoadingInformation />}>
        <HomePage />
      </Suspense>
    </MainLayout>
  );
}
