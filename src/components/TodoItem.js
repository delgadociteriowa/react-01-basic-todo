import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const {id, title, completed} = this.props.todo;
    return (
      <li className="list-group-item">
        <input type="checkbox" onChange={this.props.completeTodo.bind(this, id)}/>{' '}
        <span  className={completed ? 'completed' : undefined}>{title}</span>
        <button className="btn btn-danger btn-todo" onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
        <button className="btn btn-primary btn-todo" onClick={this.props.activateEditMode.bind(this, this.props.todo)}>Edit</button>
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  activateEditMode: PropTypes.func.isRequired,
} 

export default TodoItem
