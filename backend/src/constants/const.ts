import 'dotenv/config';

export const isDebugging: boolean = false;

export const serverAddress = isDebugging ? 'localhost' : process.env.SERVER_ADDRESS;
export const pathToKey: string | undefined = process.env.KEY_FILE;
export const pathToCert: string | undefined = process.env.CERT_FILE;
export const port: number = 3000;
export const clientPort: number = isDebugging ? 5173 : 8080;
export const clientAddress: string = `http${isDebugging ? '' : 's'}://${serverAddress}${isDebugging ? `:${clientPort}` : ''}`;
export const bcryptSaltRounds: number = 10;
export const userTokenExpiration: string = '7d';
export const apiLimiterWindowSeconds: number = 15;
export const apiLimiterMax: number = 50000000;
export const adminId: number = 0;
export const adminTokenExpiration: string = '1d';
