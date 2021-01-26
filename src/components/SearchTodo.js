import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchTodo extends Component {
  onChange = e => {
    this.props.searchTodo(e.target.value)
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" name="title" onChange={this.onChange} placeholder="Search Todo"/>
        </div>
      </form>
    )
  }
}

SearchTodo.propTypes = {
  searchTodo: PropTypes.func.isRequired,
}

export default SearchTodo
