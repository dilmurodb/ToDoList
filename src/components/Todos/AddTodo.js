import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  onSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  onChange = evt => this.setState({ [evt.target.name]: evt.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add ToDo..."
          style={{ display: "10", padding: "10px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
