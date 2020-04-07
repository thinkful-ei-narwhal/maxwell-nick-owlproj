import React from 'react';
import Participant from './participant';

import './sidebar.css'

export default function Sidebar(props) {
  const participantComponents = props.participants.map(participant => {
    return <Participant key={participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage} />;
  });

  let participantComponentsSorted = [];
  participantComponents.forEach(component => {
    if (component.props.inSession === true) {
      participantComponentsSorted.unshift(component);
    }
    else {
      participantComponentsSorted.push(component);
    }
  });

  return (
    <div className='sidebar'>
      {participantComponentsSorted}
    </div>
  )
}
