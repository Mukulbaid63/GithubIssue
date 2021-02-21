import React from "react";

const Label = ({ labels }) => {
  return (
    <span>
      <span
        style={{
          backgroundColor: "#" + labels.color,
          color: "white",
          padding: "0px 3px 3px 3px",
          margin: "2px",
          fontSize: "13px",
          fontWeight: "500",
          borderRadius: "11px",
        }}
      >
        {labels.name}
      </span>
    </span>
  );
};

export default Label;
