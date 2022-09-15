import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
        <Row>
            <Col md={12} sm={12} className="text-center mt-5">
            <p>&copy; copyright by Naruto, 2022</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer;