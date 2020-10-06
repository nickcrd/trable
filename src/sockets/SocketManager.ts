import http from "http";
import sockets, {Socket} from 'socket.io'
import socketAuthMiddleware from "../middlewares/auth/socketAuthMiddleware";
import logger from "../utils/logger";
import Location from "../models/device/Location";

export class SocketManager {

    // Map: ApiUser.ID -> Socket.ID
    public socketIdMap: Map<string, string> = new Map()
    private io: sockets.Server | undefined

    public setupSockets(server: http.Server) {
        this.io = sockets(server, {
            // Got wrong typebindings, so i'll just set it to type any
            handlePreflightRequest: (req: any, res: any) => {
                const headers = {
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Allow-Origin": req.headers.origin,
                    "Access-Control-Allow-Credentials": true
                };
                res.writeHead(200, headers);
                res.end();
            }})


        this.io?.use(socketAuthMiddleware)

        this.io?.on('connection', (socket: Socket) => {
            /*
            this.socketIdMap.forEach((value, key) => {
                io.to(value).emit('hello', "You're API User " + key)
            })

             */

        });
        /*
        setInterval(() => {
            this.socketIdMap.forEach((value, key) => {
                this.io?.to(value).emit('updateLocation', {x: Math.random() * 3, y: Math.random() * 5 })
            })
        }, 5000)
        */
    }

    public notifyClientPositionChange(userId: string, location: Location) {
        logger.info("New Location Update: ", { userId: userId, location: location })
        this.io?.to(userId).emit('updateLocation', location)
    }

}

export default new SocketManager()
