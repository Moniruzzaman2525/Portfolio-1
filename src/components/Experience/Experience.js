

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Experience.css'

const Experience = () => {
    return <section id='experience'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Experience</h2>
                </Col>
                <Col lg='6'>
                    <div className="single_experience-container">
                        <div className="single_experience">
                            <span className='experience_icon'><i class="ri-briefcase-line"></i></span>
                            <h6>2020 - 2021</h6>
                            <h5>Sr. Fronted Developer</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus praesentium deleniti, ducimus nam iure voluptas?</p>
                        </div>

                        <div className="single_experience">
                            <span className='experience_icon'><i class="ri-briefcase-line"></i></span>
                            <h6>2020 - 2021</h6>
                            <h5>Sr. Fronted Developer</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus praesentium deleniti, ducimus nam iure voluptas?</p>
                        </div>

                        <div className="single_experience">
                            <span className='experience_icon'><i class="ri-briefcase-line"></i></span>
                            <h6>2020 - 2021</h6>
                            <h5>Sr. Fronted Developer</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus praesentium deleniti, ducimus nam iure voluptas?</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Experience;