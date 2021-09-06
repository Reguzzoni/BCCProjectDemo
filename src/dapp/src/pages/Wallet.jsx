import React from 'react';
import TrxHistory from '../components/TrxHistory';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./wallet.css";
import WalletBalance from "../components/WalletBalance";
import { Grid, Typography } from "@material-ui/core";

function Wallet() {
    return <div className="wallet">
        <Grid container spacing={3} style={{ marginBottom: 20 }}>
        <Grid item xs={5}>
              <Form>
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg" lg={10}>
                      Send Money
                    </Form.Label>
                    </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column lg={10}>
                      Payee Name
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Payee Wallet
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Amount
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Due
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  />
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
            </Grid>
            <Grid className = "walletBalance" item xs={6}>
                <WalletBalance></WalletBalance>
            </Grid>
            <Grid item xs={11}>
                <TrxHistory></TrxHistory>
            </Grid>
            </Grid>
    </div>;      
}

export default Wallet;
