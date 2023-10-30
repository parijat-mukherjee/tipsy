import React from "react";

export default function Service({
  satisfactionValue,
  onChangeSatisfactionValue,
  children,
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h3>{children}</h3>
      <select value={satisfactionValue} onChange={onChangeSatisfactionValue}>
        <option value="0">Not Satisfied(0%)</option>
        <option value="5">Fairly Satisfied(5%)</option>
        <option value="10">Very Satisfied(10%)</option>
        <option value="20">Highly Satisfied(20%)</option>
      </select>
    </div>
  );
}
