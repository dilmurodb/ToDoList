import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "lightgrey",
      borderBottom: "1px black dotted",
      padding: "5px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteToDo.bind(this, id)}
            style={{ backgroundColor: "red", color: "white", float: "right" }}
          >
            delete
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoItem;
