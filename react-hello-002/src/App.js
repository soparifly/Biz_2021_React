import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Write from "./components/write";
import View from "./components/view";
import View_1 from "./components/view_1";
import View_2 from "./components/view_2";

function App() {
  /**
   * friend 객체를 App.js에서 선언하고
   * write.js와 view.js에 전파하였다.
   * App.js에서 생성된, 선언된 값은 write.js에서 볼수 있다.
   * (화면에 그려진다)
   *
   * write.js는 보는 것뿐만아니라 키보드에서 입력된값이 입력되고 변경할수 있어야한다.
   * 하지만 App.js(부모)로 부터 전달받은 friend 변수는 절대 write.js에서 변경할수 없다.
   *
   * 그래서
   *
   * App.js에서 friend 변수를 변경하는 함수를 선언하고
   * 변수와 함수를 함께 write.js 에게 전달한다
   *
   */
  const [friend, setFriend] = useState({
    f_name: "성춘향",
    f_addr: "남원시",
  });
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };
  return (
    <div className="App">
      <header className="App-header">
        <View_1 fo={friend} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Write friend={friend} onChange={onChangeHandle} />
      <View friend={friend} />
      <View_2 fo={friend} />
    </div>
  );
}

export default App;
