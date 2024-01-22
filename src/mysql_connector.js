"use strict";
import { createPool } from "mysql2/promise";
import {DB_HOST,DB_DATABASE,DB_PASS,DB_PORT,DB_USER} from "./config.js"
const conexion = createPool({//establecer caracteristicas
    "host": DB_HOST,
    "user": DB_USER,
    "password": DB_PASS,
    "database": DB_DATABASE,
    "port": DB_PORT
});

export default conexion;