import React from 'react';
import ReactDOM from 'react-dom';
import errorRenderer from 'react-test-renderer';
import store from './store';
import OnStageParticipant from './OnStageParticipant';

/* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OnStageParticipant key={store.participants[0].id} name={store.participants[0].name} avatar={store.participants[0].avatar} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
/* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST */

it('renders the UI as expected', () => {
  const JSON = errorRenderer
    .create(<OnStageParticipant key={store.participants[0].id} name={store.participants[0].name} avatar={store.participants[0].avatar} />)
    .toJSON();
  expect(JSON).toMatchSnapshot();
});