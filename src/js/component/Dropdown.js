import React from "react";

export class Dropdown extends React.Component {
    state = {
      isOpen: false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            onClick={this.toggleOpen}
          >
            favorites {this.props.count}
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            {this.props.children}
          </div>
        </div>
      );
    }
  }