import http from 'http';
import url from 'url';

export interface IMeasureRequestIssuingOnlyTimeOptions {
    serverUrl: string,
    iterationsNumbersList: number[]
}

export function measureRequestIssuingOnlyTime({
    serverUrl,
    iterationsNumbersList
}: IMeasureRequestIssuingOnlyTimeOptions) {
    console.log('MEASURE REQUEST ISSUING ONLY TIME :::::::::::::::');
    if (!iterationsNumbersList) {
        iterationsNumbersList = [100, 500, 1000, 10e3, 100e3, 1e6, 10e6];
    }

    for (const iterationNumber of iterationsNumbersList) {
        measureForOneIterationNumber(iterationNumber, serverUrl);
    }
    console.log('\n\n');
}

function measureForOneIterationNumber(iterationNumber: number, serverUrl: string) {   
    let startTime = new Date().getTime();
    let elapsedTime = 0;
    let sum: number = 0;
    for (let index = 0; index < iterationNumber; index++) {
        issueRequest(Math.floor(Math.random() * 10) + 90, serverUrl);
    }
    elapsedTime = new Date().getTime() - startTime;
    
    console.log(`Measure for ${iterationNumber} Iterations number:`);
    console.log(`ElapsedTime: ${elapsedTime} ms\n`);
}

function issueRequest(delay: number, serverUrl: string) {
    const options = {
        ...url.parse(`${serverUrl}/?delay=${delay}`),
        method: 'GET'
    };

    // console.log('REqueqst :::::::::///>')
    // console.log(options)

    http.request(
        options,
        requestCallback
    )
    .end();
}

function requestCallback(response: http.IncomingMessage) {
    console.log('request Callback :::::::::::>')
    let data: any = '';
    response.setEncoding('utf8');
    response.on('data', function(b) {
        data += b;
    });
    response.on('end', function() {
        data = JSON.parse(data);

        // do something with data (in this test we don't need)
    });
}
