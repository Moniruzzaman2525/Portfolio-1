


import React from 'react';
import './Services.css'
import { Container, Row, Col } from 'reactstrap';


const serviceData = [
    {
        icon: 'ri-code-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et consequuntur accusantium sit quos tempora eveniet mollitia dolore!'
    },

    {
        icon: 'ri-gallery-line',
        title: 'UI / UX',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et consequuntur accusantium sit quos tempora eveniet mollitia dolore!'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et consequuntur accusantium sit quos tempora eveniet mollitia dolore!'
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