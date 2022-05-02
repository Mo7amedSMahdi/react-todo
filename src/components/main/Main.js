import React from 'react';
import './main.css';

const Main = () => {
  const [state, setState] = React.useState({ clicked: false });
  const handelClick = () => {
    setState({ clicked: !state.clicked });
  };
  return (
    <main>
      <div className="section-header">
        <h1>Title</h1>
      </div>
      <div className="tasks flex flex--column">
        <form action="/" className="add-task flex">
          <input
            type="text"
            className="input-task"
            name="inputTask"
            id="inputTask"
            placeholder="Add todo..."
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        <div className="tasks-list flex flex--column">
          <div className="task flex">
            <input type="checkbox" id="completed" />
            <p>Task title</p>
            <button
              type="button"
              onClick={handelClick}
              className="btn btn--icon"
            >
              <i className="ri-delete-bin-line ri-xl" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
