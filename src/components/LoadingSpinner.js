import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      {/* Add this text for debugging. You can remove it later. */}
      <p className="dark:text-white">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
//