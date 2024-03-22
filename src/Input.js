import React, { memo, useState } from "react";

const Input = ({ onChange, value }) => {
  console.log("rerender Input", value);
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      ></input>
    </div>
  );
};

export default memo(Input, (prev, next) => {
  return prev.value === next.value;
});
