import express from "express";
import {config} from "node-config-ts";

export default (app: express.Application) => {
    app.get('/manifest.json', (req, res) => {
        res.json({
            displayName: config.manifest.serverDisplayName,
            apiUrl: config.manifest.apiBaseUrl,
            trableServerVersion: "v.0.1", // TODO: Not implemented yet
            requiredClient: "v.1" // TODO: Not implemented yet
        })
    })

}