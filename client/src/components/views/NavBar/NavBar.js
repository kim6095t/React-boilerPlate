import React from 'react';
import {Navbar,Nav, Container, NavDropdown,Form } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import {logoutUser} from '../../../_actions/user_action'


function NavBar() {
  const user = useSelector(state => state.userReducer)
  const history = useNavigate();

  const logoutHandler = () => {
    logoutUser().then((response) => {
      if(response.status===200){
        history('/login')
      }else{
        alert('Log Out Failed')
      }
    })
  };

  return (
    <div style={{ position: 'fixed', zIndex: 5, width: '100%'}}>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="/" style={{color:'blue'}}>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action2">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user.userData && !user.userData.isAuth?
                <Form className="d-flex">
                  <Nav.Link href="/login">SignIn</Nav.Link>
                  <Nav.Link href="/register">Signup</Nav.Link>
                </Form>
              :
              <Form className="d-flex">
                  <Nav.Link onClick={logoutHandler}>LogOut</Nav.Link>
              </Form>          
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar