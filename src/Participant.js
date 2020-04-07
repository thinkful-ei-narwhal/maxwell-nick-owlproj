import React from 'react';

export default function Participant(props) {
  console.log(props)

  return (
    <div className='participant' id={props.id}>
      <header>
        <h1>{props.name}</h1>
      </header>
      <img src={props.avatar} alt="testing" />
      <ul >
        <li className={inSession(props.inSession)}>{onStage(props.onStage)}</li>
      </ul>
    </div>
  )
}

function onStage(onStage) {
  if (onStage) {
    return <p>on stage</p>
  }
  else {
    return <p>observer</p>
  }
}

function inSession(inSession) {
  if (inSession) {
    return 'inSessionClass';
  }
  else {
    return 'notInSessionClass'
  }
}