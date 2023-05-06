import { read, toRegister } from "./operations.js";

import { argv } from "node:process";

const [opt, aName, yearsOld, aType, aColor, diseases] = argv.slice(2);

/* ¿Deseas saber como registrar? Escribe el argumento "how"*/
if (opt === "how") {
	console.log(
		"/==================================================================================================/"
	);
	console.log("------> Comando: node index.js register -> datos del paciente");
	console.log(
		"Para registar debes agregar: Nombre del animal | Edad | Tipo del animal | Color | Enfermedad"
	);
	console.log(
		"___________________________________________________________________________________________"
	);
	console.log(
		"------> Comando para ver la lista de pacientes: node index.js read"
	);
	console.log(
		"/==================================================================================================/"
	);
}

/* ¿Necesitas registrar al paciente? Escribe el argumento "register" + las descripciones del paciente*/
if (opt === "register") {
	toRegister(aName, yearsOld, aType, aColor, diseases);
}

/* ¿Para conocer la lista de pacientes? Escribe el argumento "read"*/
if (opt === "read") {
	read();
}
