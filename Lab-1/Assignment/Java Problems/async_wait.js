async function delayedLogSequenceAsync(messages) {
    for (const [message, delay] of messages) {
      await wait(delay);
      console.log(message);
    }
  }
  
  // Example usage:
  delayedLogSequenceAsync([
    ["Level one Complete", 1000],
    ["Level two complete", 2000],
    ["Level three Complete", 1500],
  ]);
  