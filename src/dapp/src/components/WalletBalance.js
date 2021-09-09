import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./walletBalance.scss";

class WalletBalance extends React.Component {
    render() {
       return <Form.Group>
          <Form.Row>
              <Form.Label column="sm" lg={12} >
                Wallet Balance
              </Form.Label>
              <Col>
              <Form.Label column="sm" lg={12} >
                XX.XX
              </Form.Label>
              </Col>
          </Form.Row>    
        </Form.Group>;
    }
  }
  
export default WalletBalance;