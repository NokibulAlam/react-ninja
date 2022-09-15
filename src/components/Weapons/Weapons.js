import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../../images/Ninja Tools 1.png';
import Img2 from '../../images/Ninja Tools 2.png';
import Img3 from '../../images/Ninja Tools 3.png';
import Img4 from '../../images/Ninja Tools 4.png';
import './Weapons.css';

function Weapons() {
    return (
        <Container fluid>
            <Row>
                <Col md={12} sm={12}>
                    <h2>What weapons he uses</h2>
                </Col>
                <Col md={3} sm={6} className="text-center">
                    <p>KUNAI</p>
                    <img src={Img1} />
                </Col>
                <Col md={3} sm={6} className="text-center">
                <p>KACHI</p>
                    <img src={Img2} />
                </Col>
                <Col md={3} sm={6} className="text-center">
                <p>LONG BOW</p>
                    <img src={Img3} />
                </Col>
                <Col md={3} sm={6} className="text-center">
                <p>SHURIKEN</p>
                    <img src={Img4} />
                </Col>
            </Row>
        </Container>
    )
}

export default Weapons;