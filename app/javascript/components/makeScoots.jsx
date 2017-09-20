import React from 'react';
import { connect } from 'react-redux';
import Scooter from './scooter';
import { addScoot } from './actions';

const MakeScoots = ({ scoots, addScoot }) => {
  const label = scoots.length > 0 ? 'Add another!' : 'Add a scoot!';
  return (
    <div className="wrapper">
      <div className="list-of-scoots">
        { scoots.map(scoot => <Scooter key={ scoot.name } { ...scoot } />) }
      </div>

      <button onClick={ addScoot }>{ label }</button>
    </div>
  );
}

let ConnectedMakeScoots = connect(
  state => state,
  { addScoot }
)(MakeScoots);

export default ConnectedMakeScoots;
