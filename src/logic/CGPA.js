// import { SmokeFreeSharp } from "@mui/icons-material";
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './cgpa.css';
import soFunnyKim from '../assets/so-funny-kim.jpg';
import mithaiBaat from '../assets/mithai-baat-dijiye.jpg';
import bhotTez from '../assets/bhot-tez.jpg';
import youCanDoIt from '../assets/you-can-do-it.jpg';
import disappointMeme from '../assets/dis.jpg';

const Cgpa = () => {
    // meme image link state
    const [memeImage, setMemeImage] = useState('');
    const [semesters, setSemesters] = useState(0);
    const semesterList = [];
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
    const onSubmit = (data) => {
        isFormDataEmpty = isEmpty(data);
        if (!isFormDataEmpty) {
            let credits = 0;
            let gpa = 0;
            for (let i = 1; i <= semesters; i++) {
                credits += parseFloat(data[`sem${i}-credits`]);
                gpa += parseFloat(
                    data[`sem${i}-marks`] * data[`sem${i}-credits`]
                );
            }
            setTotal((prevTotal) => (gpa / credits).toFixed(2).toString());
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
            } else if (total === '10.00') {
                setMemeImage((prevMeme) => bhotTez);
            } else if (total >= '9.00') {
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
                <div key={i}>
                    <br />
                    <label htmlFor="">Semester {i + 1}: </label>
                    <br />
                    <input
                        type="number"
                        step="0.5"
                        {...register(`sem${i + 1}-credits`)}
                        name={`sem${i + 1}-credits`}
                        placeholder="Total Credits"
                        min={16}
                        max={27}
                    />
                    <input
                        type="number"
                        {...register(`sem${i + 1}-marks`)}
                        name={`sem${i + 1}-marks`}
                        placeholder="GPA"
                        step="0.01"
                        min={1.00}
                        max={10.00}
                    />
                </div>
            );
        }
        return (
            <div className="CGPA">
                <p className="steps">
                    <br />
                    Steps: <br />
                    🎰 Enter number of semesters <br />
                    📌 Put grades obtained and credits of each course <br />
                    🎯 We'll show you your exact CGPA <br /> <br />
                </p>
                <form>
                    <h6>Semester Count: </h6>
                    <input
                        type="number"
                        onChange={(e) => setSemesters(e.target.value)}
                    />
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>{semesterList}</div>
                    <br />
                    <br />
                    {semesters > 0 && <button type="Submit">Calculate</button>}
                </form>
                <br />
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
        );
    } else {
        return (
            <div className="CGPA">
                <p className="steps">
                    <br />
                    Steps: <br />
                    🎰 Enter number of semesters <br />
                    📌 Put grades obtained and credits of each course <br />
                    🎯 We'll show you your exact CGPA <br /> <br />
                </p>
                <form>
                    <h6>Semester Count: </h6>
                    <input
                        type="number"
                        onChange={(e) => setSemesters(e.target.value)}
                    />
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>{semesterList}</div>
                    <br />
                    <br />
                    {semesters > 0 && <button type="Submit">Calculate</button>}
                </form>
                <br />
                <div>
                    <h1 className="answer">
                        Cannot calculate CGPA for more than 10 semesters....majak bana rakha h
                    </h1>
                    <div className="meme-image">
                        <img src={disappointMeme} alt="img" />
                    </div>
                </div>
            </div>
        );
    }
};
export default Cgpa;
