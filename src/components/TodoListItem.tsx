import * as React from 'react'

interface ITodoItemProps {
    todo: Todo;
    onDismiss(dltTodo: Todo): void
}

export const TodoListItem: React.FC<ITodoItemProps> = ({todo, onDismiss}) => {
    return (
        <li key={todo.id}>
            <label>
                <input
                 type="checkbox"
                 checked={todo.isComplete}
                />
                {todo.task}
            </label>
            <span onClick={()=> onDismiss(todo)}>X</span>
        </li>
    );
}