import { measureProcessingOnlyTime } from '../../measureProcessingOnlyTest';
import { measureRequestIssuingOnlyTime } from '../../requestsMeasurement/measureRequestsIssuingOnlyTest';
import { measureFullRequestResponseTime } from '../../requestsMeasurement/measureFullRequestResponseTest';
import config from '../config';

const serverUrl = `${config.host}:${config.port}`;

(async () => {
    // __________________ iterating only (simple math operation)
    measureProcessingOnlyTime();

    // ___________________ only requests issuing measurement
    measureRequestIssuingOnlyTime({
        serverUrl,
        iterationsNumbersList: [100, 500, 1000, 10e3, /*100e3, /*1e6, 10e6*/] // memory problem
    });

    // _______ await a bit
    console.log('Awaiting 15 secs to launch the next test ...')
    
    await new Promise((resolve) => setTimeout(() => {
        resolve()    
    }, 15e3));
    
    // _______ that's the most important test (request response time)
    await measureFullRequestResponseTime({
        serverUrl,
        delaysList: [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500],
        iterationsNumbersList: [100, 500, 800, 1000, 2000, 3000, 5000, 10e3, /*20e3, 30e3, 50e3, 100e3, /*1e6, 10e6*/] // memory problem
    })
})();

