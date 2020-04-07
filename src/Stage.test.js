import React from 'react';
import ReactDOM from 'react-dom';
import errorRenderer from 'react-test-renderer';
import store from './store';
import Stage from './Stage';

/* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage participants={store.participants} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST */

it('renders the UI as expected', () => {
  const JSON = errorRenderer
    .create(<Stage participants={store.participants} />)
    .toJSON();
  expect(JSON).toMatchSnapshot();
});