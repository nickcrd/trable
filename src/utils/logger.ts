import winston from "winston";
import trableConfig from "../config/config";

const logger = winston.createLogger({
    level: trableConfig.configLevel,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console()
    ]
})

export default logger