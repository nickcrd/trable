/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    authSecret: string
    mongoUrl: string
    sentryUrl?: string
    configLevel: string
    manifest: Manifest
    kalmanFilterConfig: KalmanFilterConfig
  }
  interface Manifest {
    serverDisplayName: string
    apiBaseUrl: string
  }
  interface KalmanFilterConfig {
    R: number
    Q: number
  }
  export const config: Config
  export type Config = IConfig
}