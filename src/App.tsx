import * as React from 'react'
import {TodoForm} from './components/TodoForm'
import {TodoListItem} from './components/TodoListItem'
import {TodoList} from './components/TodoList'


interface IState {
  newTodo: Todo;
  todos: Todos;
}

const initialState: IState = {
  newTodo: {
    id: 0,
    task: "",
    isComplete: false
  },
  todos: [],
}

const App: React.FC = () => {
  const [state, setState] = React.useState<IState>(initialState);
  const prevIdRef = React.useRef<number>(state.newTodo.id);

  React.useEffect(()=> {
    prevIdRef.current = state.newTodo.id;
  });
  const prevId = prevIdRef.current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, newTodo: {...state.newTodo, id: prevId+1, task: e.target.value,}});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(state.newTodo.task === "")return;
    setState({...state, todos: [...state.todos, state.newTodo]});
  }
  
 const removeTodo = (dltTodo: Todo) => {
   setState({...state, todos: [...state.todos.filter(todo => todo.id !== dltTodo.id)]});
 }

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoForm todo={state.newTodo} onChange={handleChange} onSubmit={handleSubmit}/>
      <TodoList todos={state.todos} onDismiss={removeTodo}/>
    </div>
  );
}

export default App;
