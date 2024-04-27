import RecordForm from "@/components/ServiciuForm";
import { serviciuDefaultValues } from "@/utils/constants";
import { createRecord } from "@/utils/serviciiFunctions";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();
  const entry = serviciuDefaultValues;

  const onSubmit = async (data) => {
    const response = await createRecord(data);

    if (response) {
      router.push("/");
    } else {
      alert("Failed to create record");
    }
  }

  return (
      <RecordForm data={entry} onSubmit={onSubmit} />
  );
};

export default Create;