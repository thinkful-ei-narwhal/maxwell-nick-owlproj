import React from 'react';
import Sidebar from './Sidebar.js';
import ParticipantList from "./participantList.js";

function App(props) {
  console.log(ParticipantList.participants[0])
  return (
    <main className='App'>
      <Sidebar test={ParticipantList.participants[0]}/>
    </main>
  );
}

export default App;