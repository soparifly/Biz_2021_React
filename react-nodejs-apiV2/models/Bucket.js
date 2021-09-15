const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucket = Schema({
  b_id: String,
  b_title: String,
  b_start_date: String,
  b_flag: Number,
  b_end_data: String,
  b_end_check: Boolean,
  b_cancel: Boolean,
});
//  bucketlist :Collection 이름
// 실제 DB에 저장될때는 bucketlists라는 복수형태의 이름으로 등록된다
module.exports = mongoose.model("bucketlist", bucket);
