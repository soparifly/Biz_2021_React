import React from 'react';
import { createContext, useContext, useState, useRef } from 'react';
/**
 * React Context API 기능을 활용하여
 * state를 관리하는 도구
 *
 * 다중 구조의 컴포넌트가 겹쳐있는경우
 * state를 전파하는것이 매우 불편한 코드로 작성될수 있다
 *
 * 이럴때 ContextAPI를 활용하여
 * state와 공용으로 사용할 여러가지 함수를 store에 보관하고
 * 필요한 곳에서만 useContext()를 사용하여 쉽게 getter할수 있도록
 * 도와주는 컴포넌트
 *
 * Context를 생성하기
 * 생성된 Context에 state등을 보관하고
 * useContext() Hook을 커스터마이징하여 손쉽게 사용할도록 하는
 * Context를 사용할 컴포넌트들을 합성패턴을 이용하여 관리할수 있도록 한다
 *
 */
//컨텍스트생성
const AppContext = createContext();
//컨텍스트의 Store에 보관된 정보들을 추출하기위한 Hook함수를 선언
export const useTodoContext = () => useContext(AppContext);
const AppContextProvider = ({ children }) => {
  const nextId = useRef(0);
  const inputId = useRef();
  //TODO 정보 1개를 보관할 state
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: '리액트 복습',
    t_comp: false,
  });
  //Provider를 합성패턴으로 선언하여
  // 필요한곳에서 끌어올려 사용할 수 있도록 한다
  const [todoList, setTodoList] = useState([todo]);
  //이벤트핸들러
  const onChange = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text: t_text, t_id: nextId.current });
  };
  // 입력창 클리어
  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: '', t_comp: false });
  };
  // 리스트에 추가하기
  const todoInsert = () => {
    if (todo.text === '') {
      window.alert('할일을 입력하세요');
      inputId.current.focus();
      return;
    }
    setTodoList([...todoList, todo]);
    nextId.current++;
    setTodo({ t_id: nextId.current, t_text: '', t_comp: false });
    todoClear();
  };
  const onClick = () => todoInsert();
  // eslint-disable-next-line
  const onSubmit = (e) => {};
  const onKeyPress = (e) => {
    //e.keyCode ===13
    if (e.key === 'Enter') {
      todoInsert();
    } else if (e.key === 27) {
      todoClear();
    }
  };
  const listDelete = (e) => {
    const t_id = parseInt(e.target.dataset.todoId);

    if (window.confirm('삭제?')) {
      //data-todo-id 라고 저장하면 앞에 data-는 dataset으로
      // todo-id는 lowerCamel case로 변경되어 todoId로 getter
      const _todolist = todoList.filter((todo) => todo.t_id !== t_id);
      setTodoList(_todolist);
      console.log('삭제완');
    } else {
      console.log('취소되었습니다');
    }
  };
  const onCompClick = (e) => {
    const t_id = parseInt(e.target.dataset.todoId);

    const index = todoList.findIndex((todo) => todo.t_id === t_id);
    const selectTodo = todoList[index];
    const _todoList = [...todoList];
    _todoList[index] = {
      ...selectTodo,
      t_comp: !selectTodo.t_comp,
    };
    setTodoList(_todoList);
  };
  const propsStore = {
    todo,
    todoList,
    inputId,
    onChange,
    onClick,
    onKeyPress,
    listDelete,
    onCompClick,
  };
  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
