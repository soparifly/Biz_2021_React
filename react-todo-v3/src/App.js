import logo from './logo.svg';
import './App.css';
import TodoMain from './comp/TodoMain';
import TodoInput from './comp/TodoInput';
import TodoList from './comp/TodoList';
import TimeHandler from './comp/TimeHandler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TimeHandler />
      <TodoMain form={<TodoInput />} header="오늘할일">
        <TodoList />
      </TodoMain>
      {/* TodoMain.jsx Layout을 사용하여 Todo화면을 구현*/}
    </div>
  );
}

export default App;
