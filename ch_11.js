/*

1. "jobs" a non-empty positive integer array. It represents the queue and clock-cycles(cc) remaining till the job[i] is finished.

2. "slice" a positive integer. It is the amount of clock-cycles that each job is given till the job yields to the next job in the queue.

3. "index" a positive integer. Which is the index of the job we're interested in.
roundRobin returns:

1. the number of cc till the job at index is finished.
Here's an example:

roundRobin([10,20,1], 5, 0) 
at 0cc [10,20,1] jobs[0] starts
after 5cc [5,20,1] jobs[0] yields, jobs[1] starts
after 10cc [5,15,1] jobs[1] yields, jobs[2] starts
after 11cc [5,15,0] jobs[2] finishes, jobs[0] starts
after 16cc [0,15,0] jobs[0] finishes
so:

roundRobin([10,20,1], 5, 0) == 16
**You can assume that the processor can switch jobs between cc so it does not add to the total time.

*/
function roundRobin(jobs, slice, index) {
  let time = 0;
  const queue = [...jobs];
  while (jobs[index] > 0) {
    for (let i = 0; i < queue.length; i++) {
      const job = queue[i];
      if (job > 0) {
        const timeLeft = Math.min(slice, job);
        console.log(timeLeft);
        time += timeLeft;
        queue[i] -= timeLeft;
        if (index === i && queue[i] === 0) {
          return time;
        }
      }
    }
  }
  return time;
}
// what are the mistake I did: I tried using the map method which does not give me flexbility to end the loop as for loop which throws me off for like two hours
console.log(roundRobin([10, 20, 1], 5, 0));
console.log("------------------------");
console.log(roundRobin([10, 20, 1, 2, 3], 5, 2));
console.log("------------------------");
console.log(roundRobin([21, 19, 11, 9, 24, 29], 19, 0)); // 98

//
