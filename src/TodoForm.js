import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({ initialFormData = {title: "", description: "", priority: 0}, handleSave }) {
  const [formData, setFormData] = useState({
    ...initialFormData
  })
  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    const formDataCopy = { ...formData };
    formDataCopy.id = formDataCopy.id || uuid();
    handleSave(formDataCopy);
    setFormData({
      title: "",
      description: "",
      priority: 0
    })
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>

      <div className="form-group">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
        />
      </div>

      <div className="form-group">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="form-group d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority"
            className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
          <select id="newTodo-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-??ber</option>
            <option value={2}>??ber</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          G??!
          </button>
      </div>

    </form>
  );
}

export default TodoForm;
