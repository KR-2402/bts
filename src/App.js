import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Notification from './Notifications'
import Addlist from "./components/Addlist";
import List from './components/List'
import Pay from "./payment";
import {useState} from "react";

function App() {
  const [listId, setListId] = useState("");
  
  const getListIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setListId(id);
  };
  return (
    
    <div className="wel>">
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                    <Notification />
                    <Admin/>
                  </ProtectedRoute>
                 
                }
              />
              <Route path="/pay" element={<Pay/>} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Admin/>}></Route>
           </Routes>
          </UserAuthContextProvider>
          </div>
  );
}

export default App;
