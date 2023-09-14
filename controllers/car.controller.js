const {cars} = require("../models")

const CreateNewCar = async (req,res) => {
  const {companyID, numberOfSeat, cost, ownerID, description} = req.body;
  try {
    const newCar = await cars.create({
        companyID,
        numberOfSeat,
        cost,
        ownerID,
        description,
        status: "FREE"
    })
    res.status(201).send(newCar)
  } catch (error) {
    res.status(500).send(error)
  }
}

const GetAllCar = async (req, res) => {
  try {
    const result = await cars.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

const GetCarByID = async (req, res) => {
    const {id} = req.params;
  try {
    const result = await cars.findOne({where: {id}})
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

const DeleteCarById = async (req,res) => {
  const {id} = req.params;
  try {
    await cars.destroy({where: {id}});
    res.status(200).send("DELETED!");
  } catch (error) {
    res.status(500).send(error)
  }
}

const UpdateCarById = async (req,res) => {
    const {companyID, numberOfSeat, cost, ownerID, description} = req.body;
    const {id} = req.params;
    try {
        if(companyID) await cars.update({companyID}, {where: {id}})
        if(numberOfSeat) await cars.update({numberOfSeat}, {where: {id}})
        if(cost) await cars.update({cost}, {where: {id}})
        if(ownerID) await cars.update({ownerID}, {where: {id}})
        if(description) await cars.update({description}, {where: {id}})
        const newCar = await cars.findOne({where: {id}})
        res.status(200).send(newCar)
    } catch (error) {
        res.status(500).send(error)
    }
}
 
module.exports = {
    CreateNewCar,
    GetAllCar,
    GetCarByID,
    DeleteCarById,
    UpdateCarById
}