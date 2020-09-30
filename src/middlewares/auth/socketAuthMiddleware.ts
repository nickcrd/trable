import {Socket} from "socket.io";
import AuthController from "../../controllers/AuthController";
import SocketManager from "../../sockets/SocketManager";
import logger from "../../utils/logger";

export default (socket: Socket, next: (err?: any) => void) => {
    const authHeader = socket.handshake.headers['authorization']
    let jwt: string

    if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
        jwt = authHeader.split(' ')[1];
    } else {
        logger.warn("No Auth Token specified")
        next(new Error("No Auth Token specified"))
        return
    }

    AuthController.validateJWT(jwt).then(apiUser => {
        SocketManager.socketIdMap.set(apiUser._id, socket.id)
        next()
    }).catch(err => {
        logger.warn("Invalid Auth Token specified")
        next(new Error("Unauthorized: Invalid Auth Token"))
    })
}