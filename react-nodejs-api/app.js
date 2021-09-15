var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const {
  USERID,
  PASSWORD,
} = require("../react-nodejs-apiV2/config/mongoConfig");
const cors = require("cors");

/**
 * CROSS ORIGIN RESOURCE SHARE
 * 서로 다른 서버간에 데이터를 주고받을때
 * 보안문제로 발생할수 있는 ISSUE
 */
const cors = require("cors");
const mongoose = require("mongoose");

//db가 작동되는 것을 모니터링 하기위한
//event 핸들러를 등록
const dbConn = mongoose.connection;
dbConn.once("open", () => {
  console.log("MongoDB Open Ok !");
});
dbConn.on("error", () => {
  console.error();
});
// config/mongConfigSample.json에 Atlas Userid와 password를 등록한후 mongoConfig.json 으로 변경한후 실행하시오
const mongoConfig = require("./config/mongoConfig.json");
const mongAtlas =
  `mongodb+srv://${mongoConfig.USERID}` +
  `:${mongoConfig.PASSWORD}` +
  `@cluster0.jojjs.mongodb.net/myFirstDatabase` +
  `?retryWrites=true&w=majority`;
// "mongodb://localhost:27017/dbms"
mongoose.connect(mongAtlas);
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const app = express();



// cors를 허용할 Origin List
const whiteList = ["http://localhost:5000", "http://localhost:4000"];

//api
const corsOption = {
  origin: (origin, callback) => {
    const isWhiteList = whiteList.indexOf(origin) !== -1;
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
