import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Calculator.css";

const Calculator = () => {
  const [sub, setSub] = useState(0);
  const list1 = [];
  const { register, handleSubmit } = useForm();
  let [total, setTotal] = useState(0);
  let onSubmit = (data) => {
    let credits = 0;
    let gpa = 0;
    for (i = 0; i < sub; i++) {
      credits += parseInt(data[`credits-${i}`]);
      gpa += parseInt(data[`credits-${i}`] * data[`grades-${i}`]);
    }
    setTotal(gpa / credits);
  };
  for (var i = 0; i < sub; i++) {
    list1.push(
      <div key={i}>
        <br />
        Subject {i + 1}
        <br />
        <select name="credits" {...register(`credits-${i}`)}>
          <option value="0">Credits</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select name="grades" {...register(`grades-${i}`)}>
          <option value="0" defaultValue>
            Grade
          </option>
          <option value="10">S</option>
          <option value="9">A</option>
          <option value="8">B</option>
          <option value="7">C</option>
          <option value="6">D</option>
          <option value="5">E</option>
          <option value="0">F</option>
        </select>
        <br />
      </div>
    );
  }
  return (
    <div className="Calculator">
      <form>
        <h6>Subject Count: </h6>
        <input type="number" onChange={(e) => setSub(e.target.value)} />
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>{list1}</div>
        <br />
        <br />
        {sub > 0 && <button type="Submit">Calculate</button>}
      </form>
      <br />
      {total !== 0 && <p className="answer">GPA: {total}</p>}
    </div>
  );
};
export default Calculator;
