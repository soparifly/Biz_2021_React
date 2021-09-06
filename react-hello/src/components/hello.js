/**
 * 2개의 변수(상수)선언
 */
const comp = "컴포넌트 만들기";
const nation = "Republic of Korea";
/**
 *
 * @returns 미리 선언한 변수를 컴포넌트의 내부에 사용해야할때
 * { 변수 }과같이 사용한다
 */
/**
 * json 객체 선언
 */
const buyer = {
  name: "홍길동",
  addr: "서울시",
  age: 30,
};
const HelloBox = () => {
  return (
    <>
      <h1> 컴포넌트 만들기</h1>
      <h3>{comp}</h3>
      <ul>
        <li>이름 :{buyer.name}</li>
        <li>나이 :{buyer.age}</li>
        <li>주소 :{buyer.addr}</li>
      </ul>
    </>
  );
};
/**
 *
 * @returns 모듈(file)로 분리한 컴포넌트 만들기
 */
const Hello = () => {
  return (
    <>
      <h1>Republic of Korea</h1>
      <HelloBox />
    </>
  );
};
/**
 *모듈로 분리한 component 는 반드시 export해줘야한다
 */
//nodejs 에서 modul.exports 와 같은 (ES6+문법)
export default Hello;
