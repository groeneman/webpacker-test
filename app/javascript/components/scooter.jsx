import React from 'react';
import LogoURL from '../images/scoot.svg';

const Scooter = ({ name }) => {
  return (
    <div className="scooter">
      <img src={ LogoURL } />
      <div>{ name }</div>
    </div>
  );
}

export default Scooter;
