import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="each-list-item-container">
      <p className="each-todo-item-title"> {title} </p>
      <button
        type="button"
        onClick={onDeleteTodo}
        className="todo-item-delete-button "
      >
        {' '}
        Delete
      </button>
    </li>
  )
}

export default TodoItem
