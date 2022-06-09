


import React from 'react';
import './Project.css';
import img01 from '../../image/img1.png';
import img02 from '../../image/img2.png';
import img03 from '../../image/img3.png';
import { Container, Row, Col } from 'reactstrap';

const projectData = [
    {
        imgUrl: img01,
        title: 'React Landing',
        url: '#'
    },
    {
        imgUrl: img02,
        title: 'React Landing',
        url: '#'
    },
    {
        imgUrl: img03,
        title: 'React Landing',
        url: '#'
    },
]


const Project = () => {
    return <section id='project'>
        <Container>
            <Row>
                <Col lg='12' className='project_top mb-5'>
                    <h6>Explore my work and give a feedback</h6>
                    <h2>Project</h2>
                </Col>


                {
                    projectData.map((item, index) => (
                        <Col lg="4" md="6" sm="6" className='' key={index}>
                            <div className="project_card mb-5">
                                <div className="project__img">
                                    <img src={item.imgUrl} alt="" className='w-100' />
                                </div>

                                <div className="project_content">
                                    <div className="content_top">
                                        <h5>{item.title}</h5>
                                        <a href={item.url} className="ms-5">View Live</a>
                                    </div>


                                </div>
                            </div>
                        </Col>))
                }



            </Row>
        </Container>
    </section>
};

export default Project;