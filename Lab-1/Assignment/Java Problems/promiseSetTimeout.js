function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  // Example usage:
  wait(2000).then(() => {
    console.log("Resolved after 2 seconds");
  });
  