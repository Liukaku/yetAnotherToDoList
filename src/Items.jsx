import React, { Component } from "react";
import Cards from "./cards";
import edit from "../src/assets/edit-xxl.png";
import deleter from "../src/assets/delete-xxl.png";

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key}>
        <div className="flex-box">
          {item.text}
          <img className="icon" src={edit} alt="" />
          <img
            className="icon delete"
            src={deleter}
            alt=""
            onClick={() => this.props.deleteItem(item.key)}
          />
        </div>
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
