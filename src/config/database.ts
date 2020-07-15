import mongoose from 'mongoose'
import logger from "../utils/logger";

class MongoConnection {
    constructor(mongoUrl: string) {
        logger.info("Attempting to connect to MongoDB database...")
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            logger.info("Connected to MongoDB database")
        }).catch(err => {
            logger.error("An error occurred while trying to connect to the MongoDB database", { error: err.toString() })
        });
    }
}

export default MongoConnection;
