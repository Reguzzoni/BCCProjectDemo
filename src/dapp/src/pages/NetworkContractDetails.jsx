import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AssociationContract from "../AssociationContract.js";
import { Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

export default class NetworkContractDetails extends Component {  

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
      associationId : this.props.associationId
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
        associationId : jsonObj.associationId
      });
    } catch (error) {
      console.log("error into JSON conversion : ", jsonObj)
    }
  }

  render() {
    return (
      <div >
      <h3 style={{
        height: "50px",
        backgroundColor: "#cf3d2a", 
        textAlignVertical: "center",
        textAlign: "center",
        background: "#cf3d2a",
        color: "white",
        verticalAlign:"middle",
        lineHeight: "50px"
      }}> Network Contract Details</h3>
      <div style={{display:"flex"}}>
        <Grid container alignItems="stretch" 
        spacing={20} 
        style={{marginLeft:20, marginRight:20, 
        width : "100%"}}
        >
        <Form style={{ marginRight:"2.5%", 
        width : "45%"}}>
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
            <Form.Row>
              <Form.Label column="sm" lg={12}>
                Your Role
              </Form.Label>
              <Col>
              <Form.Control 
                  disabled={true}
                  type="text"
                   value={this.state.yourRole}/>
              </Col>
            </Form.Row>           
            <br />
          </Form.Group>
        </Form>
        <Form style={{ marginLeft:"2.5%", 
        width : "45%"}}>
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
          </Form.Group>
        </Form>
        <Form style={{ marginLeft:"2.5%", 
          width : "100%"}}>
        <Form.Group>
          <Form.Row style={{
                            display: "flex",
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            }}>
              <Button className="marginedButton"
                        block size="lg" style={{
                            marginRight: "1%",
                            marginLeft: "1%",}}>Check Gantt
              </Button>  
              <Button className="marginedButton"
                        block size="lg" style={{
                            marginRight: "1%",
                            marginLeft: "1%",}}>Doc Archive
              </Button>  
              <Button className="marginedButton"
                        block size="lg" style={{
                            marginRight: "1%",
                            marginLeft: "1%",}}>Network finance
              </Button>  
            </Form.Row>
          </Form.Group>
          </Form> 
        </Grid>
      </div>
      <Form style={{marginLeft:20, marginRight:20,
       }}>
          <Form.Group>
            <Form.Row>
              <Form.Label column="lg" lg={12}>
                Networkd Contract Details
              </Form.Label>
              <Col> 
                <textarea 
                  multiline
                  rows={4}
                  variant="outlined"
                  style={{width:"100%"}}
                  value={this.state.detail}
                  disabled={true}
                ></textarea>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
