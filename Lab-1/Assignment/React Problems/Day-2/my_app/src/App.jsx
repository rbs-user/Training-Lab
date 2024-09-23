import React, { useState } from 'react';
import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';
import StatusMessage from './components/StatusMessage';
import Counter from './components/Counter';
import LikeButton from './components/LikeButton';
import Timer from './components/Timer';
import ColorPicker from './components/ColorPicker';
import TextInput from './components/TextInput';
import ToggleSwitch from './components/ToggleSwitch';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  const [selectedColor, setSelectedColor] = useState('');
  const [textValue, setTextValue] = useState('');
  const [todos] = useState(['Task 1', 'Task 2', 'Task 3']);
  
  const handleToggle = () => {
    console.log('Toggled!');
  };

  return (
    <div className="App">
      <Greeting name="Roshan" />
      <ProfileCard name="Roshan Sharma" age={28} location="Udaipur" />
      <StatusMessage status="success" />
      <Counter />
      <LikeButton initialLikes={10} />
      <Timer start={60} />
      <ColorPicker onColorChange={setSelectedColor} />
      <p>Selected color: {selectedColor}</p>
      <TextInput onTextChange={setTextValue} />
      <p>Text Input: {textValue}</p>
      <ToggleSwitch toggleState={handleToggle} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
