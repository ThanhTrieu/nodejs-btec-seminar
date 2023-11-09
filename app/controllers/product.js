const serviceApi = require("../services/product")


exports.allProduct = async (req, res) => {
    const data =  await serviceApi.getAllProducts()
    res.send(data)
}