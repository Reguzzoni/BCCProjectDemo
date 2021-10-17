import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@material-ui/core/TextField';
import Form from "react-bootstrap/Form";
import { Grid } from "@material-ui/core";
import './adminContractTable.scss';
import AssociationContract from '../AssociationContract.js';

class BtnCellRendererAddMember extends React.Component {
    constructor(props) {
      super(props);
      this.text = this.props.text;
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
      this.associationId = this.props.associationId;
      this.Network = this.props.Network;
      this.ID = this.props.ID;


      this.state = {
        showDialogConfirm : false,
        showDialogConfirmed : false,
        addrMember: "",
        name: "",
        role: "",
        quota: "",
        taxId: "",
        votingRight : ""
      };
      this.contractAssociation = new AssociationContract();
    }

    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }

    checkAddMember() {
      if (this.state.addrMember != ""
        && this.state.name != ""
        && this.state.role != ""
        && this.state.quota != ""
        && this.state.taxId != ""
        && this.state.votingRight != "") {
          console.log("Enabled")
          return false;
        }

      console.log("disabled")
      return true;
    }

    addMember() {
      this.contractAssociation.addMember(
        this.associationId, 
        this.state.addrMember,
        this.state.name,
        this.state.role,
        this.state.quota, 
        this.state.taxId,
        this.state.votingRight
      ).then(response => {
      console.log("response : " , response);
    });
    }

    render() {
      return ( 
        <React.Fragment>
          <Button 
            onClick={(e) => {this.setState({showDialogConfirm :true})}}
          > Add Member
          </Button>

          <Dialog 
            fullWidth
            maxWidth="900px"
            open={this.state.showDialogConfirm}
            onClose={(e) => { this.setState({
                showDialogConfirm : false,
                showDialogConfirmed : false,
                addrMember: "",
                name: "",
                role: "",
                quota: "",
                taxId: "",
                votingRight : ""
              })
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="dialogSureToConfirm">
            <h3 className="h3NetworkContractDetails"> 
              ADD MEMBER TO BUSINESS NETWORK {this.props.Network}
            </h3>
            </DialogTitle>
            
            <div className="anagraficadipendente" >
                <div className="anagraficainfo">
                  <Grid className="anagraficacard"
                  container
                  >
                  <Form style={{width:"100%"}}>
                    <Form.Row className="anagraficaform">
                      <TextField 
                        style={{width:"25%"}} 
                        label="Address"
                        value={this.state.addrMember}
                        onChange={(e) => {this.setState({addrMember : e.target.value})}}
                        inputProps={{style: {fontSize: 20}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                      ></TextField>
                      
                      <TextField 
                        style={{width:"25%"}}
                          label="Name"
                          value={this.state.name}
                          onChange={(e) => {this.setState({name : e.target.value})}}
                          inputProps={{style: {fontSize: 20}}} // font size of input text
                          InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                      ></TextField>

                      <TextField 
                        style={{width:"25%"}}
                        label="Role"
                        value={this.state.role}
                        onChange={(e) => {this.setState({role : e.target.value})}}
                        inputProps={{style: {fontSize: 20}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                      ></TextField>
                    </Form.Row>
                    <Form.Row className="anagraficaform">
                      <TextField 
                        style={{width:"25%"}}
                          label="Quota"
                          value={this.state.quota}
                          inputProps={{style: {fontSize: 20}}} // font size of input text
                          InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                        onChange={(e) => {this.setState({quota : e.target.value})}}
                      ></TextField>

                      <TextField 
                        style={{width:"25%"}}
                        label="Tax Id"
                        value={this.state.taxId}
                        inputProps={{style: {fontSize: 20}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                        onChange={(e) => {this.setState({taxId : e.target.value})}}
                      ></TextField>
                      
                      <TextField 
                        style={{width:"25%"}}
                        label="Voting Right"
                        value={this.state.votingRight}
                        inputProps={{style: {fontSize: 20}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 20}}} // font size of input label
                        onChange={(e) => {this.setState({votingRight : e.target.value})}}
                      ></TextField>
    
                    </Form.Row>
                  </Form>
                </Grid>
              </div>

              <Form>
                <div className="button-container">
                <Button 
                  onClick={(e) => {
                    this.setState({
                      showDialogConfirm : false,
                      showDialogConfirmed : false,
                      addrMember: "",
                      name: "",
                      role: "",
                      quota: "",
                      taxId: "",
                      votingRight : ""
                    });
                    this.addMember();

                  }}
                  disabled={(this.checkAddMember() == true)}
                > ADD MEMBER
                </Button>
                </div>
              </Form>
              
            </div>
          </Dialog>
        </React.Fragment>
      )
    }
  }

  export default BtnCellRendererAddMember;

