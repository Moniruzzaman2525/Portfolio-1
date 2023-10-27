


import React from 'react';
import '../Project/Project.css';
import img01 from '../../image/1.png';
import img02 from '../../image/2.png';
import img03 from '../../image/3.png';
import { Container, Row, Col } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';

const projectData = [
    {
        "id": 1,
        imgUrl: img01,
        title: 'UI/UX Design',
        blog: "User interface design or user interface engineering",
        url: 'https://gadget-galaxy-frontend-moniruzzaman2525.vercel.app/'
    },
    {
        "id": 2,
        imgUrl: img02,
        title: "Web Design",
        blog: "Web design encompasses many different skills",
        url: 'https://vocal-paprenjak-ba58ed.netlify.app/'
    },
    {
        "id": 3,
        imgUrl: img03,
        title: 'Web Development',
        blog: "Jim Morisson Says when the musics over turn off the light",
        url: 'item2'
    },
]



const Blog = () => {
    return <section id='project'>
        <Container>
            <Row>
                <Col lg='12' className='project_top mb-5'>
                    <h2>From My Blog
                        <h4>Our Recent Updates, Blog, Tips, Tricks & More</h4>
                    </h2>
                </Col>


                {
                    projectData.map((item, index) => (
                        <Col lg="4" md="6" sm="6" className='mb-5' key={index}>
                            <div>
                                <div>
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

                                <div>
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <h5>{item.blog}</h5>
                                </div>

                            </div>

                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
};

export default Blog;