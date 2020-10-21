
## Analysis
On my computer! 50 000 can't be handled! Error! Server bloated!
That's with agent: false

## Execution

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
ElapsedTime: 7 ms

Measure for 1000000 Iterations number:
ElapsedTime: 2 ms

Measure for 10000000 Iterations number:
ElapsedTime: 27 ms




REQUEST EXECUTION TIME MEASUREMENT ::::::::::::::::::::::::
LISTENING ...
Measure full request response Time ::::::::::::::::::
Delay: [0]

Measure for 100 Iterations number:
==========++++>
ElapsedTime: 128 ms

Measure for 500 Iterations number:
==========++++>
ElapsedTime: 1236 ms

Measure for 1000 Iterations number:
==========++++>
ElapsedTime: 1337 ms

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 8750 ms

Measure for 50000 Iterations number:
(node:21751) UnhandledPromiseRejectionWarning: Error: connect EADDRNOTAVAIL 127.0.0.1:37387 - Local (127.0.0.1:0)
    at internalConnect (net.js:833:16)
    at defaultTriggerAsyncIdScope (internal/async_hooks.js:301:12)
    at GetAddrInfoReqWrap.emitLookup [as callback] (net.js:976:9)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:65:10)
(node:21751) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:21751) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.


```


## Execution 2
Only 50000

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

with zero delay it fails!