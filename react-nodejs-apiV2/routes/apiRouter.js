const BUCKET = require("../models/Bucket");
const express = require("express");
const router = express.Router();
/**
 <* RESTFul>
 * 클라이언트에서 요청을 할때
 * 할일을 프로토콜 method로 분리하기
	* CREATE(Insert) : POST로 요청을 하고
	* READ (select) : GET 요청을 하고
	* UPDATE : put 으로 요청을 하고
	* DELETE : delete로 요청을함
   
   자원으 명확한 지정
   localhost:3000/book/delete?id=12345 보통 요청을 수행하는데
   localhost:3000/book/12345/delete:RESTFul에서 할일을, 자원을 명확하게
   설정하기

   RESTFul 요청을 처리하기 위해서는
   표준 HTML 코드만으로는 연결이 불가능하다
	표준 HTML에서는 POST와 GET은 지원을 하지만
	PUT과 DELETE는 지원을 하지않는다
	PUT과 DELETE를 사용하기 위해서는 Ajax(fetch)와 같은 
	별도의 도구를 사용해야한다

	React와 API연동을 할때는 RESTFull 4가지 method를 사용하여 서버를 구축한다

	POST, PUT: 데이터를 body에 담아서 전송
	GET, DELETE  : 단순히 URL 요청만 수행하거나 pathVarriable방식으로
					데이터를 전송하여 처리를 수행한다

	client에서 요청을 할때
	같은 URL을 통하여 다른 기능을 수행하는방법 서버코딩을 하는데 다소 부담이 덜할수 있다.

	GET localhost:3000/book/delete	를 수행할경우
		router.get("/book/delete")
		- 정보에서 삭제된 정보를 호출
	DELETE localhost:3000/book/delete/1를 수행하면
		router.delete("/book/delete")
		- 정보에서 어떤 ID값이 1인 데이터를 삭제하라고 요청
 */

const retData = [];
router.get("/getlist", (req, res) => {
  res.json("retData");
});
router.get("/update/:id/:title", (req, res) => {
  const id = req.params.id;
  const title = req.params.title;
  console.log("수신된데이터", id, title);
  //   res.status(200).end("끝") 으로 사용했었음 :정상적오르 응답이처리 되었음 :의 뜻으로 200을 전달하고 끝나는 end 함수를 사용함 최근에는 send로 사용을많이함(한글인코딩문제)
  /**
   *< Http Status Code >
   * 2xx : 정상 처리되고 데이터 대기중
   * 3xx : 보내준 결과와 동일한 상황이니 변함없으니 그대로 redirect
   * 4xx : 보낸 요청에 문제가 있다
   * 404 : Not found
   * 406, 403 : 권한 없음 Session
   * 405 : (nodejs 제외) 메소드가 잘못되었다
   * 400 : (nodejs 제외) 요청한 데이터가 문제가있음
   * 500 : Server Interal Error(서버에 문제가 발생)
   */
  res.send("끝");
});

/**
 * POST 로 받는 데이터는 주로 form에 담긴 데이터이다
 * API Server에서는 fetch)_를 통하여 데이터를 전달받을때도 사용한다
 * request 의 body 에 담겨서 전달되기때문에
 * req.body에서 데이터를 추출하면된다
 *
 *
 *
 */
router.post("/bucket", async (req, res) => {
  const body = req.body;

  const result = await BUCKET.create(body);
  console.log("데이터 추가하기", result);

  console.log(body);
  res.json({ result: "OK" });
  //   res.send("끝");
});
router.get("/bucket", async (req, res) => {
  const body = req.body;
  const result = await BUCKET.save(body);
  console.log(body);
  console.log("데이터업데이트하기", result);
  res.json({ result: "OK" });
});
router.get("/get", async (req, res) => {
  const buckets = await BUCKET.find({});
  console.log("전체리스트");
  res.json(buckets);
});
router.get("/get/:id", (req, res) => {
  console.log("개별데이터 요청하기");
  res.json(retData[0]);
});
router.post("/insert", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("끝");
});
router.put("/update", async (req, res) => {
  const body = req.body;
  // DB에서 b_id 값이 body.b_id 와 같은 데이터를 select하기

  //   console.log("업데이트하기");
  const doc = await BUCKET.findOne({ b_id: body.b_id });
  await doc.overwrtie(body);
  /**
   * select한 model 객체의 모든 요소 데이터를
   * body로 받은 데이터로 변경하라
   */
  //doc ={...doc,b_id:body.b_id,b_title :  body:b_title}
  await doc.save();
  await console.table(body);
});
router.delete("/cancel/:id", (req, res) => {
  const id = req.params.id;
  console.log("수신된 데이터", id);
});
module.exports = router;
