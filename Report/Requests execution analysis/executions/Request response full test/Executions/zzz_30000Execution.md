
# Execution 1
False agent, 30000 only

Failed (same error as 50e3)

```sh
MEASURE OPERATION ONLY EXEC TIME ::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 0 ms

Measure for 500 Iterations number:
ElapsedTime: 0 ms

Measure for 1000 Iterations number:
ElapsedTime: 0 ms

Measure for 10000 Iterations number:
ElapsedTime: 0 ms

Measure for 100000 Iterations number:
ElapsedTime: 6 ms

Measure for 1000000 Iterations number:
ElapsedTime: 3 ms

Measure for 10000000 Iterations number:
ElapsedTime: 26 ms




REQUEST EXECUTION TIME MEASUREMENT ::::::::::::::::::::::::
LISTENING ...
Measure full request response Time ::::::::::::::::::
Delay: [0]

Measure for 50000 Iterations number:
(node:22738) UnhandledPromiseRejectionWarning: Error: connect EADDRNOTAVAIL 127.0.0.1:37917 - Local (127.0.0.1:0)
    at internalConnect (net.js:833:16)
    at defaultTriggerAsyncIdScope (internal/async_hooks.js:301:12)
    at GetAddrInfoReqWrap.emitLookup [as callback] (net.js:976:9)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:65:10)
(node:22738) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
```


## Execution 2

agent not precised!

Fail to run

```sh
MEASURE OPERATION ONLY EXEC TIME ::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 0 ms

Measure for 500 Iterations number:
ElapsedTime: 0 ms

Measure for 1000 Iterations number:
ElapsedTime: 0 ms

Measure for 10000 Iterations number:
ElapsedTime: 0 ms

Measure for 100000 Iterations number:
ElapsedTime: 6 ms

Measure for 1000000 Iterations number:
ElapsedTime: 3 ms

Measure for 10000000 Iterations number:
ElapsedTime: 26 ms




REQUEST EXECUTION TIME MEASUREMENT ::::::::::::::::::::::::
LISTENING ...
Measure full request response Time ::::::::::::::::::
Delay: [0]

Measure for 50000 Iterations number:
(node:22738) UnhandledPromiseRejectionWarning: Error: connect EADDRNOTAVAIL 127.0.0.1:37917 - Local (127.0.0.1:0)
    at internalConnect (net.js:833:16)
    at defaultTriggerAsyncIdScope (internal/async_hooks.js:301:12)
    at GetAddrInfoReqWrap.emitLookup [as callback] (net.js:976:9)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:65:10)
(node:22738) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
```