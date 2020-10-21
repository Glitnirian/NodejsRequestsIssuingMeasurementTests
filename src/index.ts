import { measureProcessingOnlyTime } from './measureProcessingOnlyTest';
import { runRequestsMeasurement } from './requestsMeasurement';

(async () => {
    measureProcessingOnlyTime();
    await runRequestsMeasurement();
    process.exit();
})();
