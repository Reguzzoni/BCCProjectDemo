import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import AssociationContract from "../AssociationContract.js";
import { Grid } from "@material-ui/core";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import "./networkContractDetails.scss";
import Gantt from '../resource/Gantt.png'; // Tell webpack this JS file uses this image
import pdfIcon from '../resource/pdfIcon.png'; // Tell webpack this JS file uses this image

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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
      associationId : this.props.associationId,
      durataContratto : "",
      showModalGantt : false,
      showModalDocArchived: false,
      showModalNetworkFinance: false,
      memberRowData: ""
    };

    this.associationContract = new AssociationContract();
    this.reloadJSONDataFile();

    this.reloadJSONDataFile = this.reloadJSONDataFile.bind(this);
    this.openModalGantt = this.openModalGantt.bind(this);
    this.closeModalGantt = this.closeModalGantt.bind(this);
    this.openModalDocArchived = this.openModalDocArchived.bind(this);
    this.closeModalDocArchived = this.closeModalDocArchived.bind(this);
    this.openModalNetworkFinance = this.openModalNetworkFinance.bind(this);
    this.closeModalNetworkFinance = this.closeModalNetworkFinance.bind(this);
  }

  openModalGantt() {
    this.setState({ 
      showModalGantt: true
    });
  }

  closeModalGantt() {
    this.setState({ 
      showModalGantt: false
    });
  }

  openModalDocArchived() {
    this.setState({ 
      showModalDocArchived: true
    });
  }

  closeModalDocArchived() {
    this.setState({ 
      showModalDocArchived: false
    });
  }

  openModalNetworkFinance() {
    this.setState({ 
      showModalNetworkFinance: true
    });
  }

  closeModalNetworkFinance() {
    this.setState({ 
      showModalNetworkFinance: false
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

    var getMemberJsonString = await this.associationContract.getAssociationMembersDataByAssociationId(this.state.associationId);
    console.log("getMemberJsonString :", getMemberJsonString)
    this.setState({
      memberRowData: getMemberJsonString
    })
  }

  render() {
    
    var listPdf = [
      'Programma di Rete(diritti e obblighi + modalità di realizzazione)',
      'Contratto di rete',
      'Modalità di Adesione (istruzioni)',
      'Regolamento',
      'Obiettivi Strategici di Innovazione',
      'Verbali Organo di Controllo'
    ];

    const gridOptions = {
      columnDefs: [
          { 
            headerName: 'Operation',
            field: 'Operation'
          },
          { 
            headerName: 'ID', 
            field: 'ID'
          },
          { 
            headerName: 'Date', 
            field: 'Date'
          },
          { 
            headerName: 'Counterpart', 
            field: 'Counterpart'
          },
          { 
            headerName: 'Amount', 
            field: 'Amount'
          }
      ],
  
      // a default column definition with properties that get applied to every column
      defaultColDef: {
          flex:1,
          // make every column editable
          editable: false,
          // make every column use 'text' filter by default
          //filter: 'agTextColumnFilter',
          sortable:true,
          filter:true
      },

      // if we had column groups, we could provide default group items here
      defaultColGroupDef: {},
  
      // define a column type (you can define as many as you like)
      columnTypes: {
          nonEditableColumn: { editable: false },
      },
      
      // other grid options ...
  }

  const gridOptionsMembers = {
    columnDefs: [
        { 
          headerName: 'Member Name',
          field: 'MemberName'
        },
        { 
          headerName: 'Tax ID', 
          field: 'TaxID'
        },
        { 
          headerName: 'Status', 
          field: 'Status'
        },
        { 
          headerName: 'Voting Rights', 
          field: 'VotingRights'
        },
        { 
          headerName: 'Quota', 
          field: 'Quota'
        }
    ],

    // a default column definition with properties that get applied to every column
    defaultColDef: {
        flex:1,
        // make every column editable
        editable: false,
        // make every column use 'text' filter by default
        //filter: 'agTextColumnFilter',
        sortable:true,
        filter:true
    },

    // if we had column groups, we could provide default group items here
    defaultColGroupDef: {},

    // define a column type (you can define as many as you like)
    columnTypes: {
        nonEditableColumn: { editable: false },
    },
    
    // other grid options ...
}

    const rows = [
      {
        Operation:"M&A Registration",
        ID:1234,
        Date: "XX/XX/XXXX",
        Counterpart:"Notary",
        Amount:"-1,500 €"
      },{
        Operation:"Quota Registration",
        ID:4321,
        Date: "XX/XX/XXXX",
        Counterpart:"Company A",
        Amount:"+10,000 €"
      },{
        Operation:"Taxes",
        ID:1111,
        Date: "XX/XX/XXXX",
        Counterpart:"Notary",
        Amount:"-400 €"
      },{
        Operation:"Quota&A Registration",
        ID:1212,
        Date: "XX/XX/XXXX",
        Counterpart:"Company B",
        Amount:"+10,000 €"
      },
    ];

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
                            onClick={this.openModalGantt}
                            size="lg" style={{
                                marginRight: "1%",
                                marginLeft: "1%",}}>Check Gantt
                  </Button>  
                  <Button className="marginedButton"
                            block 
                            onClick={this.openModalDocArchived}
                            size="lg" style={{
                                marginRight: "1%",
                                marginLeft: "1%",}}>Doc Archive
                  </Button>  
                  <Button className="marginedButton"
                            block 
                            onClick={this.openModalNetworkFinance}
                            size="lg" style={{
                                marginRight: "1%",
                                marginLeft: "1%",}}>Network finance
                  </Button>  
                </Form.Row>
              </Form.Group>
              </Form> 
            </Grid>
          </div>
        <Form className="formAll">
            <Form.Group>
              <Form.Row>
                <Form.Label column="lg" lg={12}>
                  Networkd Contract Details
                </Form.Label>
                <Col> 
                <div className="ag-theme-alpine" style={{width:"100%", height: '260px', padding: "16px 24px"}}>
                <AgGridReact
                    rowData={this.state.memberRowData}
                    gridOptions={gridOptionsMembers}
                  >
                </AgGridReact>
                </div>
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
          <Button style={{
            width:"100%"}}
            onClick={this.props.handleCloseModal}>
              Back
          </Button>
        </div>

        <Dialog
          open={this.state.showModalGantt}
          onClose={this.closeModalGantt}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
        <h3 className="h3NetworkContractDetails"> 
          GANTT
        </h3>
        </DialogTitle>
          <img style={{
              width:"100%",
              height:"100%"}}
            src={Gantt} alt="Gantt" /> 
            <Button style={{
            width:"100%"}}
            onClick={this.closeModalGantt}>
              Back
          </Button> 
        </Dialog>

        <Dialog 
          onClose={this.closeModalDocArchived} 
          open={this.state.showModalDocArchived}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle>
            <h3 className="h3NetworkContractDetails"> 
              DOC ARCHIVED
            </h3>
          </DialogTitle>
          <List sx={{ pt: 0 }}>
            {listPdf.map((email) => (
              <ListItem >
                <ListItemAvatar>
                <img src={pdfIcon} alt="pdfIcon" /> 
                  {email}
                </ListItemAvatar>
                <ListItemText primary={this.email} />
              </ListItem>
            ))}
          </List>
          <Button style={{
            width:"100%"}}
            onClick={this.closeModalDocArchived}>
              Back
          </Button> 
        </Dialog>

        <Dialog 
          fullWidth
          maxWidth="900px"
          onClose={this.closeModalNetworkFinance} 
          open={this.state.showModalNetworkFinance}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle>
            <h3 className="h3NetworkContractDetails"> 
              NETWORK FINANCE
            </h3>
          </DialogTitle>
          <div className="ag-theme-alpine" style={{width:"100%", height: '260px', padding: "16px 24px"}}>
          <AgGridReact
            rowData={rows}
            gridOptions={gridOptions}
            >
          </AgGridReact>
          </div>
          <Button style={{
            width:"100%"}}
            onClick={this.closeModalNetworkFinance}>
              Back
          </Button> 
        </Dialog>

      </React.Fragment>
    );
  }
}
