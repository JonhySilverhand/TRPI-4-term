import React from 'react';
import Todo from './Todo';
import {todoListPropsType} from "../types";

const TodoList = ({ todos, toggleTodo } : todoListPropsType) => (
    <ol>
        {todos.map((todo) => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ol>
);

export default TodoList;