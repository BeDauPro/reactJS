import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/image/logo192.png';
import {useLocation, NavLink, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';

const Header =(props)=>{
    const location = useLocation();
    const [hideHeader, setHideHeader]= useState(false);

    const { logout , user } = useContext(UserContext);

    // useEffect(()=>{
    //   if(window.location.pathname==='/login'){
    //     setHideHeader(true);
    //   }
    // },[])

    const navigate = useNavigate();
    const handleLogout = () =>{
      logout();
      navigate("/");
      toast.success("logout successfull")
    }
    return (<>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
              src={logoApp}
              width="30"
              height="30"
              className="d-inline-block aligin-top"
              alt="React Bootstrap logo"
          />
          <span> Duc's React App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        {(user && user.auth || window.location.pathname==='/') &&
        <>
          <Nav className="me-auto">        
              <NavLink to="/" className="nav-link">Home</NavLink>      
              <NavLink to="/users" className="nav-link">Manage Users</NavLink>
            </Nav>       
            <Nav>
            {user && user.email && <span className='nav-link'>Welcome {user.email}</span>}
              <NavDropdown title="Setting">
                {user && user.auth === true
                ?<NavDropdown.Item onClick={()=> handleLogout()}>Logout</NavDropdown.Item>
                  :<NavLink to="/login" className="dropdown-item">Login</NavLink>
                }
              </NavDropdown>
            </Nav>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}
export default Header;