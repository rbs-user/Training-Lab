import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
    const [text, setText] = useState('');
  
    return (
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onTextChange(e.target.value);
        }}
        className="border p-2 rounded w-full shadow-md"
      />
    );
  };
  

export default TextInput;
