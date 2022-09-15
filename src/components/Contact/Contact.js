import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImgFace from '../../images/naruto-face.png';

function Contact() {
    return (
        <Container>
            <Row>
                <Col md={12} sm={12} className="mt-5 mb-5">
                    <h2>Contact with Naruto</h2>
                </Col>
                <Col md={6} sm={12}>
                    <img src={ImgFace}/>
                </Col>
                <Col md={6} sm={12}>
                    <from>
                        <label>Your Name</label>
                        <input type="text" id='name' placeholder='Enter Your Name'/>
                        <label>Your Email</label>
                        <input type="text" id='email' placeholder='Enter Your Email'/>
                        <label>Your Message</label>
                        <input type="text" id='message' placeholder='Enter Your Message'/>
                        <button>Submit</button>
                    </from>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;