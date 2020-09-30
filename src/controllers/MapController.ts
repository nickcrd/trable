import * as fs from 'fs'
import * as util from "util";

const readFilePromise = util.promisify(fs.readFile)

class MapController {
    private mapConfigCached: object | undefined

    public async getMapConfig(): Promise<object> {
        if (this.mapConfigCached) {
            return this.mapConfigCached
        }

        try {
            const mapConfigStr = await readFilePromise('config/mapConfig.json', 'utf8')
            const mapConfig = JSON.parse(mapConfigStr)

            this.mapConfigCached = mapConfig

            return mapConfig
        } catch (err) {
            throw err
        }
    }
}

export default new MapController()