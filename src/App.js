import React from "react";
import { useState } from "react";
import Bill from "./Bill";
import Service from "./Service";
import Message from "./Message";
import Reset from "./Reset";

export default function App() {
  const [billAmount, setBillAmount] = useState("");
  const [satisfactionValue1, setSatisfactionValue1] = useState(0);
  const [satisfactionValue2, setSatisfactionValue2] = useState(0);

  function handleBillAmount(e) {
    setBillAmount(e.target.value);
  }

  function handleSatisfactionValue1(e) {
    setSatisfactionValue1(e.target.value);
  }

  function handleSatisfactionValue2(e) {
    setSatisfactionValue2(e.target.value);
  }

  function handleReset() {
    setBillAmount("");
    setSatisfactionValue1(0);
    setSatisfactionValue2(0);
  }

  let tip =
    ((parseInt(satisfactionValue1) + parseInt(satisfactionValue2)) / 2 / 100) *
    parseInt(billAmount);

  let totalBill = tip + parseInt(billAmount);

  return (
    <div>
      <Bill billAmount={billAmount} onChangeBillAmount={handleBillAmount} />
      <Service
        satisfactionValue={satisfactionValue1}
        onChangeSatisfactionValue={handleSatisfactionValue1}
      >
        How did you like the service?
      </Service>
      <Service
        satisfactionValue={satisfactionValue2}
        onChangeSatisfactionValue={handleSatisfactionValue2}
      >
        How did your friend like the service?
      </Service>
      <Message>
        {parseInt(billAmount) > 0 || tip >= 0
          ? `You pay $${totalBill} ($${parseInt(billAmount)}+$${tip} tip)`
          : ""}
      </Message>

      <Reset onReset={handleReset} />
    </div>
  );
}
