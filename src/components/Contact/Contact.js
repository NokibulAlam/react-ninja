import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ImgFace from '../../images/naruto-face.png';

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <Container>
            <Row>
                <Col md={12} sm={12} className="mt-5 mb-5">
                    <h2>Contact with Naruto</h2>
                </Col>
                <Col md={6} sm={12}>
                    <img src={ImgFace} />
                </Col>
                <Col md={6} sm={12}>

                    <form onSubmit={handleSubmit(submitHandler)}>
                        <label>Your Name <span className="err">{errors.name && "This Field is required"}</span></label>
                        <input type="text" id='name' placeholder='Enter Your Name' {...register("name", { required: true })} /> {/* Requide field e amra Length o pass korte parbo ,minLength:10, maxLength:10 */}

                        <label>Your Email <span className="err">{errors.email && "This Field is required"}</span></label>
                        <input type="email" id='email' placeholder='Enter Your Email' {...register("email", { required: true })} />

                        <label>Your Message</label>
                        <input type="text" id='message' placeholder='Enter Your Message' />

                        <button>Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;