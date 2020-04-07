import React from 'react';
import store from './store';
import Sidebar from './sidebar';

function App() {

  return (
    <main className='App'>
      <Sidebar participants={store.participants} />
    </main>
  );
}

export default App;