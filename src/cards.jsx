import React, { Component } from "react";
import Card from "./cardsUI";
import img1 from "../src/assets/stock.jpeg";
import edit from "../src/assets/edit-xxl.png";
import deleter from "../src/assets/delete-xxl.png";
import TaskItemCard from "./taskItem";
import TodoItems from "./Items";

import "./index.css";

class Cards extends Component {
  constructor(nextState) {
    super();
    const whyIsItLikeThis = JSON.parse(localStorage.getItem('items'));
    JSON.parse(localStorage.getItem('items'))
  if (!localStorage.getItem('items')) {
    console.log("beep");
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    console.log(this.state.items);
   } else {
    console.log("boop");
    this.state = {
      items: JSON.parse(localStorage.getItem('items')),
      currentItem: {
        text: "",
        key: ""
      }
    };
    console.log(this.state);
    console.log(whyIsItLikeThis);
  }
  }

  getSnapshotBeforeUpdate(prevProps, prevState, nextProps, nextState) {
    localStorage.setItem('items', JSON.stringify(prevState.items));
    localStorage.setItem('items', JSON.stringify(prevState.items));
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('items', JSON.stringify(this.state.items));
    localStorage.setItem('items', JSON.stringify(this.state.items));
    
  }
  
 /*
  rememberme = e => {
    localStorage.setItem('currentItem', JSON.stringify(this.state.items));
    console.log(JSON.parse(localStorage.getItem('currentItem')));
  }

  */

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
    //this.rememberme();
  };
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    };
    this.setState({
      currentItem
    });
  };
  helpButton(){
    console.log(this.state);
  }
  addItem = e => {
    e.preventDefault();
    console.log("Item has been added!");
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
    console.log(this.state);
    //this.rememberme();
  };
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <div className="app">
              <TaskItemCard
                addItem={this.addItem}
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                currentItem={this.state.currentItem}
                editIcon={edit}
                deleteIcon={deleter}
              />
              <TodoItems
                entries={this.state.items}
                deleteItem={this.deleteItem}
              />
            </div>
          </div>
          <div className="col-md-4">
            <Card imgsrc={img1} title="Testy testing" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
