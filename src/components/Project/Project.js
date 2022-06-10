


import React from 'react';
import './Project.css';
import img01 from '../../image/img1.png';
import img02 from '../../image/img2.png';
import img03 from '../../image/img3.png';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const projectData = [
    {
        "id": 1,
        imgUrl: img01,
        title: 'Lukas',
        url: 'item'
    },
    {
        "id": 2,
        imgUrl: img02,
        title: "Levi's",
        url: 'item1'
    },
    {
        "id": 3,
        imgUrl: img03,
        title: 'Smile Care',
        url: 'item2'
    },
]



const Project = () => {

    // const navigate = useNavigate();
    // const navigateProduct = id => {
    //     // console.log(id);
    //     navigate(`/projects/${id}`)
    // }
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
                                <Link to={item.url}>
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
                                </Link>

                                <Link to={item.url}>
                                    <button className="btn" type='submit' >
                                        Project
                                    </button>
                                </Link>

                            </div>

                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
};

export default Project;