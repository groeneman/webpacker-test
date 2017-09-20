import React from 'react';
import { connect } from 'react-redux';
import Scooter from './scooter';
import { addScoot } from './actions';

const MakeScoots = ({ scoots, addScoot }) => {
  return (
    <div className="wrapper">
      <div className="list-of-scoots">
        { scoots.map(scoot => <Scooter key={ scoot.name } { ...scoot } />) }
      </div>

      <button onClick={ addScoot }>Add another!</button>
    </div>
  );
}

let ConnectedMakeScoots = connect(
  state => state,
  { addScoot }
)(MakeScoots);

export default ConnectedMakeScoots;
