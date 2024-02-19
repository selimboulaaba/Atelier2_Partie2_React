import Event from './Event';
import Data from '../assets/data/events.json';
import { Alert, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function NotFound() {

    return (
        <Image src={'./src/assets/images/notfound.jfif'} />
    )
}

export default NotFound
