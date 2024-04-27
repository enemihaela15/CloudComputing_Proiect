// /pages/records/edit.jsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import { recordDefaultValues, serviciuDefaultValues } from "@/utils/constants";
import { getRecordById, updateRecord } from "@/utils/serviciiFunctions";
import RecordForm from "@/components/ServiciuForm";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(serviciuDefaultValues);

  const getRecord = async (id) => {
    const data = await getRecordById(id);

    if (data) {
      setEntry(data);
    }

    setIsLoading(false);
  };

  const onSubmit = async (data) => {
    const response = await updateRecord(data);

    if (response) {
      router.push("/");
    } else {
      alert("Failed to update record");
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
      router.push("/");
    }

    getRecord(id);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {entry._id ? (
        <RecordForm data={entry} onSubmit={onSubmit}/>
      ) : (
        <div className="text-center">Record not found</div>
      )}
    </>
  );
};

export default Edit;