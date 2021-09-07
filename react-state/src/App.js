//중괄호에 포함되어있는 변수명은 react에서 제공하는 기본라이브러리 이기때문에 임의로 이름을 바꿀수없다
import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Write from "./comps/Write";
import View from "./comps/View";

//프로젝트가 시작될때 임시로 보여줄 데이터
const bbsSample = {
  b_date: "2021-09-07",
  b_time: "10:20:00",
  b_writer: "홍길동",
  b_subject: "React BBS",
  b_content: "React를 이용한 BBS 프로젝트만들기",
};
function App() {
  /**
   * 상태(변수, 객체) bbsVO를 선언하고
   * 값의 변경이 필요할때 사용할 setBBs()함수를 선언하겠다
   * useState() 함수를 사용하여 상태를 만든다
   * 상태를 만들때 bbsSample을 사용하여 초기값을 설정하겠다.
   * bbsSample을 초기값으로 설정하는 이유는
   * bbsVO가 null값이 되어서 이후 코드에서 오류가나는 것을 방지하기 위함이다
   */
  const [bbsVO, setBBs] = useState(bbsSample);
  const bbsChange = (event) => {
    //bbsVO에 접근할 명령어
    const { name, value } = event.target;
    // 적용할 내용을 setBBsVO에 전달할 명령어
    setBBs({ ...bbsVO, [name]: value });
    //   아래와 같은 코드를 input 박스의 갯수만큼 나타내줘야하는데
    //  spread코드를 사용하면 위의 코드로 줄일수있는 큰장점이있다.
    //   if (name === "b_date") {
    // 	  setBBs({ ...bbsVO, b_date: value });
    //   }
  };
  /**
   * <Write bbs = {bbsVO}/> 코드에 대한 설명
   * import된 Write.js 컴포넌트를 결합하고
   * 선언된 bbsVO 상태변수를 bbs라는 이름으로 전달한다
   *
   * Call By Name
   * 매개변수를 전달할때 전달받은 변수이름을 지정하고
   * 변수값을 전달하는 방식
   *
   * Write(bbsVO)
   * bbs <= bbsVO
   * function Write(bbs)
   *
   * <Write onBBSChange={bbsChange} /> 코드 설명
   * App.js 에 선언된 bbsChange()함수를 onBBsChange이름으로 전달하겠다.
   *
   */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main_section">
        <article>
          <Write bbs={bbsVO} onBBsChange={bbsChange} />
        </article>
        <article>
          <View bbs={bbsVO} />
        </article>
      </section>
    </div>
  );
}

export default App;
