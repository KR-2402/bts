import React ,{useState}from "react";
import { Button, ModalBody, NavbarBrand } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar,NavDropdown,Nav} from 'react-bootstrap';
import logo from "./logo.png";
import pay from "./pay.jpeg";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const [show, setShow] = useState(false);
  const [s, set]=useState(false);
  const Close = () => set(false);
  const Show = () => set(true);
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
  return (
    <>

       <Navbar bg="light"
        sticky="top" expand="sm" collapseOnSelect  >
        <Navbar.Brand>
          <img src={logo}  height="80px" />
          BTS
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="align">
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
            <Nav.Link onClick={Show}>Payment</Nav.Link>
            <Modal show={s} onHide={Close}>
            <Modal.Header closeButton>
            <Modal.Title>Scan code to pay</Modal.Title>
           </Modal.Header>
        <Modal.Body>
          <img src ={pay} width="200px" height="200px"></img>
        </Modal.Body>
        </Modal>
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