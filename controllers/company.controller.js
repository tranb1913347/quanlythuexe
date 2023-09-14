const {companies} = require('../models');

const CreateNewCompany = async (req, res) => {
   const {name} = req.body;
   try {
    const checkName = await companies.findOne({where: {name}});
    if(!checkName){
        const newCompany = await companies.create({name});
        res.status(200).send(newCompany)
    }
    else res.status(400).send("NAME EXIST!")
   } catch (error) {
        res.status(500).send(error);
   }
}

const GetAllCompanies = async (req,res) => {
  try {
    let result = await companies.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

const GetCompanyById = async (req, res) => {
  const {id} = req.params
  try {
    let result = await companies.findOne({where: {id}});
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)    
  }
}

const DeleteCompanyById = async (req, res) => {
  const {id} = req.params;
  try {
    await companies.destroy({where: {id}});
    res.status(200).send("DELETED!");
  } catch (error) {
    res.status(500).send(error);
  }
}


module.exports = {
    CreateNewCompany,
    GetAllCompanies,
    GetCompanyById,
    DeleteCompanyById
}