import React from 'react';

const ProfileCard = ({ name, age, location }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white max-w-sm mx-auto text-center animate-bounceIn">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">Age: {age}</p>
        <p className="text-gray-500">Location: {location}</p>
      </div>
    );
  };  
  

export default ProfileCard;
