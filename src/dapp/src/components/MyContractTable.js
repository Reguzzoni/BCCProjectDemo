import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import AssociationContract from '../AssociationContract.js';
import BtnCellRendererPreviewContract from './BtnCellRendererPreviewContract.js';
import BtnCellRendererCheckBox from './BtnCellRendererCheckBox.js';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class MyContracTable extends React.Component {

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
    this.contractAssociation.getMyAssociationData().then(data => {
      console.log("data : " , data);
      this.setState({rows:data});
    });
  }

    render() {
            return <div>
                <h3 style={{textAlignVertical: "center",textAlign: "center",}}>My Contracts</h3>
                <div className="ag-theme-alpine" style={{height: 250}}>
                  <AgGridReact 
                    frameworkComponents={{
                      btnCellRendererPreviewContract: BtnCellRendererPreviewContract,
                      btnCellRendererCheckBox : BtnCellRendererCheckBox
                    }}
                      rowData={this.state.rows}>
                      <AgGridColumn flex={1} field="Select" cellRenderer="btnCellRendererCheckBox" ></AgGridColumn>
                      <AgGridColumn flex={1} field="Network" ></AgGridColumn>
                      <AgGridColumn flex={1} field="ID"></AgGridColumn>
                      <AgGridColumn flex={1} field="Status"></AgGridColumn>
                      <AgGridColumn flex={1} field="Role"></AgGridColumn>
                      <AgGridColumn flex={1} field="Detail & Contract" cellRenderer="btnCellRendererPreviewContract"></AgGridColumn>
                  </AgGridReact>
              </div>
              </div>
            ;
    }
  }
  
export default MyContracTable;