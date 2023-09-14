const {accounts} = require("../models");

const createNewAccount = async (req,res) => {
  const {username, password, email, phone, address, type} = req.body;
  try{
    const findEmail = await accounts.findOne({email})
    if(!findEmail){
        const newAccount = await accounts.create({
            username,
            password,
            email,
            phone,
            address,
            type
        })
        res.status(201).send(newAccount);
    }
    else res.status(404).send("EMAIL EXIST!")
  } catch(err){
    res.status(500).send(err);
  }
}

const GetAllAccount = async (req, res) => {
  try {
    const result = await accounts.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

const GetAccountById = async (req,res) => {
    const {id} = req.params;
  try {
    const result = await accounts.findOne({where: {id}});
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
}

const DeleteAccountById = async (req, res) => {
  const {id} = req.params;
  try {
    await accounts.destroy({where: {id}});
    res.status(200).send("DELETED!");
  } catch (error) {
    res.status(500).send(error);
  }
}

const UpdateAccount = async (req, res) => {
    const {username, password, email, phone,avatar, address, type} = req.body;
    const {id} = req.params;
    try {
        if(username) await accounts.update({username}, {where: {id}})
        if(password) await accounts.update({password}, {where: {id}})
        if(email) await accounts.update({email}, {where: {id}})
        if(phone) await accounts.update({phone}, {where: {id}})
        if(address) await accounts.update({address}, {where: {id}})
        if(avatar) await accounts.update({avatar}, {where: {id}})
        if(type) await accounts.update({type}, {where: {id}})
        const newAccount = await accounts.findOne({where: {id}});
        res.status(200).send(newAccount)

    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    createNewAccount,
    GetAllAccount,
    GetAccountById,
    DeleteAccountById,
    UpdateAccount
}