


import React from 'react';
import './Services.css'
import { Container, Row, Col } from 'reactstrap';


const serviceData = [
    {
        icon: 'ri-code-line',
        title: 'Web Design',
        desc: 'Our web design services focus on creating captivating, user-friendly websites. We specialize in responsive design, ensuring your site looks and functions flawlessly across all devices. Our goal is to enhance your online presence with visually appealing and effective designs that engage your target audience.'
    },

    {
        icon: 'ri-gallery-line',
        title: 'UI / UX',
        desc: "Our UI/UX design services prioritize user-centric experiences. We craft intuitive, visually appealing interfaces that enhance user engagement and satisfaction. From wireframing to prototyping, we focus on creating designs that drive positive interactions and conversions, ultimately ensuring your digital product's success"
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        desc: 'We offer a range of services, including web development for stunning websites and software development for tailored applications. Our expertise covers responsive design, e-commerce, SEO, security, and API integration. We create user-friendly web experiences and custom software solutions to meet your business needs and digital goals.'
    },
]

const Services = () => {
    return <section id='service'>
        <Container>
            <Row>
                <Col lg='12' className='services_top mb-5'>
                    <h6>Features</h6>
                    <h2>What services I Pprovide</h2>
                </Col>
                {
                    serviceData.map((item, index) => (
                        <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                            <div className="single_service">
                                <span className="service_icon">
                                    <i class={item.icon}></i>
                                </span>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>

                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    </section>
};

export default Services;