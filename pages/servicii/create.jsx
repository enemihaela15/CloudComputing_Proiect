import ServiciuForm from "@/components/ServiciuForm";
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
      <ServiciuForm data={entry} onSubmit={onSubmit} />
  );
};

export default Create;