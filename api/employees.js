import express from "express";
const router = express.Router();
export default router;

import { getEmployees, createEmployee, getEmployee, deleteEmployee, updateEmployee } from "#db/queries/employees";

// GET


router.route("/").get(async (req, res)=>{
    const employees = await getEmployees();
    res.send(employees)
    
    
})

// Post employees

router.route("/").post(async (req, res)=>{
    if(!req.body){
        return res.status(400).send({error: "Missing req.body" })
    }
    const {name, birthday, salary} = req.body

    if(!name || !birthday || !salary) {
        return res.status(400).send({error: "Missing required params"})
    }
    const employee = await createEmployee({name, birthday, salary})

    res.status(201).send(employee)
})

// GET employees/:id

router.route("/:id").get(async (req, res)=>{
    const id = Number (req.params.id)
    if( id < 0) {
        return res.status(400).send("Id must be a positive number")
    }
    const employee = await getEmployee(id)
    if(!employee){
        return res.status(404).send({error: "Employee not found"})
    }
    res.send(employee)
})

// Delete

router.route("/:id").delete(async (req, res)=> {
    const id = Number (req.params.id)
    if( !Number.isInteger(id) || id < 0){
        return res.status(400).send({error: "Please send a positive number"})
    }
   
    const result = await deleteEmployee(id)
    if(!result){
        return res.status(404).send({error: "Employee not found"})
    }
     res.sendStatus(204)
})

// PUT
router.route("/:id").put(async (req, res)=>{
    const id = Number (req.params.id)
    
    if(!req.body){
        return res.status(400).send({error: "Missing req.body"})
    }
    const {name, birthday, salary} = req.body

    if(!name || !birthday || !salary) {
        return res.status(400).send({error: "Missing required fields"})
    }

    if (id < 0) {
        return res.status(400).send("ID must be a positive number")
    }

    const employee = await getEmployee(id)
    if(!employee){
    return res.status(404).send({error: "Employee does not exist"})
    }

    const updated = await updateEmployee({ name, birthday, salary})
    res.status(200).send(updated)
})