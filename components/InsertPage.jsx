import Navbar from "@/utils/Navbar.js";

export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const serviciu = document.getElementById('serviciu').value;
		const nume = document.getElementById('nume').value;
		const prenume = document.getElementById('prenume').value;
		const nr_telefon = document.getElementById('nr_telefon').value;
        const dataProgramare = document.getElementById('data').value;
        const ora = document.getElementById('ora').value;
		const data = {
            serviciu: serviciu,
			nume: nume,
			prenume: prenume,
			nr_telefon: nr_telefon,
			dataProgramare: dataProgramare,
            ora: ora
		};

		console.log(data);

		fetch("/api/programari", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('serviciu').value = '';
				document.getElementById('data').value = '';
			})
	}

	return (
		<section className={"bg-white"}>

				<h1 className={"w-[500px] mx-auto mb-2 text-center text-6xl font-bold text-[#C23373]"}>Place order</h1>

				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-[#C23373]"}>This is where you can make an appointment</p>
				<br></br>
				<div><Navbar/></div>

				<form>
						<div className="mb-2 mt-10 px-10 py-">
							<label htmlFor="service" className="font-bold  text-4xl block mb-2  font-large text-white dark:text-[#F6635C]">Medical service</label>
							<input align="center"  type="text" id="serviciu"
								className="bg-gray-50 border  text-4xl border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#79155B] dark:focus:ring-[#79155B] dark:focus:border-[#79155B] font-bold"
								placeholder="Your service" 
								style={{ backgroundColor: '#FFBA86', borderColor: '#FFBA86' }}required/>
						</div>
						<div className="mb-6 px-10 py-5">
							<label htmlFor="prenume" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-[#F6635C]">First name</label>
							<input align="center"  type="text" id="prenume"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#79155B] dark:focus:ring-[#79155B] dark:focus:border-[#79155B] font-bold"
								placeholder="First name" 
								style={{ backgroundColor: '#FFBA86', borderColor: '#FFBA86' }} required/>
						</div>
                        <div className="mb-6 px-10 py-5">
							<label htmlFor="nume" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-[#F6635C]">Last name</label>
							<input align="center"  type="text" id="nume"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#79155B] dark:focus:ring-[#79155B] dark:focus:border-[#79155B] font-bold"
								placeholder="Last name"
								style={{ backgroundColor: '#FFBA86', borderColor: '#FFBA86' }} required/>
						</div>
						<div className="mb-6 px-10">
							<label htmlFor="nr_telefon" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-[#F6635C]">Phone number</label>
							<input align="center"  type="text" id="nr_telefon"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#79155B] dark:focus:ring-[#79155B] dark:focus:border-[#79155B] font-bold"
								placeholder="Phone number"
								style={{ backgroundColor: '#FFBA86', borderColor: '#FFBA86' }} required/>
						</div>
						<div className="mb-10 px-10">
							<label htmlFor="data"
								className="block mb-2 font-bold  text-4xl  font-medium text-white dark:text-[#F6635C]">Appointment Date</label>
							<input type="text"align="center"  id="data"
									className="bg-gray-50 border text-4xl border-gray-300 text-gray-900 text-sm text-size-24 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#79155B] dark:focus:ring-[#79155B] dark:focus:border-[#79155B] font-bold"
									placeholder="Date"
									style={{ backgroundColor: '#FFBA86', borderColor: '#FFBA86' }} required/>
						</div>
                        <div className="mb-10 px-10">
							<label htmlFor="time"
								className="block mb-2 font-bold  text-4xl  font-medium text-white dark:text-[#F6635C]">Appointment Time</label>
							<input type="text"align="center"  id="ora"
									className="bg-gray-50 border text-4xl border-gray-300 text-gray-900 text-sm text-size-24 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#79155B] dark:focus:ring-[#79155B] dark:focus:border-[#79155B] font-bold"
									placeholder="Time"
									style={{ backgroundColor: '#FFBA86', borderColor: '#FFBA86' }}  required/>
						</div>
						<button type="submit "
								onClick={ insertRecord }
								className="text-white py-3 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 font-large rounded-lg w-full text-2xl sm:w-auto px-10 py-2.5 text-center dark:bg-[#F6635C] dark:hover:bg-[#C23373] dark:focus:ring-[#F6635C]">BOOK
						</button>
					</form>
				
		</section>
		
	)
}