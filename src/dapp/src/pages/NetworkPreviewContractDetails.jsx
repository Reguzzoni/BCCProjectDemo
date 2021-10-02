import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AssociationContract from "../AssociationContract.js";
import { Grid } from "@material-ui/core";
import "./networkContractDetails.scss";

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
      durataContratto : ""
    };

    this.associationContract = new AssociationContract();
    this.reloadJSONDataFile();

    this.reloadJSONDataFile = this.reloadJSONDataFile.bind(this);
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

  render() {
    return (
      <React.Fragment>
        <div className="h3Container">
        <h3 className="h3NetworkContractDetails"> 
          Network Contract Details
        </h3>
          <div style={{heigth:"100%"}}>
            <Grid container alignItems="stretch" 
            spacing={20} 
            className="grid"
            >
            <Form className="form">
              <Form.Group>
                <Form.Row>
                  <Form.Label column="lg" lg={12}>
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
                    Admin role
                  </Form.Label>
                  <Col>
                  <Form.Control 
                      type="text"
                      disabled={true}
                      value={this.state.adminRole}/>
                  </Col>
                </Form.Row>
                <br /> 
                <Form.Row>
                  <Form.Label column="sm" lg={10}>
                    Durata contratto
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
            </Grid>
          </div>
          <Button style={{
            width:"100%"}}
            onClick={this.props.handleCloseModal}>
              Back
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
