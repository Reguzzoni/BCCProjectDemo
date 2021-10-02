import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import JSONContract from "../JSONContract.js";
import { Grid } from "@material-ui/core";
import "./dataDetails.scss";

export default class DataDetails extends Component {  

  constructor (props){
    super(props);
    
    this.state = {
      dataDetailsJSON : "",
      businessName : "",
      businessTaxId : "",
      country : "",
      address : "",
      businessCode : "",
      emailAddress : "",
      businessActivity : ""
    };

    this.contractJSON = new JSONContract();
    this.reloadJSONDataFile();

    this.reloadJSONDataFile = this.reloadJSONDataFile.bind(this);
    this.saveJSONDataFile = this.saveJSONDataFile.bind(this);
  }

  async reloadJSONDataFile() {
    var getJsonString = await this.contractJSON.getJsonData();
    console.log("getJsonString : ", getJsonString)
    try {
      var jsonObj = JSON.parse(getJsonString)
      console.log("jsonObj : ", jsonObj)

      this.setState({
        dataDetailsJSON : jsonObj,
        businessName : jsonObj.businessName,
        businessTaxId : jsonObj.businessTaxId,
        country : jsonObj.country,
        address : jsonObj.address,
        businessCode : jsonObj.businessCode,
        emailAddress : jsonObj.emailAddress,
        businessActivity : jsonObj.businessActivity
      });
    } catch (error) {
      console.log("error into JSON conversion : ", jsonObj)
    }
  }
  
  async saveJSONDataFile() {
    
    var jsonObj = {
      businessName : this.state.businessName,
      businessTaxId : this.state.businessTaxId,
      country : this.state.country,
      address : this.state.address,
      businessCode : this.state.businessCode,
      emailAddress : this.state.emailAddress,
      businessActivity : this.state.businessActivity
    }

    this.setState({dataDetailsJSON:jsonObj});
    this.contractJSON.setJsonData(jsonObj);
  }

  render() {
    return (
      <React.Fragment>
        <Grid container alignItems="stretch" 
        spacing={20} 
        className="grid"
        >
        <Form className="form">
          <Form.Group>
            <Form.Row>
              <Form.Label column="lg" lg={10}>
                Business Name
              </Form.Label>
              <Col>
                <Form.Control 
                  type="text" placeholder="Business Name: Example"
                   value={this.state.businessName} 
                   onChange={e => this.setState({ businessName: e.target.value })}/>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column="sm" lg={10}>
                Country
              </Form.Label>
              <Col>
              <Form.Control 
                  type="text" placeholder="Country Name: Example"
                   value={this.state.country} 
                   onChange={e => this.setState({ country: e.target.value })}/>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column="sm" lg={10}>
                Business Code
              </Form.Label>
              <Col>
              <Form.Control 
                  type="text" placeholder="Business Code: Example"
                   value={this.state.businessCode} 
                   onChange={e => this.setState({ businessCode: e.target.value })}/>
              </Col>
            </Form.Row>
            
          </Form.Group>
        </Form>
        <Form className="form">
          <Form.Group>       
            <Form.Row>
              <Form.Label column lg={10}>
                Business Tax ID
              </Form.Label>
              <Col>
              <Form.Control 
                  type="text" placeholder="Business Tax ID: Example"
                   value={this.state.businessTaxId} 
                   onChange={e => this.setState({ businessTaxId: e.target.value })}/>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column="sm" lg={10}>
                Address
              </Form.Label>
              <Col>
              <Form.Control 
                  type="text" placeholder="Address Name: Example"
                   value={this.state.address} 
                   onChange={e => this.setState({ address: e.target.value })}/>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column="sm" lg={10}>
                E-mail address
              </Form.Label>
              <Col>
              <Form.Control 
                  type="text" placeholder="email address: Example"
                   value={this.state.emailAddress} 
                   onChange={e => this.setState({ emailAddress: e.target.value })}/>
              </Col>
            </Form.Row>
            <br />
          </Form.Group>
        </Form>
        </Grid>
        <Form className="formAll">
          <Form.Group>
            <Form.Row>
              <Form.Label column="lg" lg={12}>
                Business Activity
              </Form.Label>
              <Col>          
                <textarea 
                  multiline
                  rows={10}
                  variant="outlined"
                  style={{
                    width:"100%"
                  }}
                  onChange={e => this.setState({ businessActivity: e.target.value })}
                  value={this.state.businessActivity}
                ></textarea>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>

        <Button 
        block size="lg" 
        onClick={this.saveJSONDataFile}
        type="submit">
          Save
        </Button>
      </React.Fragment>
    );
  }
}
