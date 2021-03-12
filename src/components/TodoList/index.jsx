import PropTypes from 'prop-types';
import React from 'react';
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
}

function TodoList(props) {
    const { todos, onTodoClick } = props;

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }
    return (
        <div>
            <ul className="toto-list">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => { handleClick(todo) }}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;