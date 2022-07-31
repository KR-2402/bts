import { useState } from "react";
import { Container, Navbar,Nav, Row, Col,Button } from "react-bootstrap";
import Addlist from "./Addlist";
import List from "./List";
import "../App.css";

function Admin() {
  const [listId, setListId] = useState("");

  const getListIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setListId(id);
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