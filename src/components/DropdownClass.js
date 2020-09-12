import React, { Component } from "react";
import "../styles/Dropdown.css";

class Dropdown1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    console.log(this.state);
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    console.log(this.state.isOpen);

    return (
      <div className="dropdown">
        <button onClick={this.handleOpen} className="dropdown__header">
          Dropdown header - class
        </button>
        {this.state.isOpen && (
          <div className="dropdown__body">
            <ul>
              <li>
                <a>link1</a>
              </li>
              <li>
                <a>link2</a>
              </li>
              <li>
                <a>link3</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown1;
