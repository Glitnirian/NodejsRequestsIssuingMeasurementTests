import { launchServer } from '..';
import { AddressInfo } from 'net';

export interface IOutEventDef {
    listening: {
        addressInfo: AddressInfo
    },
    error: any;
    ready: any;
}

export interface IInEventDef {
    init: IInitData
}

export interface IInitData {
    port?: number
}

interface IIPCMessage {
    eventName: keyof IInEventDef,
    data: IInEventDef[this['eventName']]
}

type IMessageHandlers = {
    [eventName in keyof IInEventDef]: (data: IInEventDef[keyof IInEventDef]) => void
}

function handleInIPCEvent() {
    const MESSAGE_HANDLERS: IMessageHandlers = {
        init: (data: IInEventDef['init']) => {
            const server = launchServer(data.port);

            server.on('listening', () => {
                const addressInfo = server.address() as AddressInfo;
                process.send({
                    eventName: 'listening',
                    data: {
                        addressInfo
                    } as IOutEventDef['listening']
                })
            })
        }
    };

    // _________ handle in messages
    process.on('message', (data: IIPCMessage) => {
        const callback = MESSAGE_HANDLERS[data.eventName];

        if (callback) {
            callback(data.data);
        } else {
            throw new Error('No handler for event');
        }
    });
}

handleInIPCEvent();

process.send({
    eventName: 'ready'
});
