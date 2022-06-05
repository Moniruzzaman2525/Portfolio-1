import React, { Fragment } from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../Herosection/HeroSection';
import Services from '../Services/Services';

const Layout = () => {
    return <Fragment>
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
        <Services />
    </Fragment>
};

export default Layout;