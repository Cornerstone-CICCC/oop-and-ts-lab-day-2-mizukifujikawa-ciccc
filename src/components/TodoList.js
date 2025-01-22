import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.updateTodoList = this.updateTodoList.bind(this)
    this.props.todoContext.subscribe(this.updateTodoList)
    this.todoListElement = null
  }

  updateTodoList(todos) {
    this.state.todos = todos

    if (!this.todoListElement) return;

    this.todoListElement.innerHTML = ''

    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      })
      this.todoListElement.appendChild(todoItem.render())
    })
  }

  render() {
    this.todoListElement = document.createElement('div')
    this.todoListElement.className = "todo-list"

    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      })
      this.todoListElement.appendChild(todoItem.render())
    })

    return this.todoListElement;
  }
}