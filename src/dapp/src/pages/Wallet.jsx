import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./wallet.scss";
import { Grid } from "@material-ui/core";
import MetamaskSendTrx from '../MetamaskSendTrx';
import MetamaskGetBalance from '../MetamaskGetBalance';
import MetamaskGetTrxHistory from '../MetamaskGetTrxHistory';
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const columns = [
  { field: 'ID',
    headerName: 'ID Transaction', 
    width: 90 
  },
  {
    field: 'FROM',
    headerName: 'From',
    width: 90,
  },
  {
    field: 'TO',
    headerName: 'To',
    width: 90,
  },
  {
    field: 'AMOUNT',
    headerName: 'Amount',
    type: 'number',
    width: 90,
    editable: true,
  }
];

export default class Wallet extends Component {

  constructor (props){
    super(props);
    
    this.state = {
      payeeWalletAddress: "",
      amount : "0.0",
      accountBalance: "XX.XX",
      trxHistory: ""/*[
        { "name1": "id", "name2": "Id" , "name3":"1", "name4":"1", "name5":"1"}
      ]*/
      //[{"name1":"0x5618972C79dD7495710E01833D5D615C3825d841","name2":"0x5618972C79dD7495710E01833D5D615C3825d841","name3":"100000000000000000","name4":30,"name5":9268423}]
      //["", "", "", "", "", ""]
    };
    
    this.fillTrxHistory();

    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangePayee = this.handleChangePayee.bind(this);
  }
  
  validateForm() {
    return (this.state.payeeWalletAddress.length > 0
      && this.state.amount.length > 0);
  }

  fillTrxHistory = async () => {
    console.log("Event fillTrxHistory ")
    // reset table
    var emptyList = [];
    this.setState({trxHistory : emptyList});
    // search trx
    var listTrxHistory = [];
    var newTrxHistory = await MetamaskGetTrxHistory.getTrxHistory();
    console.log("newTrxHistory ", newTrxHistory);

    console.log(" listTrxHistory ", JSON.stringify(newTrxHistory));

    this.setState({trxHistory : newTrxHistory});
  }
  
  handleClickSendTrx = async (event) => {
    console.log("Event handleClickSendTrx ")
    if(event){
      event.preventDefault();
      console.log('The link was clicked.');
      await MetamaskSendTrx.sendTrx(
        this.state.payeeWalletAddress, 
        this.state.amount 
      ); 
      this.fillTrxHistory();
    }
  }

  handleClickRequestBalance = async (event) => {
    console.log("Event handleClickRequestBalance ")
    if(event){
      event.preventDefault();
      console.log('The link was clicked.');

      var accountBalanceVarEth = await MetamaskGetBalance.getBalance();
      this.setState({accountBalance: accountBalanceVarEth});
      console.log("balance return is ", this.state.accountBalance);
    }
  }

  handleChangePayee(event) {
    if(event) {
      console.log('The Payee is changed.');
      console.log(this);
      this.setState({ payeeWalletAddress: event.currentTarget.value});
    }
  }

  handleChangeAmount(event) {
    if(event) {
      console.log('The Amount is changed.');
      console.log(this);
      this.setState({ amount: event.currentTarget.value});
    }
  }
  
  render() {
    return <div className="wallet">
        <Grid container alignItems="stretch" spacing={3} style={{ marginBottom: 20 }}>
        <Grid item sm={12} md={6} style={{borderStyle: "groove ", borderWidth: "thin"}}>
              <Form>
                <Form.Group>
                  <Form.Row>
                    <h3> Send money </h3>
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
                      onChange={this.handleChangePayee} />
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
                onClick={this.handleClickSendTrx}
                type="submit" 
                disabled={!this.validateForm()}>
                  SEND TRANSACTION
              </Button>
            </Grid>
              
            <Grid item xs={6}>
                <Col>   
                  <Form.Group>
                    <Form.Row>
                      <h3> Wallet Balance </h3>
                      <Col>
                      <Form.Label style={{
                        fontSize: "4vh"
                        }} column="sm" lg={12}>
                        {this.state.accountBalance} eth
                      </Form.Label>
                      </Col>
                    </Form.Row>    
                  </Form.Group>
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
            <Grid item xs={12}>
              <div>
                <h3 style={{textAlignVertical: "center",textAlign: "center",}}>Transaction history</h3>
                <div className="ag-theme-alpine" style={{height: 250}}>
                  <AgGridReact
                      rowData={this.state.trxHistory}>
                      <AgGridColumn flex={1} field="ID"></AgGridColumn>
                      <AgGridColumn flex={1} field="FROM"></AgGridColumn>
                      <AgGridColumn flex={1} field="TO"></AgGridColumn>
                      <AgGridColumn flex={1} field="AMOUNT"></AgGridColumn>
                      <AgGridColumn flex={1} field="TIME"></AgGridColumn>
                      <AgGridColumn flex={1} field="STATUS"></AgGridColumn>
                      <AgGridColumn flex={1} field="BLOCK_NUMBER"></AgGridColumn>
                      <AgGridColumn flex={1} field="HASH"></AgGridColumn>
                  </AgGridReact>
              </div>
              </div>;
            </Grid>
            </Grid>
    </div>;     
  } 
}
