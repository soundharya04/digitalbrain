import React from "react";

export const Card = (props) => {
  let cardclass = ["card p-10"];
  if (props.bCard) {
    cardclass.push("bCard");
  }
  return (
    <div
      className={cardclass.join(" ")}
      style={{
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "100%",
        ...props.cardStyle,
      }}
    >
      {props.children}
    </div>
  );
};
