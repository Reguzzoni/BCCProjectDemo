import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


class BtnCellRendererSend extends React.Component {
    constructor(props) {
      super(props);
      this.text = this.props.text;
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
      this.associationId = this.props.associationId;
      this.Network = this.props.Network;
      this.ID = this.props.ID;


      this.state = {
        showDialogConfirm : false,
        showDialogConfirmed : false
      };
  
    }
    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }
    render() {
      return (
        <>
          <Button 
            onClick={(e) => {this.setState({showDialogConfirm :true})}}
          > Send
          </Button>

          <Dialog 
          open={this.state.showDialogConfirm}
          onClose={(e) => { this.setState({showDialogConfirm :false}) }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="dialogSureToConfirm">
          <h3 className="h3NetworkContractDetails"> 
            APPROVE BUSINESS NETWORK
          </h3>
          <h4 className="h4NetworkContractDetails">
            Are you sure to approve {this.Network} ({this.ID})?</h4>
          </DialogTitle>
          <div className = "approveButton">
            <Button style={{
              width:"50%",
              height: "80%",
              marginBottom:"40px"}}
              onClick={(e) => { this.setState({showDialogConfirm :false, showDialogConfirmed: true}) }}>
                APPROVE
            </Button>
          </div>
          <Button style={{
            width:"100%"}}
            onClick={(e) => { this.setState({showDialogConfirm :false}) }}>
              Back
          </Button> 
        </Dialog>


        <Dialog 
          id = "DialogConfirmed"
          open={this.state.showDialogConfirmed}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
          <h3 className="h3NetworkContractDetails"> 
            APPROVED BUSINESS NETWORK
          </h3>
          </DialogTitle>
          <h4 className="h4NetworkContractDetails">
            Approved sent with success!
            You will be contacted as soon as possible by {this.Network}!
          </h4>
          <Button style={{
            width:"100%"}}
            onClick={(e) => { 
              this.setState({showDialogConfirmed :false})}}>
              Close
          </Button> 
        </Dialog>

        </>
      )
    }
  }

  export default BtnCellRendererSend;

