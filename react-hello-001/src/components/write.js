/**
 * react에서 제공하는 useState()함수를 사용하기 위한 import
 * useState()
 * react에서 "상태"를 생성하는 생성자 함수
 * 상태(state) :  값을 변화시킬수 있는, 값이 변화되어야 하는 변수, 객체 상태가 변하면 react는 화면을 다시그린다
 * 변수나 객체의 값이 바뀌면(변경되면) 그에 맞춰서 화면이 다시 rendering 된다
 * 만약 코드에서 변수나 객체를 수시로 바꾼다면
 * 	화면이 무작위로 무한대로 다시 rendering 될것이다
 * 컴퓨터의 fan은 무한대로 발작을 할것이다
 */
import { useState } from "react";

import BBsView from "./view";

const bbs = {
  b_date: "2021-09-06",
  b_time: "11:24:00",
  b_writer: "홍길동",
  b_subject: "비가오넹",
  b_content: "...ㅋㅋㅋ",
};
/**
 *
 * bbs 객체의 요소 들을 input box value속성에 지정(할당)했다
 * 이 form 이 보여지는 상태에서
 * input box를 클릭하고 키보드로 뭔가를 입력하면(변경하려고하면)
 * 결국엔 value 속성에 할당된 bbs 객체의 요소 의 값들이 변경될 것이다
 *
 * HTML에서 input value b_name 이라는 코드는 결국 화면에서 클릭하고 키보드에서 이름 box 를 클릭하고 문자열을 입력하면 그내용이 내부에서 b_name = scan.nextString()과 유사한 코드가 실행되어
 * b_name 이라는 변수에 문자열을 저장하도록 코드가 작동될것이다.
 * 하지만 react 에서는 b_name = 이름과 같은 코드는 금지된다 (쓸수는 있지만 프로젝트가 폭주한다.)
 * 때문에 react로 form 을 만들고 value 속성에 변수명을 지정하는 순간
 * input box 는 readonly가 된다
 *
 * 그렇다면 INPUT 에 무언가를 입력하고싶은데
 * read only가 되버리면 input 을 사용하는 의미가 없어진다
 * react에서는input box에 change event 를 설정하고
 * 키보드로 입력된 문자열을 가로채서 state()함수를 사용하여 값을 변화시켜야한다 .
 *
 *
 *
 */
const Write = () => {
  // b_name 상태(변수)를 생성하고
  // 초기값을 이몽룡으로 설정하고
  // 상태(변수)의 값을 변화(변경)하고자할때
  // setB_Name()라는 함수를 사용하겠다 라는 선언
  const [b_name, setB_Name] = useState("이몽룡");

  /**
   * bbsVO 상태(객체)를 생성하고
   * 초기값은 b_date 등등의 요소와 값으로 설정하고
   * 상태(객체)의 값을 변화(변경) 하고자 할때
   * setBBsVO()라는 함수를 사용한다
   */
  const [bbsVO, setBBsVO] = useState({
    b_date: "2021-09-06",
    b_time: "11:24:00",
    b_writer: "홍길동",
    b_subject: "비가오넹",
    b_content: "...ㅋㅋㅋ",
  });

  // event 객체를 변수로 갖는
  // 핸들러 함수
  /**
   * input[name="b_writer"] box를 클릭하고,
   * 키보드로 문자열을 입력하면 반응하는 event 핸들러함수
   * 키보드로 입력된 문자열은 e.target.value에 담겨서 전달된다
   * 전달된 키보드 문자열은 b_writer_text 변수에 임시담고
   * setB_Name()함수를 사용하여 b_name 변수에 값을 셋팅한다
   *
   * React내부 rendering 되는 알고리즘
   * setB_Name() 함수에 문자열이 전될되면
   * 내부에서는
   * 1.전달된 문자열을 임시변수에 할당
   *  const _b_name = 전달된 문자열
   * 2. 실제 b_name 변수가 가리키고있는 메모리주소를
   * _b_name(임시변수)주소로 변경한다
   * 3. 결국 원래 b_name 변수와 새로만들어진 _b_name 변수를 비교하여
   * 변화가 있으면 rendering 한다
   */
  const onWriterChangeHandle = (e) => {
    const b_writer_text = e.target.value;
    //reat에서는 상태 *변수 , 객체에 직접 값을 할당해서는 절대안된다
    // b_name = b_writer_text: 절대쓰면안되는 코드
    setB_Name(b_writer_text);
  };

  /**
   * bbs.변수 타입으로 value를 가지고있는 input box의 change event 핸들러
   *
   *
   * */
  const onChangeHandle = (e) => {
    //e.target의 요소들을 분해 전개하여 개별변수로 선언
    // const name = e.target.name;
    // const value = e.target.value;
    //input box 의 이름과 키보드로 입력한 문자열을 추출할 수 있다
    const { name, value } = e.target;
    console.log("change", name, value);
    //복제
    const _bbs_data = { ...bbsVO, b_date: "2020-01-01" };

    //setBBSVO ({...bbsVO, b_date:value});
    //   []에 해당되는것은 input값의 name에 해당하는 값을 나타냄

    /**
     *
     * 전개 연산자를 사용하여 bbsVO의 전체데이터를 복제하고
     * name 변수에 담긴 값과 같은 요소를 value값을 변경하여
     * 원래있던 bbsVO와 교체하라
     * bbsVO.[name] = value -> 절대 사용하면 안되는 코드
     *
     */
    setBBsVO({ ...bbsVO, [name]: value });
  };
  /**
   * <BBsVOView bbs={bbsVO} />
   * 1. import된 BBSView를 화면에 연결하라
   * 2. 현재 (write.js)에서 선언된 state 객체를 bbs라는 이름의 변수에 담아서
   * 		BBSView에게 전달하라
   *
   */
  return (
    <form>
      <p>
        <input
          name="b_date"
          defaultValue={bbs.b_date}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_time"
          defaultValue={bbs.b_time}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_writer"
          defaultValue={b_name}
          onChange={onWriterChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_subject"
          defaultValue={bbs.b_subject}
          onChange={onChangeHandle}
        />
      </p>
      <p>
        <input
          name="b_content"
          defaultValue={bbs.b_content}
          onChange={onChangeHandle}
        />
      </p>
      <div>
        <BBsView bbs={bbsVO} b_name={b_name} />
      </div>
    </form>
  );
};

export default Write;
