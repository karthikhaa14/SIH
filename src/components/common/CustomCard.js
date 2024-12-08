import React from 'react';

const CustomCard = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );

  export default CustomCard;