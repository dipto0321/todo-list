import React from 'react';

export default (props) => {
  const {
    addTodoMode, editTodoMode, title, description, dueDate, priority, notes,
  } = props;
  const displayClass = addTodoMode || editTodoMode ? 'form-inline todo-form' : 'd-none todo-form';
  return (
    <form className={displayClass} onSubmit={props.submitTodo}>
      <input className="form-control" type="text" placeholder="Title" defaultValue={title} />
      <input
        className="form-control"
        type="text"
        placeholder="Description"
        defaultValue={description}
      />
      <input className="form-control" type="date" defaultValue={dueDate} />
      <select className="form-control" defaultValue={priority}>
        <option value="Priority">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input className="form-control" type="text" defaultValue={notes} placeholder="Notes" />
      <button className="d-none">Add</button>
    </form>
  );
};
