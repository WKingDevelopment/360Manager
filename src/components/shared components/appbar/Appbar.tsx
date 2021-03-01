import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link } from 'react-router-dom';
import { IAuthenticatedProps } from '../../../App';
import { beginSignInProcess, beginSignOutProcess } from '../../../functions/authentication_Functions';
import { routesInfo } from '../../../routers/Routers';
import { RouteRestriction } from '../../../routers/Routers';

const marginRight = {marginRight:'2rem'}

const Appbar = (props:IAppbarProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(props.authenticated);
  let mapKey:number = 0;

  useEffect(() => {
    setAuthenticated(props.authenticated)
  },[props.authenticated])

    return (
        <Navbar bg="light" className='partition navbar fixed-top' expand="lg">
          <Navbar.Brand href="/">360 Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               {routesInfo.map((rt) => {
                 if(rt.path && rt.label && (rt.restriction !== RouteRestriction.open && authenticated || rt.restriction === RouteRestriction.open)) {
                   mapKey += 1;
                  return <Nav.Link key={mapKey} as={Link} to={rt.path} className={props.activePage === rt.label? "mr-sm-2 partition bold" : "mr-sm-2"}>{rt.label}</Nav.Link>
                 }
               })}
            </Nav>
            {!authenticated ? 
              <button  className="button" style={marginRight} onClick={beginSignInProcess}>Sign In</button> 
                : 
              <button className="button" style={marginRight} onClick={beginSignOutProcess}>Sign Out</button>
            }
          </Navbar.Collapse>
        </Navbar>
      );
}

interface IAppbarProps extends IAuthenticatedProps {
  activePage:string
}

export { Appbar }