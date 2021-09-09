import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.scss";
import MetamaskService from "../MetamaskService.js";
import ConnectButton from "../components/ConnectButton";




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function requestMetamaskConnect() {
    MetamaskService.connectToMetamask().then(resolve => {
      console.log("Connet to metamask with success : ", resolve)
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