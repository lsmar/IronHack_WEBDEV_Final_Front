import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class DropdownHabilidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        { text: "Linguagens", value: "linguage" },
        { text: "Matemática", value: "math" },
        { text: "Ciências da natureza", value: "natureza" },
        { text: "Ciências humanas", value: "humanas" },
      ],
      value: []
    };
  }
  handleChange = (e, { value }) => {
    this.setState({ value });
    
  };
  render() {
    const options = this.state.values.map((el, idx) => {
      el.key = idx;
      return el;
    });
    return (
      <Dropdown
      className='components-dropDown'
        placeholder="Habilidades"
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
