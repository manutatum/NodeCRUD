"use strict";
import conexion from "../mysql_connector.js";

export const getClientes = async (req,res)=>{
    try {
        const result = await conexion.query("SELECT * FROM clientes");
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({
            "message": "Error en el servidor"
        });
    }
}
export const getCliente = async (req,res)=>{
    try {
        const {id} = req.params
        const [result] = await conexion.query("SELECT * FROM clientes WHERE id = ?",[id]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            "message": "Error en el servidor"
        });
    }
}
export const delCliente = async (req,res)=>{
    try {
        const {id} = req.params
        const [result] = await conexion.query("DELETE FROM clientes WHERE id = ?",[id]);
        if (result.affectedRows == 0) {
            return res.status(400).json({
                "message": "No existe"
            });
        }else{
            return res.status(200).json({
                "message": `El cliente ${req.params.id} ha sido eliminado`
            });
        }   
    } catch (error) {
        res.status(500).json({
            "message": "Error en el servidor"
        });
    }
}
export const addCliente = async (req,res)=>{
    try {
        const {nameCliente,emailCliente,tlfnoCliente,empresaCliente} = req.body;
        const [result] = await conexion.query("INSERT INTO clientes(nameCliente,emailCliente,tlfnoCliente,empresaCliente) VALUES (?,?,?,?)",[nameCliente,emailCliente,tlfnoCliente,empresaCliente]);
        res.status(201).json({id:result.insertId});
    } catch (error) {
        res.status(500).json({
            "message": "Error en el servidor"
        });
    }
}
export const updateCliente = async (req,res)=>{
    try {
        const {id} = req.params;
        const {nameCliente,emailCliente,tlfnoCliente,empresaCliente} = req.body;
        // const [result] = await conexion.query("UPDATE clientes SET nameCliente=?,emailCliente=?,tlfnoCliente=?,empresaCliente=? WHERE id = ?",[nameCliente,emailCliente,tlfnoCliente,empresaCliente,id]);
        const [result] = await conexion.query("UPDATE clientes SET nameCliente=IFNULL(?,nameCliente),emailCliente=IFNULL(?,emailCliente),tlfnoCliente=IFNULL(?,tlfnoCliente),empresaCliente=IFNULL(?,empresaCliente) WHERE id = ?",[nameCliente,emailCliente,tlfnoCliente,empresaCliente,id]);
        if (result.affectedRows == 0) {
            return res.status(400).json({
                "message": "No existe"
            });
        }else{
            return res.status(200).json({
                "message": `El cliente ${req.params.id} ha sido actualizado`
            });
        }
    } catch (error) {
        res.status(500).json({
            "message": "Error en el servidor"
        });
    }
}