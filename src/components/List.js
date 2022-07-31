import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import DataService from "../services/list.services";
const List = ({ getListId }) => {
  const [lists, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const data = await DataService.getAllList();
    console.log(data.docs);
    setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await DataService.deleteList(id);
    getList();
  };
  return (
    <>
      {/* <div className="mb-2">
        <Button variant="dark edit" onClick={getList}>
          Refresh List
        </Button>
      </div> */}

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Bus No</th>
            <th>Bus Route</th>
            <th>Schedule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.busno}</td>
                <td>{doc.busroute}</td>
                <td>{doc.schedule}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getListId(doc.id)}
                  >
                   Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default List;