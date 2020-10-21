import { launchServer, spawnServer } from './createServer';
import { AddressInfo } from 'net';
import { measureRequestIssuingOnlyTime } from './measureRequestsIssuingOnlyTest';
import { measureFullRequestResponseTime } from './measureFullRequestResponseTest';

export function runRequestsMeasurement() {
    return new Promise((resolve) => {
        console.log('REQUEST EXECUTION TIME MEASUREMENT ::::::::::::::::::::::::')
        // const server = launchServer(); // In same process
        const server = spawnServer(); // spawn in a new separate process (child process)
    
        server.on('listening', async () => {
            console.log('LISTENING ...')
            const serverAddressInfo: AddressInfo = server.address() as AddressInfo;
            const serverUrl = `http://localhost:${serverAddressInfo.port}`;
    
            measureRequestIssuingOnlyTime({
                serverUrl,
                iterationsNumbersList: [100, 500, 1000, 10e3, /*100e3, /*1e6, 10e6*/] // memory problem
            });
    
            console.log('Awaiting 15 secs to launch the next test ...');
            await new Promise((resolve) => setTimeout(() => {
                resolve();
            }, 15e3));
    
            await measureFullRequestResponseTime({
                serverUrl,
                delaysList: [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500],
                iterationsNumbersList: [100, 500, 800, 1000, 2000, 3000, 5000, 10e3, /*20e3, 30e3, 50e3, 100e3, /*1e6, 10e6*/] // memory problem
            });

            resolve();
        });
    });
}
