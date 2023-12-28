const {rentals, cars} = require("../models")

const createNewRental = async (req, res) => {
  const {userID, carID, cost, startDate, endDate, status, note, username, address, cancuoc} = req.body;
  try {
    const newRental = await rentals.create({
        userID, carID, note, cost, startDate, endDate, status, address, username, cancuoc
    })
    await cars.update({status: "BUSY"}, {where: {id: carID}} )
    res.status(201).send(newRental);
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteRental = async (req, res) => {
  const {id} = req.params;
  try {
    const findRental = await rentals.findOne({where: {id}});
    await rentals.destroy({where: {id}});
    await cars.update({status: "FREE"}, {where: {id: findRental.carID}} )
    res.status(200).send("DELETE");
  } catch (error) {
    res.status(500).send(error);    
  }
}

const getAllRental = async (req, res) => {
  try {
    const result = await rentals.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

const getByUserId = async (req, res) => {
    const {userID} = req.params;
  try {
    const result = await rentals.findAll({where: {userID}})
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
  }
}

const confirmCheck = async (req, res) => {
  const {id} = req.params;
  try {
    const status = 1;
    await rentals.update({status}, {where: {id}})
    res.status(200).send("Success!");
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
    createNewRental,
    deleteRental,
    getAllRental,
    getByUserId,
    confirmCheck
}