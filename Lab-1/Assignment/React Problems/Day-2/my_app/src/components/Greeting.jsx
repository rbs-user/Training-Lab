import React from 'react';

const Greeting = ({ name }) => {
    return (
      <h1 className="text-3xl font-bold text-blue-600 animate-fadeIn">
        Hello, {name}!
      </h1>
    );
  };
  

export default Greeting;
