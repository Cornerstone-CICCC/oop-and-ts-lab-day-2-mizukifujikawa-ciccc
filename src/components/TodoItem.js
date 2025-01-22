import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
  }

  handleCompleteTodo() {
    this.props.todoContext.completeTodo(this.props.todo.id)
  }
  handleDeleteTodo() {
    this.props.todoContext.deleteTodo(this.props.todo.id)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"

    if (this.props.todo.completed) {
      todoElement.classList.add("completed");
      todoElement.innerHTML = `
        <span>${this.props.todo.description}</span>
        <button class="mark-complete">Mark Complete</button>
        <button class="delete">Delete</button>
      `;
    } else {
      todoElement.innerHTML = `
        ${this.props.todo.description}
        <button class="mark-complete">Mark Complete</button>
        <button class="delete">Delete</button>
      `;
    }

    todoElement.querySelector(".mark-complete").addEventListener("click", this.handleCompleteTodo);
    todoElement.querySelector('.delete').addEventListener('click', this.handleDeleteTodo);

    return todoElement;
  }
}