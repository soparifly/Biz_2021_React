import React from "react";

function BuckInput(props) {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //   alert("Enter");
      const bucket = e.target.value;
      // 전달받은 bucket_inser()함수에
      // input 에 입력된 bucket text 를 전달하기
      props.bucket_insert(bucket);
    }
  };
  return (
    <div className="w3-form-control w3-margin">
      <input
        onKeyDown={onKeyDown}
        className="w3-input w3-border w3-hover-gray"
        placeholder="버킷에 추가할 내용을 입력하세요"
      />
    </div>
  );
}

export default BuckInput;
