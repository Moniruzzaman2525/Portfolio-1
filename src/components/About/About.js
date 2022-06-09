

import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.css';
import imgAbout from '../../image/profile001.png'
import Education from './Education';
import Skill from './Skill';
import Award from './Award';


const About = () => {

    const [aboutFilter, setAboutFilter] = useState('ABOUT')
    return <section id='about'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
                <Col lg='4' md="4">
                    <div className="about_btn d-flex flex-column align-items-center">
                        <button className={`about_btns ${aboutFilter === 'ABOUT' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('ABOUT')}>About me</button>
                        <button className={`about_btns ${aboutFilter === 'EDUCATION' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('EDUCATION')}>Education</button>
                        <button className={`about_btns ${aboutFilter === 'SKILL' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('SKILL')}>Skills</button>
                        <button className={`about_btns ${aboutFilter === 'AWARD' ? 'about_btns-active' : ''}`} onClick={() => setAboutFilter('AWARD')}>Award</button>
                    </div>
                </Col>
                <Col lg='8' md="9">
                    {
                        aboutFilter === 'ABOUT' && <div className="about_content_wrapper d-flex gap-5">
                            {/* <div className="about_img w-100 ">
                                <img src={imgAbout} alt="" className='w-100' />
                            </div> */}
                            <div className="about_content">
                                <h2>I'm Md Moniruzzaman</h2>
                                <p> I am a learner of Web Development and Programming.To further my web development career by demonstrating my abilities and demonstrating that I am a quick learner and knowledgeable professional. I'm always on the lookout for new challenges that will allow me to put my skills to the test, and I love working with cutting-edge technology.</p>
                                <div className="social_links">
                                    <h6 className='mb-4'>Connect With me:</h6>
                                    <span><a href=""><i class="ri-facebook-line"></i></a></span>
                                    <span><a href=""><i class="ri-linkedin-line"></i></a></span>
                                    <span><a href=""><i class="ri-github-line"></i></a></span>
                                    <span><a href=""><i class="ri-facebook-line"></i></a></span>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        aboutFilter === 'EDUCATION' && <Education></Education>
                    }
                    {
                        aboutFilter === 'SKILL' && <Skill></Skill>
                    }
                    {
                        aboutFilter === 'AWARD' && <Award></Award>
                    }
                </Col>
            </Row>
        </Container>
    </section>
};

export default About;