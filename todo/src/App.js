import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
function App() {
  return (
    <TodoMain className="App" form={<TodoInput />} header="오늘할일">
      <img src={logo} className="App-logo" alt="logo" />
      <TodoList />
    </TodoMain>
  );
}

export default App;
