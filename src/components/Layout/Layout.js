import React, { Fragment } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Email from '../Herosection/Email';
import HeroSection from '../Herosection/HeroSection';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';

const Layout = () => {
    return <Fragment>
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
        <Services />
        {/* <Experience></Experience> */}

        <Project />
        {/* <Email></Email> */}
        <Blog />
        <Contact></Contact>

        <Footer></Footer>
    </Fragment>
};

export default Layout;