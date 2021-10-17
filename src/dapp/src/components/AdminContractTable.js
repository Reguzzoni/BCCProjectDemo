import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import AssociationContract from '../AssociationContract.js';
import BtnCellRendererViewContract from './BtnCellRendererViewContract.js';
import BtnCellRendererAddMember from './BtnCellRendererAddMember.js';
import NetworkContractDetails from '../pages/NetworkContractDetails.jsx';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Dialog from '@material-ui/core/Dialog';

class AdminContractTable extends React.Component {

  constructor (props){
    super(props);
    
    this.state = {
      dataDetailsJSON : "",
      rows: "",
      showModal: false,
      selectedAssociationId : ""
    };

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

  clickOnView(associationId) {
    this.setState({ 
      showModal: true,
      selectedAssociationId:associationId
    });
  }

  async reloadJSONDataFile() {
    this.contractAssociation.getAssociationData().then(data => {
      console.log("data : " , data);
      this.setState({rows:data});
    });
  }

    render() {
      var thisVar = this;

      const gridOptions = {
        columnDefs: [
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
              headerName: 'Contract', 
              field: 'Contract',
              cellRenderer: "btnCellRendererViewContract",
              cellRendererParams(params) {
                return {
                  clickFuntion : thisVar.clickOnView,
                  associationId : params.data.AssociationId
                }
              },
            },
            { 
              headerName: 'Add member', 
              field: 'Add member',
              cellRenderer: "btnCellRendererAddMember",
              cellRendererParams(params) {
                return {
                  associationId : params.data.AssociationId,
                  Network : params.data.Network,
                  ID : params.data.ID,
                }
              },
            },
            { 
              headerName: 'AssociationId', 
              field: 'AssociationId',
              hide: true
            },
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
          btnCellRendererViewContract: BtnCellRendererViewContract,
          btnCellRendererAddMember : BtnCellRendererAddMember
        }
        // other grid options ...
    }

            return <div className="trxHistory">
                <h3 style={{textAlignVertical: "center",textAlign: "center",}}>Search Available Contracts</h3>
                  <div className="ag-theme-alpine" style={{height: 250}}>
                    <AgGridReact 
                      gridOptions={gridOptions}
                      rowData={this.state.rows}>
                    </AgGridReact>
                    
                    <Dialog  
                      fullWidth
                      maxWidth="900px"
                      open={this.state.showModal}
                      onClose={this.handleCloseModal}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <NetworkContractDetails 
                          associationId={this.state.selectedAssociationId}
                          handleCloseModal={this.handleCloseModal}>
                      </NetworkContractDetails>
                    </Dialog>
                </div>
              </div>
            ;
    }
  }
  
export default AdminContractTable;