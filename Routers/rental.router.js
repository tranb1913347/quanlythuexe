const express = require("express");
const { createNewRental, deleteRental, getAllRental, getByUserId, confirmCheck } = require("../controllers/rental.controller");
const rentalRouter = express.Router();


rentalRouter.post("/create", createNewRental)
rentalRouter.delete("/delete/:id", deleteRental)
rentalRouter.get("/getall", getAllRental)
rentalRouter.get("/getbyid/:userID", getByUserId)
rentalRouter.put("/check/:id", confirmCheck)

module.exports = {
    rentalRouter
}