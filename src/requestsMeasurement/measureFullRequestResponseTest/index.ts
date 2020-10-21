import http from 'http';
import url from 'url';

/**
 *  IMPORTANT:
 * 
 * IN this test we gonna measure the time till all the requests are resolved and get there responses!
 * 
 * (We count the number of resolutions! We are done when the number match the number of iterations)
 *  
 */

export interface IMeasureFullRequestResponseTimeOptions {
    serverUrl: string,
    delaysList: number[], 
    iterationsNumbersList: number[]
}

 //      \/--- look at the async keyword
export async function measureFullRequestResponseTime({
    serverUrl,
    delaysList,
    iterationsNumbersList
}: IMeasureFullRequestResponseTimeOptions) {
    console.log('Measure full request response Time ::::::::::::::::::');

    // _______ default values
    if (!delaysList) {
        delaysList = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500];
    }

    if (!iterationsNumbersList) {
        iterationsNumbersList = [100, 500, 1000, 10e3, 100e3, 1e6, 10e6];
    }

    // ______ test start
    for (const delay of delaysList) {
        console.log(`Delay: [${delay}]\n`);
        for (const iterationsNumber of iterationsNumbersList) {
            console.log(`Measure for ${iterationsNumber} Iterations number:`);
            try {
                await measureForOneIterationNumber(delay, iterationsNumber, serverUrl);
                // code de .then callback ici aura pris place
                // ça pour montrer seuelement l'utilisation de async await vs then catch
                // (lokan darna bel then catch! on l'aura fait par recursivité )
            } catch(err) { // in place of .catch
                throw err;
            }
        }
        console.log('\n\n');
    }
    console.log('\n\n');
}

function measureForOneIterationNumber(delay: number, iterationsNumber: number, serverUrl: string) {
    return new Promise((resolve, reject) => { // look how i used the promise here
        let startTime = new Date().getTime();
        let elapsedTime = 0;
        let resolvedRequestsNum = 0;
    
        for (let index = 0; index < iterationsNumber; index++) {
            issueRequest(delay, serverUrl)
            .then((data) => {
                if (!data.success) {
                    throw new Error('Not successful !');
                }
                resolvedRequestsNum++;

                // console.log('resolved requests num ::::');
                // console.log({
                //     resolvedRequestsNum,
                //     iterationsNumber
                // });
    
                if(resolvedRequestsNum === iterationsNumber) {
                    elapsedTime = new Date().getTime() - startTime;
                    console.log("==========++++>")
                    console.log(`ElapsedTime: ${elapsedTime} ms\n`);
                    resolve(); // resolving here
                }
            })
            .catch((err: any) => {
                reject(err);
            });
        }
    });
}

function issueRequest(delay: number, serverUrl: string): Promise<any> {
    return new Promise((resolve, reject) => { // Look how i used a promise
        const options = {
            ...url.parse(`${serverUrl}/?delay=${delay}`),
            method: 'GET',
            // agent: false
        };

        // console.log('REquest :://>')
        // console.log(options)

        const req = http.request(
            options,
            (response) => {
                let data: any = '';
                response.setEncoding('utf8');
                response.on('data', function(b) {
                    data += b.toString();
                });
                response.on('end', function() {
                    resolve(JSON.parse(data));
                });
            }
        );

        req.on('error', (err) => {
            reject(err);
        });

        req.end();
    });
}
