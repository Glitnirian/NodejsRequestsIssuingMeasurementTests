export interface IConfig {
    host: string,
    port?: number
}

const config: IConfig = {
    host: 'http://localhost',
    port: 8123
};

export default config;
