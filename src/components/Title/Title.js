import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Title.css';

function Title() {
  return (
    <Container>
        <Row>
            <Col md={12} sm={12} className="text-center mt-4">
                <h1>Information About Naruto</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default Title;