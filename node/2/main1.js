let index = 0,
  max = Math.pow(10, 6);
console.log("计算循环10w次所需的时间：");
console.time();
const SystemOutTime = () => {
  if (index > max) {
    index++;
    SystemOutTime();
  } else {
    console.timeEnd();
    return;
  }
}
SystemOutTime();