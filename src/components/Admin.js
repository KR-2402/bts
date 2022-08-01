import { useState } from "react";
import { Container, Navbar,Nav, Row, Col,Button } from "react-bootstrap";
import Addlist from "./Addlist";
import List from "./List";
import "../App.css";
import { useUserAuth } from "../context/UserAuthContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";

function Admin() {
  const [listId, setListId] = useState("");
  const { user,logOut } = useUserAuth();
  const navigate = useNavigate();

if(!user || user.email!=="adminmec@gmail.com"){
  return <Navigate to="/"></Navigate>
}
  const getListIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setListId(id);
  };
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
      <Navbar bg="light" variant="light" className="header">
        <Container>
          {/* <Navbar.Brand href="#home">Bus - Firebase CRUD</Navbar.Brand> */}
          <Nav.Link href="https://docs.google.com/spreadsheets/d/123-IHbQr057apiLNn9zCWcFNYdY4Vs8qr45EFrPGEBQ/edit?resourcekey#gid=2064078160"><Button variant="primary">
              Responses
            </Button></Nav.Link>
            <Nav.Link href="https://console.firebase.google.com/u/0/project/login-1b1c2/notification/compose"><Button variant="primary">
              Notification
            </Button></Nav.Link>
           <Nav.Link> <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button></Nav.Link>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <Addlist id={listId} setListId={setListId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <List getListId={getListIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;