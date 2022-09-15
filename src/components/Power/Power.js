import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Power.css';

function Power() {
    return (
        <Container>
            <Row>
                <Col md={12} sm={12} className="text-center">
                    <h2>Super powers of Naruto</h2>
                    <ul className='power'>
                        <li>Shadow Clone Jutsu</li>
                        <li>Rassengan</li>
                        <li>Sage Art</li>
                        <li>9 tails Formation</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Power;