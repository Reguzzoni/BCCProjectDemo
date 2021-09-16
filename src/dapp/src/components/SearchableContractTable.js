import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import AssociationContract from '../AssociationContract.js';
import BtnCellRendererPreviewContract from './BtnCellRendererPreviewContract.js';
import BtnCellRendererSend from './BtnCellRendererSend.js';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class SearchableContractTable extends React.Component {

  constructor (props){
    super(props);
    
    this.state = {
      dataDetailsJSON : "",
      rows: ""
    };

    this.contractAssociation = new AssociationContract();
    this.reloadJSONDataFile = this.reloadJSONDataFile.bind(this);

    this.reloadJSONDataFile();
  }

  async reloadJSONDataFile() {
    this.contractAssociation.getAssociationData().then(data => {
      console.log("data : " , data);
      this.setState({rows:data});
    });
  }

    render() {

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
              cellRenderer: "btnCellRendererPreviewContract"
            },
            { 
              headerName: 'Subscribe request', 
              field: 'Subscribe request',
              cellRenderer: "btnCellRendererSend"
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
          btnCellRendererPreviewContract: BtnCellRendererPreviewContract,
          btnCellRendererSend : BtnCellRendererSend
        }
        // other grid options ...
    }

            return <div>
                <h3 style={{textAlignVertical: "center",textAlign: "center",}}>Search Available Contracts</h3>
                <div className="ag-theme-alpine" style={{height: 250}}>
                  <AgGridReact 
                    gridOptions={gridOptions}
                    rowData={this.state.rows}>
                  </AgGridReact>
              </div>
              </div>
            ;
    }
  }
  
export default SearchableContractTable;