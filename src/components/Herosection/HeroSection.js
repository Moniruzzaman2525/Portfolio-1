

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './HeroSection.css';
import { init } from 'ityped';
import heroImg from '../../image/profile001.png';



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
    }, []);

    const link = "https://drive.google.com/file/d/1jJRbdG4KY9BzK2NCuHD_Y_JmhR2kOLsw/view?usp=sharing"


    return <section className='hero_section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero_content mb-5">
                        <p className='mb-3'>Welcome to my world!</p>
                        <h2 className='hero_title '>I'm Md Moniruzzaman</h2>
                        <h4 className='mb-4 mt-2'>I am a web developer</h4>
                        <p>To advance my web development career by exhibiting my talents and proving that I am a quick learner and highly skilled professional. I'm always looking for new challenges that will allow me to use my abilities to their full potential, and I enjoy working with cutting-edge technology.</p>
                        <div className="hero_btns mt-4 d-flex align-items-center gap-4">
                            <button className='btn hire_btn'><a href="mailto:moniurzzaman25@gmail.com">Hire Me</a></button>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <button className='btn hover:translate-x-3 hover:bg-emerald-800'>Resume</button>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero_img mx-auto">
                        <img src={heroImg} alt="" className='w-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default HeroSection;