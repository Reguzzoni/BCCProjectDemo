import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.scss";
import MetamaskConnect from "../MetamaskConnect.js";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function requestMetamaskConnect() {
    
    MetamaskConnect.connectToMetamask().then((resolve, error) => {
      if(error) {
        console.log("error into login ", error);
      } 
      else if(resolve) {
        console.log("Connet to metamask with success : ", email)
        const tokenMember = "AuthenticatedToken";
        const tokenAdminMocked = "AuthenticatedTokenAdmin";
        if(email == "admin")
          setToken(tokenAdminMocked);
        else 
          setToken(tokenMember);
        history.push("/");
        window.location.reload();
      }
      else {
        console.log("Check resolve error", resolve, error)
      }
    });
  }

  function handleSubmit(event) {
    if(event){
      event.preventDefault();
      console.log('The link was submited.');
      requestMetamaskConnect();
    }
  }

  function handleClick(event) {
    console.log("Event e ", event)
    if(event){
      event.preventDefault();
      console.log('The link was clicked.');
      requestMetamaskConnect();
    }
  }
  
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group  controlId="email">
          <Form.Label className="marginedEmail">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className="marginedPsw">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Button className="marginedButton"
         block size="lg" 
         onClick={handleClick}
         type="submit" 
         disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}