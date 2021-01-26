import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={this.props.completeTodo}
              deleteTodo={this.props.deleteTodo}
              activateEditMode={this.props.activateEditMode}
            />
          ))
        }
      </ul>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  activateEditMode: PropTypes.func.isRequired,
}

export default Todos
