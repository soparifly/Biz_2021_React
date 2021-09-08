import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import "./css/menu.css";
import Home from "./comps/Home";
import About from "./comps/About";
import BBsWrite from "./comps/BBsWrite";
import MainNav from "./comps/MainNav.jsx";
/* <Browser Router>

react 에서 navigation 을 구현할때 navigation에 포함될

컴포넌트들을 감싸는 Super Navi 컴포넌트 */

/* <Link 컴포넌트>

Navigation Menu 를 구현할때 사용하는 컴포넌트

A tag를 사용하는.. 실제 렌더링이 이루어지면 A tag로 변환되는 컴포넌트 

*React에서는 a tag를 사용하여 페이지를 전환하는 코드를 사용하지않는다* */

// <Route>

// navigation의 menu를 선택했을때

// 선택적으로 컴포넌트가 나타나게하는 도구

// 이 컴포넌트를 사용하여  각 네비의 메뉴를 속성페이지와 연결할것이다
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>나의 React 프로젝트</h3>
        </header>
        <MainNav />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/bbs" component={BBsWrite} exact />
        <Route path="/bbs/write" component={BBsWrite} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
