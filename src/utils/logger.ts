import winston from "winston";
import {config} from "node-config-ts";

const logger = winston.createLogger({
    level: config.configLevel,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console()
    ]
})

export default logger