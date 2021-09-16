import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import AssociationContract from '../AssociationContract.js';
import BtnCellRendererViewContract from './BtnCellRendererViewContract.js';
import BtnCellRendererCheckBox from './BtnCellRendererCheckBox.js';
import NetworkContractDetails from '../pages/NetworkContractDetails.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ReactModal from 'react-modal';
import Dialog from '@material-ui/core/Dialog';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class MyContracTable extends React.Component {

  constructor (props){
    super(props);
    
    this.state = {
      dataDetailsJSON : "",
      rows: "",
      showModal: false,
      selectedAssociationId: ""
    };

    //const [modalIsOpen, setIsOpen] = React.useState(false);

    this.contractAssociation = new AssociationContract();
    this.reloadJSONDataFile = this.reloadJSONDataFile.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.clickOnView = this.clickOnView.bind(this);

    this.reloadJSONDataFile();
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  async reloadJSONDataFile() {
    this.contractAssociation.getMyAssociationData().then(data => {
      console.log("data : " , data);
      this.setState({
        rows:data
      });
    });
  }

  clickOnView(associationId) {
    console.log("click View ", associationId);
    this.setState({ 
      showModal: true,
      selectedAssociationId:associationId
    });
  }

    render() {
      var thisVar = this;
      const gridOptions = {
        columnDefs: [
            { 
              headerName: 'Select',
              field: 'Select',
              cellRenderer:"btnCellRendererCheckBox"
            },
            { 
              headerName: 'Network', 
              field: 'Network'
            },
            { 
              headerName: 'ID', 
              field: 'ID'
            },
            { 
              headerName: 'Status', 
              field: 'Status'
            },
            { 
              headerName: 'Role', 
              field: 'Role'
            },
            { 
              headerName: 'AssociationId', 
              field: 'AssociationId'
            },
            { 
              headerName: 'Detail & Contract', 
              field: 'Detail & Contract',
              cellRenderer: "btnCellRendererViewContract",
              cellRendererParams(params) {
                return {
                  clickFuntion : thisVar.clickOnView,
                  associationId : params.data.AssociationId
                }
              },
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
        
        frameworkComponents : {
          btnCellRendererViewContract : BtnCellRendererViewContract,
          btnCellRendererCheckBox : BtnCellRendererCheckBox
        }
        // other grid options ...
    }

            return <div>
                <h3 style={{textAlignVertical: "center",textAlign: "center",}}>My Contracts</h3>
                <div className="ag-theme-alpine" style={{height: 250}}>
                  <AgGridReact 
                      gridOptions={gridOptions}
                      rowData={this.state.rows}>
                  </AgGridReact>
                  <ReactModal 
                    isOpen={this.state.showModal}
                    >
                    <NetworkContractDetails associationId={this.state.selectedAssociationId}></NetworkContractDetails>
                    <div style={{width:"100%"}} >

                    <Button style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width:"100%"}}
                      onClick={this.handleCloseModal}>Close</Button>
                    </div>
                  </ReactModal>
              </div>
              </div>
            ;
    }
  }
  
export default MyContracTable;