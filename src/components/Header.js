import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/image/logo192.png';
import {useLocation, NavLink, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
const Header =(props)=>{
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () =>{
      localStorage.removeItem("token");
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
          <Nav className="me-auto">        
              <NavLink to="/" className="nav-link">Home</NavLink>      
              <NavLink to="/users" className="nav-link">Manage Users</NavLink>
            </Nav>       
            <Nav>
              <NavDropdown title="Setting">
                <NavLink to="/login" className="dropdown-item">Login</NavLink>
                <NavDropdown.Item onClick={()=> handleLogout()}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}
export default Header;