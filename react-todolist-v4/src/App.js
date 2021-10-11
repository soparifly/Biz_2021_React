import logo from './logo.svg';
import './App.css';
import TodoMain from './comp/TodoMain';
import TodoInput from './comp/TodoInput';
import TodoList from './comp/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain form={<TodoInput />} header="오늘할일">
        <TodoList />
      </TodoMain>
    </div>
  );
}

export default App;
