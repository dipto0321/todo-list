import React from 'react';

export default (props) => {
  const {
    addProjectMode,
    submitProjectForm,
    editProjectMode,
    name,
    dataID,
  } = props;
  const displayClass = addProjectMode || editProjectMode ? '' : 'd-none';
  return (
    <form
      data-id={dataID}
      className={displayClass}
      onSubmit={submitProjectForm}
    >
      <input
        type="text"
        id={`project-${dataID}`}
        defaultValue={name}
        placeholder={name || 'New Project Name'}
      />
    </form>
  );
};
