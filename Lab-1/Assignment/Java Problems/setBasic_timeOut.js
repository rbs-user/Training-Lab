function delayedMessage(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  
  // Example usage:
  delayedMessage("Hello after 2 seconds", 2000);
  delayedMessage("This is 2nd one afer 5 sec", 5000);