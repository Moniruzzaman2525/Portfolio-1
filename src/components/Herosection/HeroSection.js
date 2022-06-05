

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HeroSection.css';
import { init } from 'ityped';
import heroImg from '../../image/profile-removebg-preview.png'

const HeroSection = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: false,
            strings: [
                'Md Moniruzzaman',
                'a Web Developer'
            ],
        })
    }, [])
    return <section className='hero_section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero_content">
                        <p className='mb-3'>Welcome to my world!</p>
                        <h2 className='hero_title mb-5'>I'm <span ref={textRef}></span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, delectus.</p>
                        <div className="hero_btns mt-4 d-flex align-items-center gap-4">
                            <button className='btn hire_btn'><a href="">Hire Me</a></button>
                            <button className="btn">Contact</button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero_img">
                        <img src={heroImg} alt="" className='w-100 mx-auto' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default HeroSection;