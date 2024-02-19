import React, { useEffect, useState } from 'react'
import Data from '../assets/data/events.json';
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function EventDetail() {

    const { id } = useParams();
    const [event, setEvent] = useState({})
    const [img, setImg] = useState(Data.filter((d) => d.name == id)[0].img);
    
    useEffect(() => {
        setEvent(Data.filter((d) => d.name == id)[0]);
    }, [])

    return (
        <Card>
            <Card.Img src={'../src/assets/images/' + img} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>Price: {event.price}</Card.Text>
                <Card.Text>Number of tickets: {event.nbTickets}</Card.Text>
                <Card.Text>Number of participants: {event.nbParticipants}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventDetail