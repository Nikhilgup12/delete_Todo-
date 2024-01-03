import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todoItem-container">
      <h1 className="todo-title"> {title} </h1>
      <div>
        <button className="todo-button" onClick={onDelete}>
          {' '}
          Delete{' '}
        </button>
      </div>
    </li>
  )
}
export default TodoItem
