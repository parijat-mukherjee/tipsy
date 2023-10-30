import React from "react";

export default function Bill({ billAmount, onChangeBillAmount }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h3>How Much Was The Bill?: </h3>
      <input type="text" value={billAmount} onChange={onChangeBillAmount} />
    </div>
  );
}
