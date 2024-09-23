import React from 'react';

const StatusMessage = ({ status }) => {
    return (
      <div className="p-4 text-center">
        {status === 'success' ? (
          <p className="text-green-600 font-bold">Operation was successful</p>
        ) : status === 'error' ? (
          <p className="text-red-600 font-bold">There was an error</p>
        ) : (
          <p className="text-yellow-500">Unknown status</p>
        )}
      </div>
    );
  };
  

export default StatusMessage;
