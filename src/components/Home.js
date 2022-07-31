import React ,{useState,useEffect}from "react";
import { Button, NavbarBrand } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar,NavDropdown,Nav} from 'react-bootstrap';
import logo from "./logo.png";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
 import { getDatabase,ref,onValue } from "firebase/database";
import db from "../firebase"

const Home = () => {
//const db = getDatabase();
  const starCountRef = ref(db, 'users/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  //updateStarCount(postElement, data);
});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // 
  
  return (
    <>

       <Navbar bg="light"
        sticky="top" expand="sm" collapseOnSelect  >
        <Navbar.Brand>
          <img src={logo}  height="80px" />
          BTS
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            {/* <NavDropdown title="Dropdown">
              <NavDropdown.Item href="#dpd/1">1</NavDropdown.Item>
              <NavDropdown.Item href="#dpd/2">2</NavDropdown.Item>
              <NavDropdown.Item href="#dpd/3">3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link onClick={handleShow}>
        Register
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Semester</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            
             <label className="mb-3" >Route</label>
                  <br></br>
                  <select >
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                  </select>        
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes and Proceed to Pay
          </Button>
        </Modal.Footer>
      </Modal>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
   `         <Nav.Link href="#">Welcome {user && user.email}</Nav.Link>
   <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
        
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      <div className="p-4 box  text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="notif">
        {/* Notifications appear here. */}
      </div>
    </>
  );
};

export default Home;