// import React from "react";
// const Button = (props) => {
//   const style = {
//     backGround: props.backGround,
//   };

//   return (
//     <button style={style} onClick={props.클릭이벤트}>
//       {props.children}
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = ({ children, backGround, onClick }) => {
  const style = {
    backGround: backGround,
  };

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
