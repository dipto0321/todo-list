import React from 'react';

export default (props) => {
  const {
    handleTodoBtn,
    addTodoMode,
  } = props;
  const displayClass = !addTodoMode ? 'btn btn-primary btn-block' : 'd-none';
  return (
    <button
      type='button'
      className={displayClass}
      onClick={handleTodoBtn}
    >
    Add Todo
    </button>
)
}