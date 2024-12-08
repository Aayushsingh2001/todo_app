const mongoose = require("mongoose")
const logger = require("../utils/logger")

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        logger.info("Mongo Db connected!")
    } catch(error){
        logger.error("MongoDb connection failed", error)
    }
}

module.exports = connectDB;