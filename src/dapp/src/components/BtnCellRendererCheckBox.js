import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class BtnCellRendererCheckBox extends Component {
    constructor(props) {
      super(props);
      this.text = this.props.text;
      this.btnClickedHandler = this.btnClickedHandler.bind(this);

      this.setState({checked : false})
    }
    
    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }

    render() {
      return (
        <>
          <Checkbox
            //checked={this.state.checked}
            //onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </>
      )
    }
  }

  export default BtnCellRendererCheckBox;

