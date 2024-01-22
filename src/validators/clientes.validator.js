"use strict";
import {check, validationResult} from "express-validator";

export const validacion = [
    //validar nombre del cliente
    check("nameCliente").exists().notEmpty().isLength({min:5,max:40}).withMessage("El nombre del cliente no debe estar vacio,debe tener entre 5 y 40 caracteres"),
    check("emailCliente").exists().notEmpty().isEmail().withMessage("El email del cliente no debe estar vacio y debe cumplir el formato"),
    check("tlfnoCliente").exists().notEmpty().isLength({min:9,max:9}).isNumeric().withMessage("El telefono del cliente no debe estar vacio y debe tener 9 numeroa"),
    check("empresaCliente").exists().notEmpty().matches('[A-Z][a-zñA-ZÑ0-9\s]{4,49}$').withMessage("La empresa no debe estar vacio,debe tener entre 5 y 50 caracteres"),
    (req,res,next)=>{
        const errors = validationResult(req); //array con tantas filas como cmpos validados
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }else{ //todo bien
            next(); //continua la ejecucion
        }
    }
]