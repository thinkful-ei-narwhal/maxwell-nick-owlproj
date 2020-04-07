import React from 'react';

export default function ChatEvents(props) {
    return (
        <div id={props.key} className="chatEvent">
            <h2>{props.type}</h2>
            <h2>{props.message}</h2>
            <h2>{props.timestamp}</h2>
        </div>
    )
}