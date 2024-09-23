import React from 'react';

const TodoList = ({ todos }) => {
    return (
      <ul className="list-disc ml-6">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="text-gray-700 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {todo}
          </li>
        ))}
      </ul>
    );
  };
  

export default TodoList;
