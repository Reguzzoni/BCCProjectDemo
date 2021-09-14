import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class BtnCellRendererSend extends Component {
    constructor(props) {
      super(props);
      this.text = this.props.text;
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }
    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }
    render() {
      return (
        <>
          <Button onClick={this.btnClickedHandler}>
            Send
          </Button>
        </>
      )
    }
  }

  export default BtnCellRendererSend;

