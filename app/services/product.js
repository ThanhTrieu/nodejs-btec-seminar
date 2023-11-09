const axios = require('axios')
const config = require("../config/index")

const getAllProducts = async function(){
    const url = `${config.DOMAIN}products`
    const response = await axios.get(url)
    const result = response.status === 200 ? response.data : {}
    return result
}
module.exports = {
    getAllProducts
}