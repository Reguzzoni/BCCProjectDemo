import React, {Component} from 'react';
import TrxHistory from '../components/TrxHistory';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./wallet.scss";
import WalletBalance from "../components/WalletBalance";
import { Grid, Typography } from "@material-ui/core";
import MetamaskSendTrx from '../MetamaskSendTrx';
import MetamaskGetBalance from '../MetamaskGetBalance';
import Button from "react-bootstrap/Button";
import styled from 'styled-components';


export default class Wallet extends Component {

  constructor (props){
    super(props);
    
    this.state = {
      payeeWalletAddress: "",
      amount : "0.0",
      accountBalance: "XX.XX"
    };
    
    this.metamaskSendTransaction = this.metamaskSendTransaction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangePayer = this.handleChangePayer.bind(this);
  
  }
  
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
  
  handleClick(event) {
    console.log("Event handleClick ")
    if(event){
      event.preventDefault();
      console.log('The link was clicked.');
      MetamaskSendTrx.sendTrx(
        this.state.payeeWalletAddress, 
        this.state.amount ); 
    }
  }

  handleClickRequestBalance (event) {
    console.log("Event handleClickRequestBalance ")
    if(event){
      event.preventDefault();
      console.log('The link was clicked.');
      MetamaskGetBalance.getBalance().then(resolve => {
        console.log("balance returned is ", resolve)
        if(resolve) {
          this.state.accountBalance = resolve;
        }
      });
    }
  }

  handleChangePayer(event) {
    if(event) {
      console.log('The link was changed.');
      console.log(this);
      this.setState({ payeeWalletAddress: event.currentTarget.value});
    }
  }

  handleChangeAmount(event) {
    if(event) {
      console.log('The link was changed.');
      console.log(this);
      this.setState({ amount: event.currentTarget.value});
    }
  }

  render() {
    return <div className="wallet">
        <Grid container alignItems="stretch" spacing={3} style={{ marginBottom: 20 }}>
        <Grid item sm={12} md={6}>
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
                      onChange={this.handleChangePayer} />
                    </Col>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label column="sm" lg={10}>
                      Amount
                    </Form.Label>
                    <Col>
                      <Form.Control size="sm" type="text"  key="2"
                      onChange={this.handleChangeAmount}  />
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
              onClick={this.handleClick}
              type="submit" 
              disabled={!this.validateForm}>
                SEND TRANSACTION
            </Button>
            

            </Grid>
              
            <Grid item xs={6}>
                <Col>
                <WalletBalance></WalletBalance>
                </Col>
                <Col>
                      <Button className="marginedButton"
                        block size="lg" 
                        onClick={this.handleClickRequestBalance}
                        type="submit">
                          REQUEST WALLET BALANCE
                      </Button>
                    </Col>
                    </Grid>
            <Grid item xs={11}>
                <TrxHistory></TrxHistory>
            </Grid>
            </Grid>
    </div>;     
  } 
}
