import {config} from 'dotenv'
config();//leer las variables de entorno del sistema

// para leerlas se utiliza el objeto process de node.js
//Utilizar la propiedad env donde se almacenan todas las variables del dispositivo
// console.log(process.env.PORT);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);
// console.log(process.env.DB_PORT);
// console.log(process.env.DB_DATABASE);

/**
 * Lo correcto seria:
 */

export const PORT = process.env.PORT||3000
export const DB_PORT = process.env.DB_PORT||3306
export const DB_HOST = process.env.DB_HOST||"localhost"
export const DB_USER = process.env.DB_USER||"root"
export const DB_PASS = process.env.DB_PASS||""
export const DB_DATABASE = process.env.DB_DATABASE||"empresadb"