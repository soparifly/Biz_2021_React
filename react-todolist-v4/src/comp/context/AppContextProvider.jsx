import React, { createContext, useContext, useRef, useState } from 'react';

const AppContext = createContext();

export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const todoSample = {
    t_id: 0,
    t_text: '',
    t_comp: false,
  };
  const [todo, setTodo] = useState(todoSample);

  const [todoList, setTodoList] = useState([]);

  const NextId = useRef(1);

  const onChange = (e) => {
    setTodo({
      t_id: NextId.current,
      t_text: e.target.value,
      t_comp: false,
    });
  };

  const onClick = () => {
    if (!todo.t_text) return alert('내용입력');
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, t_text: '' });
    NextId.current++;
  };
  const ProviderData = {
    todo,
    todoList,
    onChange,
    onClick,
  };
  return (
    <AppContext.Provider value={ProviderData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
