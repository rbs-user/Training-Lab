import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
    return (
      <button
        onClick={toggleState}
        className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
      >
        Toggle
      </button>
    );
  };
  

export default ToggleSwitch;
