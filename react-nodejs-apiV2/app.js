var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { USERID, PASSWORD } = require("./config/mongoConfig");
const cors = require("cors");
const atlasURL =
  `mongodb+srv://` +
  `${USERID}` +
  `:${PASSWORD}` +
  `@cluster0.jojjs.mongodb.net/` +
  `myFirstDatabase?retryWrites=true&w=majority`;

const mongoose = require("mongoose");
const dbConn = mongoose.connection;
dbConn.once("open", () => {
  console.log("mongoDB연결 완료");
});
dbConn.on("error", () => {
  console.error;
});
// 아틀라스에 인서트가 갑자기 느려저서 로컬로 바로접속하면 빨라진다
// mongoose.connect(atlasURL);
mongoose.connect("mongodb://localhost:27017/mydb");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const apiRouter = require("./routes/apiRouter");
var app = express();
//XSS 해킹을 방지하기위하여 지금의 모든 HTTP프로토콜에서는 기본적으로 CORS(CROS ORIGIN RESOURCE SHARE 교차 데이터 공유) 를 금지하고있다
// api 서버를 구축할때는 필수적으로 cors를 허용해주어야한다
// Nodejs 에서는 cors import 하여 단순 설정만 하여도 CORS를 허용할 수 있다
// 무작정 CORS를 허용하는 것은 매우 위험한 정책이다
// 필요한 곳만 CORS를 허용하도록 설정을 한다
// 허용할 접속주소 (URL) 옵션 설정
const whiteURLs = ["http://localhost:3000", "http://..추가등록할주소"];

// cors를 허용할 Origin List
/**
 * 배열. indexOf(문자열)
 * 이 함수는 문자열 배열중에 문자열에 해당하는 ㄴ값이 있으면
 * 항상 01 이 아닌 값을 return 하는 함수
 * 배열중에 문자열에 해당하는 값이 없으면 -1을 return
 * 쉽게 말해서 whitelis에 있는 주소가 indexof로 들어가서 검사했을때
 * 있다면 true로 -1을 반환하지않는다
 * 그러면  callback에서 isWhiteList를 전달한다
 *
 * creadentials
 */
const corsOption = {
  origin: (origin, callback) => {
    const isWhiteList = whiteURLs.indexOf(origin) !== -1;
    callback(null, isWhiteList);
  },
  credentials: true,
};

app.use(cors(corsOption));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
