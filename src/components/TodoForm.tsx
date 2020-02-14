import * as React from 'react'

interface ITodoForm {
    todo: Todo
    onSubmit(e: React.FormEvent<HTMLFormElement>): void;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const TodoForm: React.FC<ITodoForm> = ({todo, onChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <input
         type="text"
         value={todo.task}
         onChange={onChange}
        />
    </form>
);