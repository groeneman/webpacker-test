import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import MakeScoots from './makeScoots';

const store = createStore(
  reducer,
  { scoots: [] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => {
  return (
    <Provider store={ store }>
      <MakeScoots />
    </Provider>
  )
}
