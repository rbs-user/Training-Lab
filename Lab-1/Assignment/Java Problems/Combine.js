function randomDelayMessage(message) {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    return wait(delay).then(() => console.log(`${message} after ${delay} ms`));
  }
  
  // Example usage:
  randomDelayMessage("403 error get resolve");
  