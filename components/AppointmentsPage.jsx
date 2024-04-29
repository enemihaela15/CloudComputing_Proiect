import {useEffect, useState} from "react";
import React from "react";
import Navbar from "@/utils/Navbar.js";

export default function AppointmentsPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/programari', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch(e){
			console.log(e);
		}
	}, []);

	const deleteRecord = async (e) => {
		e.preventDefault();

		console.log(e.target.id);
		const id = e.target.id;

		try{
			fetch(`/api/programari?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch(e){
			console.log(e);
		}
	}

	console.log(records);

    return (
        <section className={"bg-white"}> {/* Modificarea clasei bg-black la bg-white */}
          <h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-[#C23373]"}>Programari</h1>
          <p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-[#C23373]"}>Aici poti vedea programarile tale</p>
          <br></br>
          <div><Navbar/></div>
      
          <div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 "}>
            {
              records.map(record => (
                <div key={record._id}
                     className={"max-w-sm p-6 bg-white border-2 border-solid border-[#79155B] rounded-lg shadow"}
                >
                  <h3 className={"mb-2 text-3xl font-bold text-[#F6635C]"}>{record.serviciu}</h3>
                  <h4 className={"font-bold text-black "}>Nume: {record.nume + " " + record.prenume }</h4>
                  <h4 className={"font-bold text-black"}>Nr telefon: {record.nr_telefon}</h4>
                  <h4 className={"font-bold italic hover:not-italic text-[#FFBA86] "}>Data si ora: {record.dataProgramare + " " + record.ora }</h4>
                  <button type="button"
                          onClick={deleteRecord}
                          id={record._id}
                          className="mt-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Delete!
                  </button>
                </div>
              ))
            }
          </div>
        </section>
      );
}