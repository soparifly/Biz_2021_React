import { firestore } from "../config/firebaseConfig";
import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "../css/bbsDetail.css";
function BBsDetail() {
  const router = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;
  const [Bbs, setBBs] = useState({
    b_date: "",
    b_time: "",
    b_writer: "",
    b_subject: "",
    b_content: "",
  });
  const findByidFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("Bbs").doc(docId).get();
      if (result.data()) {
        setBBs(result.data());
      }
    }
  }, [docId]);
  const onDelete = (e) => {
    if (window.confirm("삭제할까요")) {
      firestore
        .collection("Bbs")
        .doc(docId)
        .delete()
        .then((result) => {
          router.push(`/`);
        });
      //   router.push(`/delete/${docId}`);
    }
  };
  useEffect(findByidFetch, [findByidFetch]);

  return (
    <div className="bbs_detail">
      <div>
        <label>DATE</label>
        <span>{Bbs.b_date}</span>
      </div>
      <div>
        <label>TIME</label>
        <span>{Bbs.b_time}</span>
      </div>
      <div>
        <label>WRITER</label>
        <span>{Bbs.b_writer}</span>
      </div>
      <div>
        <label>SUBJECT</label>
        <span>{Bbs.b_subject}</span>
      </div>
      <div>
        <label>CONTENT</label>
        <span>{Bbs.b_content}</span>
      </div>
      <div className="bbs_btn_box">
        <button
          onClick={() => {
            router.push(`/`);
          }}
        >
          처음으로
        </button>
        <button
          onClick={() => {
            router.push(`write/${docId}`);
          }}
        >
          수정
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default BBsDetail;
