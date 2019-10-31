import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class DropdownHabilidades extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      values: props.values,
      value: []
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e, { value }) => {
    this.setState({ value },()=>
    this.props.onChange(this.state.value)
    );
    
  };
  componentDidUpdate=(e)=>{
  
  }
  render() {
    const options = this.state.values.map((el, idx) => {
      el.key = idx;
      return el;
    });

    return (
      <Dropdown
      className='components-dropDown'
        placeholder={this.props.placeholder}
        fluid
        multiple
        selection
        options={options}
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

export default DropdownHabilidades;
