


import React from 'react';
import img11 from '../../image/img1.png'
import { Container, Row, Col } from 'reactstrap';
const Item1 = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className='text-center mt-5'>Lukas</h2>
                    </Col>
                    <Col lg="12">
                        <div className='d-flex justify-content-center mt-5 gap-2'>
                            <img src={img11} alt="" className='w-25' />
                            <img src={img11} alt="" className='w-25' />
                            <img src={img11} alt="" className='w-25' />
                        </div>
                    </Col>
                    <Col lg="12" className='mt-5'>
                        <div className='text-white mb-5'>
                            <li className='text-white'>Admin Can manage Order</li>
                            <li className='text-white'>Admin Can manage products</li>
                            <li className='text-white'>User can purchase a product by credit card</li>
                            <li className='text-white'>User can give a review</li>
                            <li className='text-white'>Both user and admin update their profile</li>
                        </div>
                        <div>
                            <p>A manufacturing website that interacts with both end-users and system administrators is being launched. Users may place orders, pay with credit cards, and cancel orders before they are processed. Users may also rank and evaluate each other's work. The system administrator, on the other hand, may manage orders, cancel purchases before they are paid, and add items. Finally, the administrator can provide any user access to administrative functions.</p>
                            <p>Technologies: React, Firebase, Express.js, JWT, MongoDB, Stripe, Tailwind, React Query, DaisyUI, React Toastify, React Hook Form, React Firebase Hooks,</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Item1;
