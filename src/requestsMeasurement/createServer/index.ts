import http from 'http';
import url from 'url';
import { ParsedUrlQuery } from 'querystring';
import { IOptions as ISpawnServerOptions } from './SpawnServer';
import { SpawnedServer } from './SpawnServer';

export function launchServer(port?: number) {
    const server = http.createServer((req, res) => {
        const query: ParsedUrlQuery = url.parse(req.url, true).query;
        
        const delay = parseInt(query.delay as string || '0');

        // console.log('Server :::')
        // console.log('Server :::')
        // console.log('Server :::')
        // console.log('Server :::')
        // console.log('Server :::')
        // console.log({
        //     delay
        // })

        // ___ await to respond
        setTimeout(() => {
            res.write(JSON.stringify({
                success: true,
                delay,
                message: 'hello'
            }));
    
            res.end();
            // console.log('Response :::::::::///>')
        }, delay);
    });

    server.on('error', (err) => {
        console.log('server error ::::::::::::::::::::::::')
        console.log(err)
    });

    server.listen(port);

    return server;
}


export function spawnServer(options?: ISpawnServerOptions) {
    options = options || {}; 
    const server = new SpawnedServer({
        port: options.port
    });

    server.on('error', (err) => {
        console.log('Server error ::::::::::::::')
        console.log(err);
    })

    return server;
}
