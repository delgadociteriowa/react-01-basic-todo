import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import SearchTodo from './components/SearchTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Do the dishes',
        completed: false
      },
      {
        id: 3,
        title: 'Clean the house',
        completed: false
      },
    ],
    todoToEdit: {
      id: null,
      title: '',
      completed: false
    },
    editMode: false,
    filtered: []
  }

  completeTodo = id => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    })})
  }
  
  deleteTodo = id => { this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}) }

  addTodo = title => {
    this.setState({todos:[...this.state.todos, {
      id: Math.floor(Math.random() * 1000),
      title,
      completed: false
    }]})
  }

  activateEditMode = todo => {
    this.setState({editMode: true});
    this.setState({todoToEdit: todo});
  }

  deactivateEditMode = todo => {
    this.setState({editMode: false});
    this.setState({todoToEdit: {
      id: null,
      title: '',
      completed: false
    }});
  }

  editTodo = (id, title) => {
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.title = title
        }
        return todo;
      }
    )})
  }

  searchTodo = title => {
    this.setState({filtered: this.state.todos.filter(todo => {
      const regex = new RegExp(`${title}`, 'gi');
      return todo.title.match(regex)
    })})
  }

  render() {
    return (
      <div className="container">
        {
          this.state.editMode ?
          <EditTodo
            todoToEdit={this.state.todoToEdit}
            deactivateEditMode={this.deactivateEditMode}
            editTodo={this.editTodo}
          />
          :
          <AddTodo addTodo={this.addTodo}/>
        }
        <SearchTodo searchTodo={this.searchTodo}/>
        {
          this.state.filtered.length === 0 ?
            <Todos
              todos={this.state.todos}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
              activateEditMode={this.activateEditMode}
            />
          :
            <Todos
              todos={this.state.filtered}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
              activateEditMode={this.activateEditMode}
            />
        }
      </div>
    )
  }
}

export default App