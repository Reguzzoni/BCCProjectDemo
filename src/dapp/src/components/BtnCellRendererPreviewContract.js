import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class BtnCellRendererPreviewContract extends Component {
    constructor(props) {
      super(props);
      this.text = this.props.text;
      this.clickFunction = this.props.clickFuntion;
      this.associationId = this.props.associationId;

      console.log("BtnCellRendererPreviewContract this.associationId ", this.associationId)

      this.btnClickedHandler = this.btnClickedHandler.bind(this);

    }
    btnClickedHandler() {
      console.log(console.log("clicked correctly with id ", this.associationId));
      this.clickFunction(this.associationId);
    }

    render() {
      return (
        <div>
          <Button onClick={this.btnClickedHandler}
          style={{
            justifyContent: 'center',
            alignItems: 'center',}}>
            PreView
          </Button>
        </div>
      )
    }
  }

  export default BtnCellRendererPreviewContract;

