/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { Checkin } from "./Checkin";
import { isConcert } from "@/constants/constants";

const SubmitButton = ({ data, password }: { data: any; password: string }) => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const correct = await Checkin(data, password);
    if (correct) {
      if (isConcert()) {
        router.push("/signout/checkin-concert-successful");
      } else {
        router.push("/signout/checkin-successful");
      }
    }
  };

  return (
    <button type="submit" onClick={handleSubmit}>
      Check-in
    </button>
  );
};

export default SubmitButton;
