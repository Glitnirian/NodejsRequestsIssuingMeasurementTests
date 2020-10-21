# Test analysis

## PLATFORM OF TESTING

Very important to note the executions and the numbers that are show in this document are all numbers from the execution in my laptop Toshiba c660 I5g2 2.4hz 12GO ram (ram doesn't matter) 2 cores (4cpu)!

Change the platform and results can change!
This platform is an old platform! Still not bad! So it make a good measurement candidate! And We can run the measurement on better material too to consider and take design and architecture decisions! (may be for the future)!

## Operations execution (no request issuing ! Just looping with a mathematical relevant operation)

```sh
MEASURE OPERATION ONLY EXEC TIME ::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 0 ms

Measure for 500 Iterations number:
ElapsedTime: 0 ms

Measure for 1000 Iterations number:
ElapsedTime: 0 ms

Measure for 10000 Iterations number:
ElapsedTime: 1 ms

Measure for 100000 Iterations number:
ElapsedTime: 7 ms

Measure for 1000000 Iterations number:
ElapsedTime: 3 ms

Measure for 10000000 Iterations number:
ElapsedTime: 28 ms
```

another Run

```sh
MEASURE OPERATION ONLY EXEC TIME ::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 0 ms

Measure for 500 Iterations number:
ElapsedTime: 0 ms

Measure for 1000 Iterations number:
ElapsedTime: 0 ms

Measure for 10000 Iterations number:
ElapsedTime: 1 ms

Measure for 100000 Iterations number:
ElapsedTime: 6 ms

Measure for 1000000 Iterations number:
ElapsedTime: 3 ms

Measure for 10000000 Iterations number:
ElapsedTime: 28 ms
```

### Analysis

Iteration cost up to 1 million and 10 millions is never of an important cost!

(That's the analysis! And for normal setup! Some conditions can screw all may be! But are not to be expected! Imaging no sufficient memory or something! And execution start suffering because of it! Or too such measurement are platform dependent ! A slower processor will show different results)


## Requests issuing measurement and test

### First execution:

```sh
MEASURE OPERATION ONLY EXEC TIME ::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 0 ms

Measure for 500 Iterations number:
ElapsedTime: 0 ms

Measure for 1000 Iterations number:
ElapsedTime: 0 ms

Measure for 10000 Iterations number:
ElapsedTime: 1 ms

Measure for 100000 Iterations number:
ElapsedTime: 7 ms

Measure for 1000000 Iterations number:
ElapsedTime: 3 ms

Measure for 10000000 Iterations number:
ElapsedTime: 28 ms




REQUEST EXECUTION TIME MEASUREMENT ::::::::::::::::::::::::
LISTENING ...
MEASURE REQUEST ISSUING ONLY TIME :::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 35 ms

Measure for 500 Iterations number:
ElapsedTime: 88 ms

Measure for 1000 Iterations number:
ElapsedTime: 179 ms

Measure for 10000 Iterations number:
ElapsedTime: 976 ms

Measure for 100000 Iterations number:
ElapsedTime: 8704 ms


<--- Last few GCs --->

[3448:0x2b6bac0]    55502 ms: Mark-sweep 2021.4 (2049.9) -> 2021.1 (2049.4) MB, 1976.5 / 7.3 ms  (average mu = 0.114, current mu = 0.008) allocation failure scavenge might not succeed
[3448:0x2b6bac0]    57518 ms: Mark-sweep 2021.8 (2049.9) -> 2021.5 (2049.9) MB, 1980.1 / 7.1 ms  (average mu = 0.068, current mu = 0.018) allocation failure scavenge might not succeed


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x1a93942]
    1: StubFrame [pc: 0x1a94a25]
    2: StubFrame [pc: 0x1adde86]
Security context: 0x0f63f2e1a2f1 <JSObject>
    3: getName [0x2766f6f6bfe9] [_http_agent.js:127] [bytecode=0x2db686e723d9 offset=13](this=0x0f1b214008d9 <Agent map = 0x38a861487a9>,0x226c69a5e159 <Object map = 0x38a8617dcc9>)
    4: addRequest [0x2766f6f6c029] [_http_agent.js:164] [bytecode=0x2db686e71841 offset=122](this=0x0f1b214008d9 <Age...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

Writing Node.js report to file: report.20201018.010155.3448.0.001.json
Node.js report completed
 1: 0x98edf0 node::Abort() [node]
 2: 0x98fe56 node::OnFatalError(char const*, char const*) [node]
 3: 0xb1552e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xb158a9 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xf20105  [node]
 6: 0xf2aa6b v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]
 7: 0xf2b787 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 8: 0xf2e225 v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationType, v8::internal::AllocationAlignment) [node]
 9: 0xef9250 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [node]
10: 0x11cb0ce v8::internal::Runtime_AllocateInNewSpace(int, unsigned long*, v8::internal::Isolate*) [node]
11: 0x1a93942  [node]
```


### Analysis:

From just this execution we can see that with 10000 issued requests! It already take mostly a 1sec!

For 100 000 it takes 8sec which is too much (of course it doesn't work for our application)! 

And There is the problem of memory! Which show clearly in the 1 million requests, out of heap memory error! Of course the requests callbacks execution gonna be stacked and added to the event loop! Something like that! And that take memory! And all that go within handling requests! That's an important side! Just like with a server and how much simultaneous requests it can handle!


From this we can take this important elements:

- First it's interesting to consider the factor of augmenting memory And cores! And do parallelism!
- And then multiple machines may be necessary!

What is the best option!

And another question! Is there better! (Can we manage somehow to handle more requests! With less resources) (A question for the future!)



#### NOTE for execution

I attempted two things to just check !

- I switched the anonymous callback to a defined one! I just just just! Even though it should not make sense! The optimizer and interpreter can know that the same anonymous function is called many times! Then too storing 1 million callback info will not take 2GO but just 100bytes * 1000 * 1000 => 100mb (oK) mmm that's important! If the info related to storing a callback take 100 bytes! Then that can be around 100mb!

- The second thing and it was more important! I commented the third test! So that the third test requests will not add up with the one of the second test! But it made no difference


Here the execution after the change above

```sh
MEASURE OPERATION ONLY EXEC TIME ::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 0 ms

Measure for 500 Iterations number:
ElapsedTime: 0 ms

Measure for 1000 Iterations number:
ElapsedTime: 0 ms

Measure for 10000 Iterations number:
ElapsedTime: 1 ms

Measure for 100000 Iterations number:
ElapsedTime: 6 ms

Measure for 1000000 Iterations number:
ElapsedTime: 3 ms

Measure for 10000000 Iterations number:
ElapsedTime: 28 ms




REQUEST EXECUTION TIME MEASUREMENT ::::::::::::::::::::::::
LISTENING ...
MEASURE REQUEST ISSUING ONLY TIME :::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 30 ms

Measure for 500 Iterations number:
ElapsedTime: 71 ms

Measure for 1000 Iterations number:
ElapsedTime: 205 ms

Measure for 10000 Iterations number:
ElapsedTime: 973 ms

Measure for 100000 Iterations number:
ElapsedTime: 8531 ms


<--- Last few GCs --->

[5519:0x4157ac0]    60214 ms: Mark-sweep 2036.4 (2064.9) -> 2035.1 (2065.4) MB, 2501.8 / 4.5 ms  (average mu = 0.107, current mu = 0.020) allocation failure GC in old space requested
[5519:0x4157ac0]    62755 ms: Mark-sweep 2037.0 (2065.4) -> 2036.2 (2066.4) MB, 2503.8 / 4.4 ms  (average mu = 0.062, current mu = 0.015) allocation failure GC in old space requested


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x1a93942]
    1: StubFrame [pc: 0x1aebdc4]
Security context: 0x2bd7cb79a2f1 <JSObject>
    2: /* anonymous */ [0x16b9a1a04d41] [net.js:1] [bytecode=0x2da45d27dc59 offset=0](this=0x21fa666db0a9 <Socket map = 0x14b886388929>)
    3: arguments adaptor frame: 1->0
    4: connect [0x2e0c662863b1] [net.js:168] [bytecode=0x2da45d27d281 offset=79](this=0x2670e3badb01 <Agent map = 0x14b8863b5889>)
    5: arguments adaptor fr...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

Writing Node.js report to file: report.20201018.011640.5519.0.001.json
Node.js report completed
 1: 0x98edf0 node::Abort() [node]
 2: 0x98fe56 node::OnFatalError(char const*, char const*) [node]
 3: 0xb1552e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xb158a9 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xf20105  [node]
 6: 0xf2aa6b v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]
 7: 0xf2b787 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 8: 0xf2e225 v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationType, v8::internal::AllocationAlignment) [node]
 9: 0xef9250 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [node]
10: 0x11cb0ce v8::internal::Runtime_AllocateInNewSpace(int, unsigned long*, v8::internal::Isolate*) [node]
11: 0x1a93942  [node]
```


### Second execution

This time we stopped at 100000 max

All the tests run




## IMPORTANT NOTES AND CONSIDERATION
- It's important to run tests on final vps that we want to use!
- It's interesting to run the measurement on some special interesting material! It can lead to better design and conception and architecture! (How much memory it consume! How much execution it manage within a 1 sec!)

(part of the pushed optimizations! We need to consider the above! Along all the other important things! As choosing and locating our servers near the servers of binance! And also search about the network types! Sometimes better network can make a far server more performing then a close one! Speed can beat distance! More considerations can go)

Ask yourself more questions!

in the future look at the software and architecture possible optimization! Including using c++! And go on more low level networking manipulation and optimizing things somehow!
