import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div className="p-4 text-center">
        <p className="text-2xl">Count: {count}</p>
        <div className="space-x-4 mt-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:scale-105 transform transition-all duration-200"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded shadow hover:scale-105 transform transition-all duration-200"
          >
            Decrement
          </button>
        </div>
      </div>
    );
  };
  

export default Counter;
