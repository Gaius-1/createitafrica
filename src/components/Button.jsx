import React from 'react';

const Button = ({ label, icon }) => {
  return (
    <div className="btn">
      <div className="btn-label">
        <span>{label}</span>
      </div>
      <div className="btn-icon">
        <ion-icon name={icon}></ion-icon>
      </div>
    </div>
  );
};

export default Button;
