import React from 'react';

const ColorPicker = ({ onColorChange }) => {
    return (
      <div className="p-4 text-center">
        <input
          type="color"
          onChange={(e) => onColorChange(e.target.value)}
          className="border p-2 rounded shadow-md"
        />
      </div>
    );
  };
  

export default ColorPicker;
