import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import AssociationContract from '../AssociationContract.js';
import BtnCellRendererPreviewContract from './BtnCellRendererPreviewContract.js';
import BtnCellRendererSend from './BtnCellRendererSend.js';
import NetworkPreviewContractDetails from '../pages/NetworkPreviewContractDetails.jsx';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ReactModal from 'react-modal';

class SearchableContractTable extends React.Component {

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
    console.log("click PreView ", associationId);
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
              cellRenderer: "btnCellRendererPreviewContract",
              cellRendererParams(params) {
                return {
                  clickFuntion : thisVar.clickOnView,
                  associationId : params.data.AssociationId
                }
              },
            },
            { 
              headerName: 'Subscribe request', 
              field: 'Subscribe request',
              cellRenderer: "btnCellRendererSend"
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
          btnCellRendererPreviewContract: BtnCellRendererPreviewContract,
          btnCellRendererSend : BtnCellRendererSend
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
                    <ReactModal 
                      isOpen={this.state.showModal}
                      >
                      <NetworkPreviewContractDetails 
                        associationId={this.state.selectedAssociationId}
                        handleCloseModal={this.handleCloseModal}>
                      </NetworkPreviewContractDetails>
                        
                    </ReactModal>
                </div>
              </div>
            ;
    }
  }
  
export default SearchableContractTable;