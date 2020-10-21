export function measureProcessingOnlyTime() {
    console.log('MEASURE OPERATION ONLY EXEC TIME ::::::::::::::');
    for (const iterationNumber of [100, 500, 1000, 10e3, 100e3, 1e6, 10e6]) {
        measureForOneIterationNumber(iterationNumber);
    }
    console.log('\n\n');
}

function measureForOneIterationNumber(iterationNumber: number) {
    let startTime = new Date().getTime();
    let elapsedTime = 0;
    let sum: number = 0;
    for (let index = 0; index < iterationNumber; index++) {
        sum = sum + runOneOperation(index, iterationNumber - index);
    }
    elapsedTime = new Date().getTime() - startTime;
    
    console.log(`Measure for ${iterationNumber} Iterations number:`);
    console.log(`ElapsedTime: ${elapsedTime} ms`);
    console.log();
}

function runOneOperation(a: number, b: number) { // oui tu peux faire ça
    return a + b;
}
