import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ReactModal from 'react-modal';
import Pdf from './Pdf.js'

class BtnCellRendererPreviewContract extends Component {
    constructor(props) {
      super(props);
      this.text = this.props.text;
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.state = {
        showModal : false
      }
    }
    btnClickedHandler() {
     this.setState(
       {showModal : true}
       )
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }

    render() {
      return (
        <div>
          <Button onClick={this.btnClickedHandler}
          >
            PreView
          </Button>
          
          <ReactModal 
            isOpen={this.state.showModal}
            >
            <div style={{width:"100%"}} >
              <Pdf></Pdf>

              <Button style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width:"100%"}}
                      onClick={this.handleCloseModal}>Back</Button>
            </div>
          </ReactModal>
        </div>
      )
    }
  }

  export default BtnCellRendererPreviewContract;

