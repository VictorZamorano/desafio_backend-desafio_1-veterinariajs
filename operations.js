import { nanoid } from "nanoid";

import { writeFile, readFile } from "node:fs/promises";

/* Funcion para registrar pacientes */
export const toRegister = async (aName, yearsOld, aType, aColor, diseases) => {
	try {
		const registered = JSON.parse(await readFile("appointment.json"));
		const addPatient = {
			id: nanoid(),
			animalName: aName,
			years: yearsOld,
			animalType: aType,
			animalColor: aColor,
			disease: diseases,
		};
		registered.push(addPatient);
		await writeFile("appointment.json", JSON.stringify(registered));
	} catch (error) {
		console.log(error);
	}
};

/* Funciones para ver la lista de pacientes */
export const read = async () => {
	try {
		const registered = JSON.parse(await readFile("appointment.json"));
		console.log(registered);
	} catch (error) {
		console.log(error);
	}
};
