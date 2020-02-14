import * as React from 'react'
import { TodoListItem } from './TodoListItem';

interface ITodoList {
    todos: Todos;
    onDismiss(todo: Todo): void

}

export const TodoList: React.FC<ITodoList> = ({todos, onDismiss}) => (
    <ul>
        {todos.map(todo => (
            <TodoListItem todo={todo} onDismiss={onDismiss}/>
        ))}
    </ul>
);