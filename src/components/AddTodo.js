import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = e => this.setState({[e.target.name] : e.target.value})

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Add a Todo"/>
        </div>
        <button type="submit" className="btn btn-success" disabled={this.state.title === '' ? true : false}>Submit</button>
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
