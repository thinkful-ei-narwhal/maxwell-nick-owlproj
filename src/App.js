import React from 'react';
import store from './store';
import Sidebar from './Sidebar';
import Stage from './Stage';

function App() {
  return (
    <main className='App'>
      <Sidebar participants={store.participants} />
      <Stage participants={store.participants} />
    </main>
  );
}

export default App;