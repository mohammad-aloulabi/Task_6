import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarStyle.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Info from '../Info/Info';




function NavBar({ logoMagazin, logoCircle, title, descriptionLight, descriptionDark, MoodIcon, sun, BWorldLight, BWorldDark, theme, settheme }) {

    const toggle_mode = () => {
        theme == 'light' ? settheme('dark') : settheme('light');
    }


    return (

        <Navbar expand="lg" className={` d-flex  justify-content-between align-items-center  fixed-top ${theme} Navformat`}>
            <Container fluid>
                <Navbar.Brand ><div className='  ms-5  d-flex align-items-center'><img src={theme == 'light' ? BWorldLight : BWorldDark} /><div className='circle position-relative '><img src={logoCircle} className='logoCircle' /><div className='openmagazine position-absolute  top-50 start-50 translate-middle'><img src={logoMagazin} className='logoMagazin' /></div></div></div></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='rtl'>
                    <Nav
                        className="mx-auto "
                        style={{ maxHeight: '100vh' }}
                        navbarScroll
                    >
                        <div className='mx-auto d-flex  linkFormat'>
                            {title?.map((element, index) => {
                                return (
                                    <Nav.Link className=' link ' key={index}><Link to={element?.path} >{element?.ele}</Link></Nav.Link>
                                )
                            })}
                        </div>
                    </Nav>
                    <div onClick={() => { toggle_mode() }} className='d-flex gap-1 me-5'>
                        <img src={theme == 'light' ? MoodIcon : sun} className='moodicon' />
                        <Button className='btnNavFormat   border-0' >{theme == 'light' ? descriptionDark : descriptionLight}</Button>
                    </div>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;



