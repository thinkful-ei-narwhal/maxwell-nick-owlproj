import React from 'react';

export default function ChatEvents(props) {
  let date = new Date(props.timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return (
    <div id={props.key} className="chatEvent">
      <h2>{props.type}</h2>
      <h2>{props.message}</h2>
      <h2>{formattedTime}</h2>
    </div>
  )
}