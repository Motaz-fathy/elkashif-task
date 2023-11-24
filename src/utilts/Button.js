import React from 'react';

export  function  Button  ({ disabled, width, height, onClick, children , className })  {
  const buttonStyle = {
    width: width || 'auto',
    height: height || 'auto',
    // Add any other desired styles here
  };

  return (
    <button
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
