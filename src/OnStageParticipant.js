import React from 'react';

export default function OnStageParticipant(props) {

  return (
    <div className='onStage-participant' key={props.id}>
      <header>
        <h1>{props.name}</h1>
      </header>
      <img src={props.avatar} alt="testing" />
    </div>
  )
}
