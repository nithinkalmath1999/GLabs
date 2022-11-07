/// <reference lib="webworker" />


function add() {
  let sum=0;
  for (let i = 0; i <= 1000000000; i++) {
    sum = sum + i;
  }
  return sum;
}

addEventListener('message', ({  }) => {
  const response = {result : add()};
  postMessage(response);
});
