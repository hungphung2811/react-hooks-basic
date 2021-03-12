import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onTodoFormSubmit: PropTypes.func
};
TodoForm.defaultProps = {
    onTodoFormSubmit: null
}

function TodoForm(props) {
    const { onTodoFormSubmit } = props;
    const [value, setvalue] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        if (onTodoFormSubmit) {
            const newTodoItem = {
                title: value
            }
            onTodoFormSubmit(newTodoItem);
            setvalue('')
        }
    }

    function handleInputChange(e) {
        setvalue(e.target.value)
    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input type="text" value={value} onChange={handleInputChange} />
            <button>Add new</button>
        </form>
    );
}

export default TodoForm;