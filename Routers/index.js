const express = require("express")
const {accountRouter} = require("./account.router")
const { carRouter } = require("./car.router")
const {companyRouter} = require("./company.router")

const rootRouter = express.Router()

rootRouter.use("/account", accountRouter)
rootRouter.use("/car", carRouter)
rootRouter.use("/company", companyRouter)

module.exports = {
    rootRouter
}