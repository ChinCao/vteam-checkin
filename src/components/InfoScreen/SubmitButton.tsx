/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { Checkin } from "./Checkin";

const SubmitButton = ({ data, password }: { data: any; password: string }) => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const correct = await Checkin(data, password);
    if (correct) {
      router.push("/signout/checkin-successful");
    }
  };

  return (
    <button type="submit" onClick={handleSubmit}>
      check-in
    </button>
  );
};

export default SubmitButton;
