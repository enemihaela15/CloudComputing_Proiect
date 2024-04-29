import React, { useState } from "react";
import { useRouter } from "next/router";

const ServiciuForm = (props) => {
  const { data, onSubmit } = props;
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (type, value) => {
    setEntry({ ...entry, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  return (
    <div className="flex justify-center p-4">
      <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 w-full max-w-80 bg-[#79155B]">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Serviciu medical
          </label>
          <input
            type="text"
            id="serviciu"
            value={entry.serviciu}
            onChange={(e) => updateEntry("serviciu", e.target.value)}
            className="bg-[#C23373] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Serviciu"
            required
          />
        </div>
        <div>
          <label
            htmlFor="descriere"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descriere
          </label>
          <textarea
            id="descriere"
            rows="4"
            value={entry.descriere}
            onChange={(e) => updateEntry("descriere", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="pret"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Specialitate
          </label>
          <textarea
            id="specialitate"
            rows="1"
            value={entry.specialitate}
            onChange={(e) => updateEntry("specialitate", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Department"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="tarif"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pret
          </label>
          <textarea
            id="tarif"
            rows="1"
            value={entry.tarif}
            onChange={(e) => updateEntry("tarif", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="durata_minute"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Durata
          </label>
          <textarea
            id="durata_minute"
            rows="1"
            value={entry.durata_minute}
            onChange={(e) => updateEntry("durata_minute", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Duration"
          ></textarea>
        </div>
        <div className="w-full flex justify-center gap-4">
            <button
            type="button"
            onClick={handleCancel}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(entry)}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {entry._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiciuForm;