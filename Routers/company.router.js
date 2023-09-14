const express = require('express');
const { CreateNewCompany, GetAllCompanies, GetCompanyById, DeleteCompanyById } = require('../controllers/company.controller');
const companyRouter = express.Router();

companyRouter.post("/create", CreateNewCompany);
companyRouter.get("/getall", GetAllCompanies);
companyRouter.get("/getbyid/:id", GetCompanyById)
companyRouter.delete("/delete/:id", DeleteCompanyById)

module.exports = {
    companyRouter
}