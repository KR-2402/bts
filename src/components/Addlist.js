import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import DataService from "../services/list.services";

const Addlist = ({ id, setListId }) => {
  const [busno, setBusNo] = useState("");
  const [busroute, setBusRoute] = useState("");
  const [schedule, setSchedule] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const [lists, setList] = useState([]);
 

  const getList = async () => {
    const data = await DataService.getAllList();
    console.log(data.docs);
    setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    if (busno === "" || busroute === "" || schedule === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
    return;
    }
    const newList = {
      busno,
      busroute,
      schedule,
    };
    console.log(newList);

    try {
      if (id !== undefined && id !== "") {
        await DataService.updateList(id, newList);
        setBusNo("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await DataService.addList(newList);
        setMessage({ error: false, msg: "New List added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setBusNo("");
    setBusRoute("");
    setSchedule("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await DataService.getList(id);
      console.log("the record is :", docSnap.data());
      setBusNo(docSnap.data().busno);
      setBusRoute(docSnap.data().busroute);
      setSchedule(docSnap.data().schedule);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">1</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Bus No"
                value={busno}
                onChange={(e) => setBusNo(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">2</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Bus Route"
                value={busroute}
                onChange={(e) => setBusRoute(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">3</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Bus Schedule"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          {/* <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>*/}
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" >
              Add
            </Button> 
          </div>
        </Form>
      </div>
    </>
  );
};

export default Addlist;