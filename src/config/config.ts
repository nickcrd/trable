interface TrableConfig {
    authSecret: string
    mongoUrl: string
    configLevel: string
    sentryUrl?: string
    nodeConfig: {
        defaultTxPower: number
        minMeasurements: number
        kalman: {
            R: number,
            Q: number
        }
    }
}

// Ugly hack during development
require('dotenv').config()
///

const trableConfig: TrableConfig = {
    authSecret: process.env.JWT_AUTH_SECRET ?? "some-auth-secret",
    mongoUrl: process.env.MONGO_DB_URL ?? "mongodb://localhost:27017/trable",
    sentryUrl: process.env.SENTRY_URL,
    configLevel: process.env.NODE_ENV === "production" ? "info" : "debug",
    nodeConfig: {
        defaultTxPower: 2,
        minMeasurements: 5,
        kalman: {
            R: 0.008,
            Q: 4
        }
    }
}

export default trableConfig