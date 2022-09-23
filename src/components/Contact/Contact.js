import React, { useState } from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useForm } from 'react-hook-form';
import ImgFace from '../../images/naruto-face.png';
import { sendData } from './Api';

function Contact() {
    /* FORM VALIDATION CHECK AND FOR SUBMIT MODULE PACKAGE */
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const submitHandler = (data) => {
        sendData(data)
            .then(data_api => {
                if (data_api.err) {
                    console.log(data_api.err);
                }
                else {
                    setSuccess(true);
                }
            });
    }
    return (
        <Container>
            <Row>
                <Col md={12} sm={12} className="mt-5 mb-5">
                    <h2>Contact with Naruto</h2>
                    {success && <Alert variant="success"> <Alert.Heading>Thank you for Contacting with us</Alert.Heading></Alert>}
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

                        <label>Your Message <span className="err">{errors.message && "This Field is required"}</span></label>
                        <input type="text" id='message' placeholder='Enter Your Message' {...register("message", { required: true })} />

                        <button>Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;