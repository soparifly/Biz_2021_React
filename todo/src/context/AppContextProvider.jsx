import { createContext, useContext, useState } from "react";
const AppContext = createContext();

const useTodoContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "TODO 연습",
    t_isComplete: false,
  });
  const [todoList, setTodoList] = useState([
    {
      t_id: 0,
      t_text: "",
      t_isComplete: false,
    },
  ]);
  const onChange = (e) => {
    setTodo({
      ...todo,
      t_id: todo.t_id + 1,
    });
  };
  const todoInsert = (text) => {};
  const completeToggle = (id) => {};
  const todoDelete = (id) => {};
  const propsData = {
    todoList,
    setTodoList,
    todoInsert,
    completeToggle,
    todoDelete,
  };
  return (
    <AppContext.AppContextProvider value={propsData}>
      {children}
    </AppContext.AppContextProvider>
  );
};
export default AppContextProvider;
