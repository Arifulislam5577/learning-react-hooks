import React, { useContext, useState } from "react";
import { DataContext } from "../contextApi/ContextApi";

const Todo = () => {
  const { state, dispatch } = useContext(DataContext);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "") return;
    dispatch({
      type: "ADD_TODOS",
      payload: { id: Date.now(), name: todo, complete: false },
    });

    setTodo("");
  };
  return (
    <>
      <form
        className="form w-50 mx-auto bg-white p-5 mb-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary rounded-0 mt-3 btn-block w-100"
        >
          Add todo
        </button>
      </form>

      <ul className="list-group list-group-flush">
        {state.todos.length <= 0 ? (
          <li className="list-group-item">NO TODO FOUND</li>
        ) : (
          state.todos.map((td) => (
            <li className="list-group-item" key={td.id}>
              {td.name}
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Todo;
