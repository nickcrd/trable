interface TrableConfig {
    authSecret: string,
    mongoUrl: string
}

const trableConfig: TrableConfig = {
    authSecret: process.env.JWT_AUTH_SECRET ?? "some-auth-secret",
    mongoUrl: process.env.MONGO_DB_URL ?? "mongodb://localhost:27017/trable"
}

export default trableConfig