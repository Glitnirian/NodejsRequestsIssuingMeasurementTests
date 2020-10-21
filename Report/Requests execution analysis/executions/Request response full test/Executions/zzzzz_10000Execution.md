

## Execution 1

```sh
MEASURE OPERATION ONLY EXEC TIME ::::::::::::::
Measure for 100 Iterations number:
ElapsedTime: 0 ms

Measure for 500 Iterations number:
ElapsedTime: 0 ms

Measure for 1000 Iterations number:
ElapsedTime: 1 ms

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

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 9413 ms




Delay: [10]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 8753 ms




Delay: [50]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 5700 ms




Delay: [100]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 7942 ms




Delay: [200]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 12185 ms




Delay: [300]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 17092 ms




Delay: [400]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 13871 ms




Delay: [500]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 15376 ms




Delay: [600]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 16011 ms




Delay: [700]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 9630 ms




Delay: [800]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 12396 ms




Delay: [900]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 9054 ms




Delay: [1000]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 6848 ms




Delay: [1500]

Measure for 10000 Iterations number:
==========++++>
ElapsedTime: 13659 ms

```

### Analysis
10e3 work 20e3 doesn't! In my computer the limit is around that:!

To be noted that we have both the server and the client working on the same machine! Even they are on different processes!

Left to test! Through a local network!
