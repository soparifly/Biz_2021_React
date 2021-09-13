import React from "react";
import "./css/main.css";
import View from "./View";
import Write from "./write";
import "./css/main.css";
function BucketMain() {
  return (
    <section className="main_section">
      <article>
        <Write />
        <View />
      </article>
    </section>
  );
}

export default BucketMain;
