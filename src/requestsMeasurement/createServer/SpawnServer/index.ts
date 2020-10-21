import { fork, ChildProcess } from 'child_process';
import { AddressInfo } from 'net';
import { Hooks } from 'hooksi';
import path from 'path';
import { IInitData, IOutEventDef as IInEventDef} from './process';

export interface IHooksDef {
    listening: () => void,
    error: (err: any) => void
}

type IInMessagesHandlers = {
    [eventName in keyof IInEventDef]: (data: IInEventDef[eventName]) => void 
}

export interface IIPCMessage {
    eventName: keyof IInEventDef,
    data: IInEventDef[this['eventName']]
}

export interface IOptions {
    port?: number 
}

export class SpawnedServer {
    private _options: IOptions;
    private _addressInfo?: AddressInfo;
    private _process: ChildProcess;
    private _hooks: Hooks<IHooksDef>;

    constructor(options?: IOptions) {
        this._options = options || {};

        this._hooks = new Hooks(); 

        this._process = fork(
            path.join(__dirname, 'process.js'),
            {
                stdio: ['inherit', 'inherit', 'inherit', 'ipc']
            }
        );

        this._process.on('error', (err) => {
            console.log(err);
        });

        this._handleIPCEvents();
    }

    public address() {
        return this._addressInfo;
    }

    private _handleIPCEvents() {
        const MESSAGES_HANDLERS: IInMessagesHandlers = {
            ready: () => {
                this._process.send({
                    eventName: 'init',
                    data: {
                        port: this._options.port
                    } as IInitData
                });
            },
            listening: (data: IInEventDef['listening']) => {
                this._addressInfo = data.addressInfo;
                this._hooks.exec('listening', this);
            },
            error: (err: any) => {
                this._hooks.exec('error', this, err);
            }
        };

        // _______ listening to ipc channel
        this._process.on('message', (data: IIPCMessage) => {
            const callback = MESSAGES_HANDLERS[data.eventName];

            if (callback) {
                callback(data.data);
            } else {
                throw new Error('No message handler for the event');
            }
        });
    }

    public on(eventName: keyof IHooksDef, callback: IHooksDef[typeof eventName]) {
        this._hooks.on(eventName, callback);
    }
}
