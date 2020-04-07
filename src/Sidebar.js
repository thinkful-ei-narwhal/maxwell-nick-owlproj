import React from 'react';
import Participant from './participant';

export default function Sidebar(props) {
  //todo: participants that are here, should be shown first

  const participantComponents = props.participants.map(participant => {
    return <Participant id={participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage} />;
  });

  // if (inSession) {
  //   Array.unshift()
  // }
  // else {
  //   Array.push()
  // }

  return (
    <div className='sidebar'>
      {participantComponents}
    </div>
  )
}
