const json = {
  name: "홍길동",
  addr: "서울시",
  tel: "010-000",
};
console.log(json);
const json1 = { ...json };
console.log(json1);
// json 에 담긴 데이터를 json2 로 복제하라
// 복제를 하면서 tel 솏으의 값만 010-222로 변경하여 저장하라
const json2 = { ...json, tel: "010-222" };
console.log(json2);
