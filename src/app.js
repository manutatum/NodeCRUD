"use strict";
//Importamos Express
import express from "express";
import routerCliente from "./routes/clientes.routers.js";

import { PORT } from "./config.js";
import cors from 'cors'; 

const app = express(); //Objeto express

//configurar el puerto
//const PORT = 3000;
//habilitar las corse
app.use(cors());
//middleware
app.use(express.json());
app.use(routerCliente);

//controlar si se pasa una ruta en la url
app.use((req,res)=>{
    res.status(404).json({
        message: "Ruta no encontrada"
    });
});

//Hacer que el server escuche ese puerto
app.listen(PORT,()=>{
    console.log('Escuchando solicitudes');
});