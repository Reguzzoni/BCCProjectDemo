import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class BtnCellRendererViewContract extends Component {
    constructor(props) {
      super(props);
      this.text = this.props.text;
      this.clickFunction = this.props.clickFuntion;
      this.associationId = this.props.associationId;

      console.log("this.associationId ", this.associationId );

      this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }

    btnClickedHandler() {
     console.log(console.log("clicked correctly with id ", this.associationId));
     this.clickFunction(this.associationId);
    }

    render() {
      return (
        <>
          <Button onClick={this.btnClickedHandler}>
            View
          </Button>
        </>
      )
    }
  }

  export default BtnCellRendererViewContract;

