function delayedLogSequence(messages) {
    let promise = Promise.resolve();
    
    messages.forEach(([message, delay]) => {
      promise = promise.then(() => wait(delay).then(() => console.log(message)));
    });
  
    return promise;
  }
  
  // Example usage:
  delayedLogSequence([
    ["Trying", 1000],
    ["Get Resolving", 2000],
    ["Your issue is resolved 👍", 1500],
  ]);
  