import React, {Component} from 'react';
import TrxHistory from '../components/TrxHistory';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./wallet.css";
import WalletBalance from "../components/WalletBalance";
import { Grid, Typography } from "@material-ui/core";
import MetamaskSendTrx from '../MetamaskSendTrx';
import Button from "react-bootstrap/Button";
import styled from 'styled-components';

export default class Wallet extends Component {
  state = {
    payeeWalletAddress: "",
    amount : "0.0"
  };

  metamaskSendTransaction() {  
    console.log("this.state.payeeWalletAddress ", this.state.payeeWalletAddress)
    console.log("this.state.amount ", this.state.amount)

    MetamaskSendTrx.sendTrx(
      this.state.payeeWalletAddress, 
      this.state.amount );  
  }
  
  validateForm() {
    //return this.state.payeeWalletAddresslength > 0;
    return true;
  }

  handleSubmit(event) {
    console.log("event try");
    if(event){
      event.preventDefault();
      console.log('The link was submited.');
      this.metamaskSendTransaction();
    }
  }
  
  handleClick(e) {
    console.log("Event e ")
    if(e){
      e.preventDefault();
      console.log('The link was clicked.');
      this.metamaskSendTransaction();
    }
  }

  handleChangePayer(e) {
    if(e) {
      console.log('The link was changed.');
      this.metamaskSendTransaction();
      this.setState({ payeeWalletAddress: e.currentTarget.value});
    }
  }

  
  handleChangeAmount(e) {
    if(e) {
      console.log('The link was changed.');
      this.metamaskSendTransaction();
      this.setState({ amount: e.currentTarget.value});
    }
  }

  render() {
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
                      <Form.Control size="sm" type="text" key="1"
                      onChange={this.handleChangePayer()} />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Amount
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  key="2"
                      onChange={this.handleChangeAmount()}  />
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

              <Button className="marginedButton"
              block size="lg" 
              onClick={() => this.handleClick()}
              type="submit" 
              disabled={!this.validateForm()}>
                SEND TRANSACTION
            </Button>
            

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
}
