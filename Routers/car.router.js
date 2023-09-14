const express = require('express');
const { CreateNewCar, GetAllCar, GetCarByID, DeleteCarById, UpdateCarById } = require('../controllers/car.controller');
const carRouter = express.Router();

carRouter.post('/create', CreateNewCar);
carRouter.get("/getall", GetAllCar)
carRouter.get("/getbyid/:id", GetCarByID)
carRouter.delete("/delete/:id", DeleteCarById)
carRouter.put("/update/:id", UpdateCarById)

module.exports = {
    carRouter
}

