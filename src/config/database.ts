import mongoose from 'mongoose'
import logger from "../utils/logger";

class MongoConnection {
    private mongoUrl: string

    constructor(mongoUrl: string) {
        this.mongoUrl = mongoUrl
    }

    async connect() {
        logger.info("Attempting to connect to MongoDB database...")
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            logger.info("Connected to MongoDB database")
        }).catch(err => {
            logger.error("An error occurred while trying to connect to the MongoDB database", { error: err.toString() })
        });
    }

}

export default MongoConnection;
