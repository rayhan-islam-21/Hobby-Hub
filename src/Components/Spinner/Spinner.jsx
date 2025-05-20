import React from 'react';

const Spinner = () => {
    return (
       <div className="w-screen h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Spinner;