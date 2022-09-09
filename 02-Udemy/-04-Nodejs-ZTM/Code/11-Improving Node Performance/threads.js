const { isMainThread, workerData, Worker } = require("worker_threads");

if (isMainThread) {
  new Worker(__filename, {
    workerData: [7, 6, 2, 3],
  });
  new Worker(__filename, {
    workerData: [1, 3, 4, 3],
  });
  console.log(`Main Thread! Process ID: ${process.pid}`);
} else {
  console.log(`Worker! Process ID: ${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
