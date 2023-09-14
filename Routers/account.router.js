const express = require('express');
const {createNewAccount, GetAllAccount, GetAccountById, DeleteAccountById, UpdateAccount} = require('../controllers/account.controller')
const accountRouter = express.Router();

accountRouter.post("/create", createNewAccount)
accountRouter.get("/getall", GetAllAccount)
accountRouter.get("/getbyid/:id", GetAccountById)
accountRouter.delete("/deletebyid/:id", DeleteAccountById)
accountRouter.post("/update/:id", UpdateAccount )

module.exports = {
    accountRouter
}