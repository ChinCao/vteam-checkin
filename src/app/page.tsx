import LoadingInformation from "@/components/Loader/LoadingInformation";
import { Suspense } from "react";
import Home from "./Home";

export default async function Page() {
  return (
    <Suspense fallback={<LoadingInformation />}>
      <Home />
    </Suspense>
  );
}
