import React from 'react'
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link } from 'react-router-dom';
import { IAuthenticatedProps } from '../../../App';
import { beginSignInProcess } from '../../../functions/authentication_Functions';

const userRole = 'guest'

const marginRight = {marginRight:'2rem'}

const Appbar = (props:IAuthenticatedProps) => {
    return (
        <Navbar bg="light" className='partition' expand="lg">
          <Navbar.Brand href="/">360 Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link as={Link} to={'/'} className="mr-sm-2" >{'Home'}</Nav.Link>
               <Nav.Link as={Link} to={'/NoticeBoard'} className="mr-sm-2" >{'Notice Board'}</Nav.Link>
            </Nav>
            {userRole === 'guest' ? 
              <button  className="button" style={marginRight} onClick={beginSignInProcess}>Sign In</button> 
                : 
              <button className="button" style={marginRight}>Sign Out</button>
            }
          </Navbar.Collapse>
        </Navbar>
      );
}

export { Appbar }