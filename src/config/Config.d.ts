/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    authSecret: string
    mongoUrl: string
    sentryUrl?: string
    configLevel: string
    manifest: Manifest
    nodeConfig: NodeConfig
  }
  interface Manifest {
    serverDisplayName: string
    apiBaseUrl: string
  }
  interface NodeConfig {
    defaultTxPower: number
    minMeasurements: number
    kalman: Kalman
  }
  interface Kalman {
    R: number
    Q: number
  }
  export const config: Config
  export type Config = IConfig
}