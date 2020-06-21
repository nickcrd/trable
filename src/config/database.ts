import mongoose, {Schema} from 'mongoose'

class MongoConnection {
    constructor(mongoUrl: string) {
        console.log("[trable] Database: Attempting to connect to MongoDB...");

        mongoose.Promise = global.Promise;
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}

export default MongoConnection;
