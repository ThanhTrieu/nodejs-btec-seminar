module.exports = app => {
    const products = require("../controllers/product")
    const router = require("express").Router()

    router.get("/list-all-products", products.allProduct)



    app.use('/api/v1', router)

}