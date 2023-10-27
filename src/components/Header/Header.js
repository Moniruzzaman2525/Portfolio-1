import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const Header = () => {




    const navLinks = [
        {
            display: 'Home',
            url: '#home'
        },
        {
            display: 'About',
            url: '#about'
        },
        {
            display: 'Service',
            url: '#service'
        },
        {
            display: 'Project',
            url: '#project'
        },
        {
            display: 'Contact',
            url: '#contact'
        },
    ]
    const headerRef = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header_shrink')
            }
            else {
                headerRef.current.classList.remove('header_shrink')
            }
        })
        // return () => {
        //     window.removeEventListener('scroll')
        // }
    }, [])


    const menuRef = useRef(null);

    const menuToggle = () => menuRef.current.classList.toggle('menu_active')

    const link = "https://drive.google.com/file/d/11N79xR3Df2Ar16oqQH_0ytO_l3II5KJh/view?usp=sharing"

    return <header className='header' ref={headerRef}>
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo"><h5>Moniruzzaman</h5></div>
                <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                    <ul className="nav_list">
                        {
                            navLinks.map((item, index) => <li className="nav_item" key={index}>
                                <a href={item.url}  >{item.display}</a>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="nav_right d-flex align-items-center gap-4">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className='btn hover:translate-x-3 hover:bg-emerald-800'>Download Resume</button>
                    </a>
                    <span className="mobile_menu"><i class="ri-menu-5-line" onClick={menuToggle}></i></span>
                </div>

            </div>
        </Container>

    </header>
};

export default Header;