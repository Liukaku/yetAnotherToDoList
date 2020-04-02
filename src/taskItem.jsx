import React from "react";

import "./index.scss";

const TaskItemCard = props => {
  return (
    <div className="card taskItem">
      <div className="flex-box headerBox">
        <h4 className="taskHeader float-left">Test</h4>
        <div className="flex-box float-right">
          <img className="icon" src={props.editIcon} alt="" />
          <img className="icon delete" src={props.deleteIcon} alt="" />
        </div>
      </div>

      <form onSubmit={props.addItem}>
        <input
          type="text"
          placeholder="Start typing..."
          name=""
          id=""
          ref={props.inputElement}
          value={props.currentItem.text}
          onChange={props.handleInput}
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default TaskItemCard;
