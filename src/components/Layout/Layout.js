import React, { Fragment } from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../Herosection/HeroSection';

const Layout = () => {
    return <Fragment>
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
    </Fragment>
};

export default Layout;