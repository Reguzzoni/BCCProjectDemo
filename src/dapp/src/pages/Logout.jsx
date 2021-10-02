import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./logout.scss";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function Logout({ setToken }) {
  const history = useHistory();

  function handleClick(event) {
    console.log("Event e ", event)
    if(event){
      const token = "";
      setToken(token);
      history.push("/");
    }
  }
  
  return (
    <div className="Logout">
        <h3 className="h3logout" >
          Please, press on button "Logout" to return on login Page</h3>
        <Button 
         block size="lg" 
         onClick={handleClick}
         type="submit">
          Logout
        </Button>
    </div>
  );
}

Logout.propTypes = {
  setToken: PropTypes.func.isRequired
}