import React from "react";

const SizedBox = ({ width, height }) => {
  const style = {
    width: width || "0%",
    height: height || "0%",
  };

  return <div style={style}></div>;
};

export default SizedBox;
