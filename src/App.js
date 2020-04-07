import React from 'react';
import store from './store';
import Sidebar from './Sidebar';
import Stage from './Stage';
import ChatEventsSidebar from './chatEventsSidebar';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Sidebar participants={store.participants} />
      <Stage participants={store.participants} />
      <ChatEventsSidebar chatEvents={store.chatEvents}/>
    </main>
  );  
}

export default App;