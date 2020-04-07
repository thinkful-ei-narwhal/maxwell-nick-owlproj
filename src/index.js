import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './App'; 
import './index.css'; 
import ParticipantList from "./participantList.js";

ReactDOM.render(<App participants={ParticipantList.participants}/>, document.getElementById('root'));