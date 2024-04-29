// /components/MainPage.jsx

import React from 'react'

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/serviciiFunctions";
import Navbar from "@/utils/Navbar.js";

const MainPage = () => {
    const router = useRouter();
    const [records, setRecords] = useState([]);
  
    const fetchRecords = async () => {
      try {
        const response = await getRecords();
  
        setRecords(response);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleDeleteRecord = async (id) => {
      try {
        const response = await deleteRecord(id);
  
        if (response.deletedCount === 1) {
          const newRecords = records.filter((record) => record._id !== id);
          setRecords(newRecords);
        }
      } catch (error) {
        console.log(error)
      }
    };
  
    const handleUpdateRecord = (id) => {
      router.push(`/servicii/edit?id=${id}`);
    };
  
    useEffect(() => {
      fetchRecords();
    }, []);
  
    return (
      <section>
        <h1 className={"w-[500px] mx-auto text-center mt-3 text-6xl font-bold text-[#C23373] padding-[100px]"}>Medical Services App</h1>
			  <p className={"w-[1000px] mx-auto text-center mt-8 text-3xl text-[#C23373]"}>This is an app that showcases available medical services for our restaurant.</p>
        <br></br>
        <div><Navbar/></div>
        <br></br>
        <p className={"container text-left text-5xl font-bold text-[#F6635C] pl-[20px]"}>Our medical services</p>
        <br></br>
        <div className="p-4 flex flex-wrap gap-4">
                {records.map((record) => (
                <div
                    className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700"
                    key={record._id}
                    style={{ backgroundColor: "#FFBA86" }}
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#79155B]">
                    {record.serviciu}
                    </h5>
                    <p className="mb-3 font-bold text-gray-700 dark:text-[#79155B]">
                    {"Specialitate: " + record.specialitate}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-[#79155B]">
                    {record.descriere}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-[#79155B]">
                    {"Price: " + record.tarif +" lei"}
                    </p>
                    <div className="flex justify-center">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => handleUpdateRecord(record._id)}
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => handleDeleteRecord(record._id)}
                    >
                        Delete
                    </button>
                    </div>
                </div>
                ))}
            </div>
      </section>
      
    );
  };
  
  export default MainPage;