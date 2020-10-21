import { launchServer } from '../../requestsMeasurement/createServer';
import { AddressInfo } from 'net';
import config from '../config';

const port = config.port;

const server = launchServer(port);

server.on('listening', () => {
    const addressInfo = server.address() as AddressInfo;
    console.log('Server listening at port ' + addressInfo.port + ' ...');
});
