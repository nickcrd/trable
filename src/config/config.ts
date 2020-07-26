interface TrableConfig {
    authSecret: string,
    mongoUrl: string
}

// Ugly hack during development
require('dotenv').config()
///

const trableConfig: TrableConfig = {
    authSecret: process.env.JWT_AUTH_SECRET ?? "some-auth-secret",
    mongoUrl: process.env.MONGO_DB_URL ?? "mongodb://localhost:27017/trable"
}

export default trableConfig