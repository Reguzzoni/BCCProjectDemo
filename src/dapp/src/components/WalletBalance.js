import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./walletBalance.css";

class WalletBalance extends React.Component {
    render() {
       return <Form.Group>
          <Form.Row>
              <Form.Label column="sm" lg={10}>
                Wallet Balance
              </Form.Label>
              <Col>
              <Form.Control className = "wallet-form-control" type="text"  />
              </Col>
          </Form.Row>    
        </Form.Group>;
    }
  }
  
export default WalletBalance;