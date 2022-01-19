// import { SmokeFreeSharp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Calculator.css";
import soFunnyKim from "../../assets/so-funny-kim.jpg";
import mithaiBaat from "../../assets/mithai-baat-dijiye.jpg";
import bhotTez from "../../assets/bhot-tez.jpg";
import youCanDoIt from "../../assets/you-can-do-it.jpg";
import disappointMeme from "../../assets/dis.jpg";

const Cgpa = () => {
  // meme image state
  const [memeImage, setMemeImage] = useState("");
  const [semesters, setSemesters] = useState(0);
  const semesterList = [];
  const { register, handleSubmit } = useForm();
  let [total, setTotal] = useState(0);
  function isEmpty(obj) {
    let countEmptyFields = 0;
    for (const [, value] of Object.entries(obj)) {
      if (value === "") countEmptyFields++;
    }
    return countEmptyFields > 0;
  }
  let isFormDataEmpty;
  const onSubmit = (data) => {
    isFormDataEmpty = isEmpty(data);
    if (!isFormDataEmpty) {
      let credits = 0;
      let gpa = 0;
      for (let i = 1; i <= semesters; i++) {
        credits += parseFloat(data[`sem${i}-credits`]);
        gpa += parseFloat(data[`sem${i}-marks`] * data[`sem${i}-credits`]);
      }
      setTotal((prevTotal) => (gpa / credits).toFixed(2).toString());
    } else {
      setTotal(
        (prevTotal) =>
          "Please fill in all the fields or select only required number of semesters"
      );
    }
  };

  useEffect(() => {
    const memeHandler = () => {
      if (
        total ===
        "Please fill in all the fields or select only required number of semesters"
      ) {
        setMemeImage((prevMeme) => soFunnyKim);
      } else if (total === "10.00") {
        setMemeImage((prevMeme) => bhotTez);
      } else if (total >= "9.00") {
        setMemeImage((prevMeme) => mithaiBaat);
      } else {
        setMemeImage((prevMeme) => youCanDoIt);
      }
    };
    memeHandler();
  }, [isFormDataEmpty, total]);

  // generate inputs for number of semesters
  if (semesters <= 10) {
    for (let i = 0; i < semesters; i++) {
      semesterList.push(
        <div key={i} className="subject-container">
          <br />
          <label htmlFor="">Semester {i + 1} </label>
          <br />
          <input
            type="number"
            step="0.5"
            {...register(`sem${i + 1}-credits`)}
            name={`sem${i + 1}-credits`}
            placeholder="Total Credits"
            min={16}
            max={27}
            className="cgpa-total-input"
            // style={{marginBottom:"1rem"}}
          />
          <input
            type="number"
            {...register(`sem${i + 1}-marks`)}
            name={`sem${i + 1}-marks`}
            placeholder="GPA"
            step="0.01"
            min={1.0}
            max={10.0}
          />
        </div>
      );
    }
    return (
      <div className="Calculator">
        <div className="calculator-info">
          <p className="steps">
            <br />
            <span>How to Calculate CGPA ?</span>
            <br />
            🎰 Enter number of semesters <br />
            📌 Put grades obtained and credits of each course <br />
            🎯 We'll show you your exact CGPA <br /> <br />
          </p>
        </div>
        <div className="calculator-main">
          <form className="count-form">
            <h6>Semester Count: </h6>
            <input
              type="number"
              onChange={(e) => setSemesters(e.target.value)}
              className="count-input"
            />
          </form>
          <form onSubmit={handleSubmit(onSubmit)} className="list-form">
            <div className="list-container">{semesterList}</div>
            <br />
            {semesters > 0 && (
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
                {total.length > 5 ? `${total}` : `CGPA: ${total}`}
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
            <span>How to Calculate CGPA ?</span>
            <br />
            🎰 Enter number of semesters <br />
            📌 Put grades obtained and credits of each course <br />
            🎯 We'll show you your exact CGPA <br /> <br />
          </p>
        </div>
        <div className="calculator-main-fail">
          <form className="count-form">
            <h6>Semester Count: </h6>
            <input
              type="number"
              onChange={(e) => setSemesters(e.target.value)}
              className="count-input"
            />
          </form>
        </div>
        <br />
        <div className="calc-output">
          <div>
            <h1 className="answer">
              Cannot calculate CGPA for more than 10 semesters...
            </h1>
            <div className="meme-image">
              <img src={disappointMeme} alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Cgpa;
