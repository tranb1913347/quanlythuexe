const express = require("express")
const {accountRouter} = require("./account.router")
const { carRouter } = require("./car.router")

const rootRouter = express.Router()

rootRouter.use("/account", accountRouter)
rootRouter.use("/car", carRouter)

module.exports = {
    rootRouter
}