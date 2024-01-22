"use strict";
import { Router } from "express";
import { getClientes,getCliente, delCliente, addCliente, updateCliente} from "../controllers/clientes.controllers.js";
import { validacion } from "../validators/clientes.validator.js";

const router = Router();

router.get("/clientes", getClientes);
router.get("/clientes/:id", getCliente);
router.delete("/clientes/:id", delCliente);
router.post("/clientes", validacion,addCliente);
router.put("/clientes/:id", validacion,updateCliente);
// router.patch("/clientes/:id", updateCliente);
export default router; //exportamos