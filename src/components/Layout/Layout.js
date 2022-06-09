import React, { Fragment } from 'react';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Email from '../Herosection/Email';
import HeroSection from '../Herosection/HeroSection';
import Project from '../Project/Project';
import Services from '../Services/Services';

const Layout = () => {
    return <Fragment>
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
        <Services />
        {/* <Experience></Experience> */}

        <Project />
        <Email></Email>
    </Fragment>
};

export default Layout;