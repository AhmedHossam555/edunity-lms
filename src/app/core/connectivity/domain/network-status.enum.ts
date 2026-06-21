export enum NetworkConnectionStatus {
  Online = 'online',
  Offline = 'offline'
}
export const APP_STATE = {
  OFFLINE: 'offline',
  LOADING: 'loading',
  READY: 'ready',
} as const;

export type AppState = (typeof APP_STATE)[keyof typeof APP_STATE];
