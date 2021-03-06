import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import errorRenderer from 'react-test-renderer';

import App from './App';
import store from './store';
import Sidebar from './sidebar';
import Participant from './participant';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST */
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);
  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
/* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST *//* SMOKE TEST */

/* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST */
it('renders the UI as expected', () => {
  expect(errorRenderer.create(<App />).toJSON()).toMatchSnapshot();
});
/* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST *//* Snapshot TEST */