//library imports
import React from "react";

//comp imports

//static imports
import "./multiuseElements.css";

//components
export const Popup = ({
  content,
  children,
  style,
  trigger = {
    hover: "hover",
    click: "click",
  },
  placement = {
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom",
    topLeft: "topLeft",
    topRight: "topRight",
    bottomLeft: "bottomLeft",
    bottomRight: "bottomRight",
    leftTop: "leftTop",
    leftBottom: "leftBottom",
    rightTop: "rightTop",
    rightBottom: "rightBottom",
  },
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <span className="popupWrapper">
      {open && (
        <>
          <span className={`popup ${placement}`} style={style}>
            {content}
          </span>
          <span className="pointer"></span>
        </>
      )}
      <span
        className="targetElement"
        onClick={(e) => (trigger !== "hover" ? setOpen(!open) : {})}
        onMouseEnter={(e) => (trigger === "hover" ? setOpen(true) : {})}
        onMouseLeave={(e) => (trigger === "hover" ? setOpen(false) : {})}
      >
        {children}
      </span>
    </span>
  );
};

export const Tooltip = ({
  content,
  children,
  style,
  trigger = {
    hover: "hover",
    click: "click",
  },
  placement = {
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom",
    topLeft: "topLeft",
    topRight: "topRight",
    bottomLeft: "bottomLeft",
    bottomRight: "bottomRight",
    leftTop: "leftTop",
    leftBottom: "leftBottom",
    rightTop: "rightTop",
    rightBottom: "rightBottom",
  },
}) => {
  return (
    <Popup
      content={content}
      placement={placement}
      trigger="hover"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "5px",
        border: "none",
      }}
    >
      {children}
    </Popup>
  );
};
