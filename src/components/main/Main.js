import React from 'react';
import './main.css';

const Main = () => (
  <main>
    <div className="tasks flex flex--column">
      <div className="section-header">
        <h1>todos</h1>
      </div>
      <form action="/" className="add-task flex">
        <input
          type="text"
          className="input-task"
          name="inputTask"
          id="inputTask"
          placeholder="Add todo..."
        />
        <button type="submit" className="btn btn--icon">
          <i className="ri-add-circle-fill ri-xl" />
        </button>
      </form>
      <div className="tasks-list flex flex--column">
        <div className="task flex">
          <input type="checkbox" id="completed" />
          <p>Task title</p>
          <button type="button" className="btn btn--icon">
            <i className="ri-delete-bin-line ri-xl" />
          </button>
        </div>
      </div>
    </div>
  </main>
);
export default Main;
