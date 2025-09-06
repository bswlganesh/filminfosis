import React from 'react';
import './LoadingSpinner.css';
import { Riple } from 'react-loading-indicators';

export const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <Riple  color="#3189cc" size="medium" text="" textColor="" />
    </div>
  );
};

export default LoadingSpinner;
//