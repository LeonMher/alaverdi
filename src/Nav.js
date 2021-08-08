import React from 'react'
import { Link } from 'react-router-dom'
import * as Bootstrap from 'react-bootstrap'
import './styles/nav.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// import { Link } from 'react-router-dom'

function Nav() {
    return (

        <Bootstrap.Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
            <Bootstrap.Container>

                <Bootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Bootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <Bootstrap.Nav className="me-auto">
                        <Bootstrap.Nav.Link className='nav' ><Link to='/'>Sweet Home</Link></Bootstrap.Nav.Link>
                        <Bootstrap.Nav.Link className='nav' ><Link to='/list'>Articles</Link></Bootstrap.Nav.Link>
                        <Bootstrap.Nav.Link className='nav' ><Link to='/about'>About</Link></Bootstrap.Nav.Link>

                    </Bootstrap.Nav>

                </Bootstrap.Navbar.Collapse>
            </Bootstrap.Container>
        </Bootstrap.Navbar>



    )
}

export default Nav
