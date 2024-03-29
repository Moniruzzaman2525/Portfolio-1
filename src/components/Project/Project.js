


import React from 'react';
import './Project.css';
import img01 from '../../image/next_1.jpg';
import img02 from '../../image/WhatsApp Image 2023-10-27 at 11.53.49_10ac4636.jpg';
import img03 from '../../image/img1.png';
import { Container, Row, Col } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';

const projectData = [
    {
        "id": 1,
        imgUrl: img01,
        title: 'Gadget Galaxy',
        url: 'https://gadget-galaxy-frontend-moniruzzaman2525.vercel.app/'
    },
    {
        "id": 2,
        imgUrl: img02,
        title: "Book Catalog",
        url: 'https://vocal-paprenjak-ba58ed.netlify.app/'
    },
    {
        "id": 3,
        imgUrl: img03,
        title: 'Lukas',
        url: 'item2'
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
                        <Col lg="4" md="6" sm="6" className='mb-5' key={index}>
                            <div>
                                <div onClick={()=> window.open(item.url)}>
                                    <div className="project_card mb-5">
                                        <div className="project__img">
                                            <img src={item.imgUrl} alt="" className='w-100' />
                                        </div>
                                        <div className="project_content">
                                            <div className="content_top">
                                                <h5>{item.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button onClick={()=> window.open(item.url)} className="btn" type='submit' >
                                    Project
                                </button>

                            </div>

                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
};

export default Project;