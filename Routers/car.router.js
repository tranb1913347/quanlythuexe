const express = require('express');
const { CreateNewCar, GetAllCar, GetCarByID, DeleteCarById, UpdateCarById, uploadImage, GetCarByOwnerId } = require('../controllers/car.controller');
const { uploadImg } = require('../Middlewares/Upload/uploadimg');
const carRouter = express.Router();

carRouter.post('/create', CreateNewCar);
carRouter.get("/getall", GetAllCar)
carRouter.get("/getbyid/:id", GetCarByID)
carRouter.delete("/delete/:id", DeleteCarById)
carRouter.put("/update/:id", UpdateCarById)
carRouter.post('/uploadimg/:id', uploadImg("CarImage"), uploadImage)
carRouter.get('/getbyowner/:ownerID', GetCarByOwnerId)

module.exports = {
    carRouter
}

