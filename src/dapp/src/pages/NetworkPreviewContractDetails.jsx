import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AssociationContract from "../AssociationContract.js";
import { Grid } from "@material-ui/core";
import "./networkContractDetails.scss";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

export default class NetworkPreviewContractDetails extends Component {  

  constructor (props){
    super(props);
    
    this.state = {
      dataDetailsJSON : "",
      businessNetworkName : "",
      businessNetworkId : "",
      taxId : "",
      address : "",
      businessCode : "",
      adminRole : "",
      yourRole : "",
      details : "",
      associationId : this.props.associationId,
      durataContratto : "",
      readTermOfService: false,
      showDialogConfirm: false
    };

    this.associationContract = new AssociationContract();
    this.reloadJSONDataFile();

    this.reloadJSONDataFile = this.reloadJSONDataFile.bind(this);
  }

  handleChangeCheckBox = () => {
    this.setState({
      readTermOfService: !this.state.readTermOfService
    });
  }

  async reloadJSONDataFile() {
    var getJsonString = await this.associationContract.getMyAssociationDetailsDataById(this.state.associationId);
    console.log("getJsonString : ", getJsonString)
    try {
      var jsonObj = getJsonString
      console.log("jsonObj : ", jsonObj)

      this.setState({
        businessNetworkName : jsonObj.businessNetworkName,
        businessNetworkId : jsonObj.businessNetworkId,
        taxId : jsonObj.taxId,
        address : jsonObj.address,
        businessCode : jsonObj.businessCode,
        adminRole : jsonObj.adminRole,
        yourRole : jsonObj.yourRole,
        detail : jsonObj.detail,
        associationId : jsonObj.associationId,
        durataContratto: jsonObj.durataContratto
      });
    } catch (error) {
      console.log("error into JSON conversion : ", jsonObj)
    }
  }
  
  openSureToAgree = (e) => {
    this.setState({showDialogConfirm :true})
  }

  render() {
    return (
      <React.Fragment>
        <div className="h3Container" style = {{
          padding: "10px 24px"}}>
        <h3 className="h3NetworkContractDetails"> 
          Preview Network Contract Details
        </h3>
          <div style={{heigth:"100%"}}>
            <Grid container alignItems="stretch" 
            spacing={20} 
            className="grid"
            >
            <Form className="form">
              <Form.Group>
                <Form.Row>
                  <Form.Label>
                    Business Network Name
                  </Form.Label>
                  <Col>
                    <Form.Control
                      disabled={true} 
                      type="text"
                      lg={12}
                      value={this.state.businessNetworkName}/>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={10}>
                    Tax Id
                  </Form.Label>
                  <Col>
                  <Form.Control 
                      disabled={true}
                      type="text"
                      value={this.state.taxId}/>
                  </Col>
                </Form.Row>
                <br />
              <Form.Row>
                  <Form.Label column="sm" lg={12}>
                    Business Code
                  </Form.Label>
                  <Col>
                  <Form.Control 
                      disabled={true}
                      type="text"
                      value={this.state.businessCode}/>
                  </Col>
                </Form.Row>           
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={10}>
                    Contract Expiration
                  </Form.Label>
                  <Col>
                  <Form.Control 
                      type="text"
                      disabled={true}
                      value={this.state.durataContratto}/>
                  </Col>
                </Form.Row>
                <br />  
              </Form.Group>
            </Form>
            <Form className="form">
              <Form.Group>
                <Form.Row>
                  <Form.Label column lg={10}>
                    Business Network ID
                  </Form.Label>
                  <Col>
                  <Form.Control 
                      disabled={true}
                      type="text" 
                      value={this.state.businessNetworkId}/>
                  </Col>
                </Form.Row> 
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={10}>
                    Address
                  </Form.Label>
                  <Col>
                  <Form.Control 
                      disabled={true}
                      type="text"
                      value={this.state.address}/>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={10}>
                    Admin Name
                  </Form.Label>
                  <Col>
                  <Form.Control 
                      type="text"
                      disabled={true}
                      value={this.state.adminRole}/>
                  </Col>
                </Form.Row>
                <br />   
              </Form.Group>
            </Form>
            <FormControlLabel style={{
              marginRight: "1%",
              marginLeft: "1%" 
            }}
            label={<span style={{ fontSize: '2rem' }}>Check read term of service</span>}
            control={
              <Checkbox
                className = "checkBoxReadTerm"
                onChange={this.handleChangeCheckBox}
                color="primary"
                inputProps={{ 'aria-label': 'Checkbox demo' } }
                sx={{ '& .MuiSvgIcon-root': { fontSize: 50 } }}
              > 
              </Checkbox>
            }
          />
            <Form style={{
              width : "100%"}}>
            <Form.Group>
              <Form.Row style={{
                                display: "flex",
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                }}>
                  <Button className="marginedButton"
                            block 
                            size="lg" style={{
                                marginRight: "1%",
                                marginLeft: "1%",}}
                            onClick={() => window.open("https://www.dropbox.com/s/yrx6h9lf3czqm6j/CONTRATTO_RETE_ENG.pdf")}>
                    Download
                  </Button>  
                  <Button className="marginedButton"
                    block 
                    onClick={this.openSureToAgree}
                    size="lg" style={{
                      marginRight: "1%",
                      marginLeft: "1%",}}
                      disabled={!this.state.readTermOfService}>
                      Approve
                  </Button>
                </Form.Row>
              </Form.Group>
              </Form>
            </Grid>
          </div>
          

          <div className="botButtonEnd">
            <Button style={{
              width:"100%"}}
              onClick={this.props.handleCloseModal}>
                Back
            </Button>
          </div>
        </div>

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
            Are you sure to approve {this.state.businessNetworkName} ({this.state.businessNetworkId})?</h4>
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
            You will be contacted as soon as possible by {this.state.businessNetworkName}!
          </h4>
          <Button style={{
            width:"100%"}}
            onClick={(e) => { 
              this.setState({showDialogConfirmed :false}) 
              this.props.handleCloseModal() }}>
              Close
          </Button> 
        </Dialog>
      </React.Fragment>
    );
  }
}
