import React from 'react';
import ChatEvents from './chatEvents';


export default function chatEventsSidebar(props) {

    const chatEventsArray = props.chatEvents.map(event => {
        return <ChatEvents key={event.participantId} type={event.type} message={event.message} timestamp={event.timestamp} />
    });
    return (
        <div className='chatEventsSidebar'>
        {chatEventsArray}
        </div>
    )
}