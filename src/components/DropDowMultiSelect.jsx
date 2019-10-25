import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
class DropdownHabilidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        { text: "Novo ensino médio 1", value: "1" },
        { text: "Novo ensino médio 2", value: "2" },
        { text: "Novo ensino médio 3", value: "3" },
        { text: "Novo ensino médio 4", value: "4" },
        { text: "Novo ensino médio 5", value: "5" },
        { text: "Novo ensino médio 6", value: "6" },
        { text: "Novo ensino médio 7", value: "7" },
        { text: "Novo ensino médio 8", value: "8" },
        { text: "Novo ensino médio 9", value: "9" },
        { text: "Novo ensino médio 10", value: "10" },
        { text: "Novo ensino médio 11", value: "11" }
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
