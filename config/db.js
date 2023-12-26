const mongoose = require("mongoose");
require('dotenv').config()

module.exports = connect = async () => {
    try{
        const response = await mongoose.connect(process.env.URL);
        console.log('connection created');
    }catch (error){
        console.log(error);
    }
}