import { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  count: 0,
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "ADD_TODOS":
      return { ...state, todos: [action.payload, ...state.todos] };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
