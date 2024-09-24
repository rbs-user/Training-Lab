function countdownPromise(number) {
    return new Promise((resolve) => {
      function step() {
        console.log(number);
        number--;
        if (number < 0) {
          resolve("Countdown complete!");
        } else {
          wait(1000).then(step);
        }
      }
      step();
    });
  }
  
  // Example usage:
  countdownPromise(5).then((message) => console.log(message));
  