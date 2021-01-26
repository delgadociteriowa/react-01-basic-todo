import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditTodo extends Component {
  state = {
    title: this.props.todoToEdit.title
  }
  
  onChange = e => this.setState({[e.target.name] : e.target.value})

  onSubmit = e => {
    e.preventDefault();
    this.props.editTodo(this.props.todoToEdit.id, this.state.title);
    this.setState({title: ''});
    this.props.deactivateEditMode();
  }

  deactivate = e => {
    e.preventDefault();
    this.props.deactivateEditMode();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange}/>
        </div>
        <button type="submit" className="btn btn-success" disabled={this.state.title === '' ? true : false}>Submit</button>
        <button className="btn btn-secondary" style={{marginLeft: '5px'}} onClick={this.deactivate}>Cancel</button>
      </form>
    )
  }
}

EditTodo.propTypes = {
  todoToEdit: PropTypes.object.isRequired,
  deactivateEditMode: PropTypes.func.isRequired,
}

export default EditTodo
