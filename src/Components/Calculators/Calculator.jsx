import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Calculator.css";
import peopleCry from "../../assets/people-crying.jpg";
import mithaiBaat from "../../assets/mithai-baat-dijiye.jpg";
import youCanDoIt from "../../assets/you-can-do-it.jpg";
import disappointMeme from "../../assets/dis.jpg";
import soFunnyKim from '../../assets/so-funny-kim.jpg';


const Calculator = () => {
  // meme image link state
  const [memeImage, setMemeImage] = useState("");
  const [sub, setSub] = useState(0);
  const list1 = [];
  const { register, handleSubmit } = useForm();
  let [total, setTotal] = useState(0);

  function isEmpty(obj) {
      let countEmptyFields = 0;
      for (const [, value] of Object.entries(obj)) {
          if (value === '') countEmptyFields++;
      }
      return countEmptyFields > 0;
  }
  let isFormDataEmpty;

  let onSubmit = (data) => {
    isFormDataEmpty = isEmpty(data);
    if (!isFormDataEmpty) {
        let credits = 0;
        let gpa = 0;
        for (i = 0; i < sub; i++) {
            credits += parseFloat(data[`credits-${i}`]);
            gpa += parseFloat(data[`credits-${i}`] * data[`grades-${i}`]);
        }
        setTotal((prevTotal) => (gpa / credits).toFixed(2));
    } else {
        setTotal(
            (prevTotal) =>
                'Please fill in all the fields or select only required number of semesters'
        );
    }
    
  };

  useEffect(() => {
    const memeHandler = () => {
      if (
          total ===
          'Please fill in all the fields or select only required number of semesters'
      ) {
          setMemeImage((prevMeme) => soFunnyKim);
      }else if (total >= 9.5) {
        setMemeImage((prevMeme) => peopleCry);
      } else if (total >= 9.0 && total < 9.5) {
        setMemeImage((prevMeme) => mithaiBaat);
      } else {
        setMemeImage((prevMeme) => youCanDoIt);
      }
    };
    memeHandler();
  }, [total]);

  if (sub <= 10) {
    for (var i = 0; i < sub; i++) {
      list1.push(
        <div key={i} className="subject-container">
          <br />
          <span className="subject-label">Subject {i + 1}</span>
          <br />
          <div className="subject-select-container">
            <select name="credits" {...register(`credits-${i}`)}>
              <option value="" defaultValue>Credits</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <select name="grades" {...register(`grades-${i}`)}>
              <option value="" defaultValue>
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
          </div>
          <br />
        </div>
      );
    }
    return (
        <div className="Calculator">
            <div className="calculator-info">
                <p className="steps">
                    <br />
                    <span>How to use GPA calculator ?</span> <br />
                    🔢 Enter number of courses <br />
                    🧐 Put grades obtained and credits of each course <br />
                    💥 Voila! Your GPA for this semester <br /> <br />
                </p>
            </div>
            <div className="calculator-main">
                <form className="count-form">
                    <h6>Subject Count: </h6>
                    <input
                        type="number"
                        onChange={(e) => setSub(e.target.value)}
                        className="count-input"
                    />
                </form>
                <form onSubmit={handleSubmit(onSubmit)} className="list-form">
                    <div className="list-container">{list1}</div>
                    <br />
                    <br />
                    {sub > 0 && (
                        <button type="Submit" className="calc-btn">
                            Calculate
                        </button>
                    )}
                </form>
            </div>
            <br />
            <div className="calc-output">
                {total !== 0 && (
                    <div>
                        <h1 className="answer">
                            {total.length > 5 ? `${total}` : `GPA: ${total}`}
                        </h1>
                        <div className="meme-image">
                            <img src={memeImage} alt="img" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
  } else {
    return (
      <div className="Calculator">
        <div className="calculator-info">
          <p className="steps">
            <br />
            <span>How to use GPA calculator ?</span> <br />
            🔢 Enter number of courses <br />
            🧐 Put grades obtained and credits of each course <br />
            💥 Voila! Your GPA for this semester <br /> <br />
          </p>
        </div>
        <div className="calculator-main-fail">
          <form>
            <h6>Subject Count: </h6>
            <input
              type="number"
              onChange={(e) => setSub(e.target.value)}
              className="count-input"
            />
          </form>
        </div>
        <br />
        <div className="calc-output"><div>
          <h1 className="answer">Cannot enter more than 10 subjects...</h1>
          <div className="meme-image">
            <img src={disappointMeme} alt="img" />
          </div>
        </div>
        </div>
        
      </div>
    );
  }
};
export default Calculator;
