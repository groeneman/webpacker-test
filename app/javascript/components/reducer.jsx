import { ADD_SCOOTER } from './actions';

export default function(state, action) {
  if(action.type == ADD_SCOOTER) {
    return { scoots: [...state.scoots, { name: `Scooter ${ state.scoots.length + 1}` }] };
  } else {
    return state;
  }
}
