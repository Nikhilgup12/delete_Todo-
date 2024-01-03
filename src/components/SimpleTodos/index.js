import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList, /// Your initial todos here...
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodos = todosList.filter(todo => todo.id !== id)
    this.setState({todosList: updatedTodos})
  }
  render() {
    const {todosList} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="main-heading"> Simple Todo </h1>
          <ul className="todo-list-container">
            {todosList.map(each => (
              <TodoItem
                todoItem={each}
                key={each.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos