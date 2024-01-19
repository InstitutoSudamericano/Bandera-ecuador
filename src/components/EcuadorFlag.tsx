
import React, { useState } from 'react';
import './EcuadorFlag.css';

const EcuadorFlag: React.FC = () => {
  const [clickedColor, setClickedColor] = useState<string | null>(null);

  const handleClick = (color: string) => {
    setClickedColor(color);
  };
  
  return (
    <div className="ecuador-flag" onClick={() => handleClick('Ecuador')}>
      <div
        className="stripe stripe-yellow"
        onClick={() => handleClick('Amarillo')}
      ></div>
      <div
        className="stripe stripe-blue"
        onClick={() => handleClick('Azul')}
      ></div>
      <div
        className="stripe stripe-red"
        onClick={() => handleClick('Rojo')}
      ></div>

      {clickedColor && (
        <div className="clicked-info">
          <p>Color: {clickedColor}</p>
          <p>Ecuador</p>
        </div>
      )}
    </div>
  );
};
 
export default EcuadorFlag;
