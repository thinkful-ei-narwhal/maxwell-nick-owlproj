import React from 'react';
import OnStageParticipant from './OnStageParticipant';

import './stage.css'

export default function Stage(props) {
  const onStageParticipants = [];
  props.participants.forEach(participant => {
    if (participant.onStage) {
      onStageParticipants.push(<OnStageParticipant key={participant.id} name={participant.name} avatar={participant.avatar} />);
    }
  });

  return (
    <div className='stage'>
      {onStageParticipants}
    </div>
  )
}
