import React, { Component } from "react";
import Select from "react-dropdown-select";

export const App = ({ options }) => (
  <Select
    multi
    options={options}
    onChange={(values) => this.onChange(values)}
  />
);

class Game extends Component {
  render() {
    return <></>;
  }
}

export default Game;
