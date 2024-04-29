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
		<section className={"bg-black"}>

				<h1 className={"w-[500px] mx-auto mb-2 text-center text-6xl font-bold text-[#C23373]"}>Place order</h1>

				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-[#C23373]"}>This is where you can make an appointment</p>
				
				<form>
						<div className="mb-2 mt-10 px-10 py-">
							<label htmlFor="email" className="font-bold  text-4xl block mb-2  font-large text-white dark:text-white">Service name</label>
							<input align="center"  type="text" id="serviciu"
								className="bg-gray-50 border  text-4xl border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Your service" required/>
						</div>
						<div className="mb-6 px-10 py-5">
							<label htmlFor="number" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-white">First name</label>
							<input align="center"  type="text" id="prenume"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="First name" required/>
						</div>
                        <div className="mb-6 px-10 py-5">
							<label htmlFor="number" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-white">Last name</label>
							<input align="center"  type="text" id="nume"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Last name" required/>
						</div>
						<div className="mb-6 px-10">
							<label htmlFor="number" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-white">Phone number</label>
							<input align="center"  type="text" id="nr_telefon"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Phone number" required/>
						</div>
						<div className="mb-10 px-10">
							<label htmlFor="description"
								className="block mb-2 font-bold  text-4xl  font-medium text-white dark:text-white">Appointment Date</label>
							<input type="text"align="center"  id="data"
									className="bg-gray-50 border text-4xl border-gray-300 text-gray-900 text-sm text-size-24 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Date"  required/>
						</div>
                        <div className="mb-10 px-10">
							<label htmlFor="description"
								className="block mb-2 font-bold  text-4xl  font-medium text-white dark:text-white">Appointment Time</label>
							<input type="text"align="center"  id="ora"
									className="bg-gray-50 border text-4xl border-gray-300 text-gray-900 text-sm text-size-24 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Time"  required/>
						</div>
						<button type="submit "
								onClick={ insertRecord }
								className="text-white py-30 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg  w-full text-2xl sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BOOK
						</button>
					</form>
				
		</section>
		
	)
}