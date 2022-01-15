import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Calculator.css';
import peopleCry from '../../assets/people-crying.jpg';
import mithaiBaat from '../../assets/mithai-baat-dijiye.jpg';
import youCanDoIt from '../../assets/you-can-do-it.jpg';
import disappointMeme from '../../assets/dis.jpg';

const Calculator = () => {
    // meme image link state
    const [memeImage, setMemeImage] = useState('');
    const [sub, setSub] = useState(0);
    const list1 = [];
    const { register, handleSubmit } = useForm();
    let [total, setTotal] = useState(0);

    let onSubmit = (data) => {
        let credits = 0;
        let gpa = 0;
        for (i = 0; i < sub; i++) {
            credits += parseFloat(data[`credits-${i}`]);
            gpa += parseFloat(data[`credits-${i}`] * data[`grades-${i}`]);
        }
        setTotal((prevTotal) => (gpa / credits).toFixed(2));
    };

    useEffect(() => {
        const memeHandler = () => {
            if (total >= 9.5) {
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
                <div key={i}>
                    <br />
                    <span className="subject-label">Subject {i + 1}</span>
                    <br />
                    <div className="subject-select-container">
                        <select name="credits" {...register(`credits-${i}`)}>
                            c<option value="1">1</option>
                            <option value="1.5">1.5</option>
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
                        <span>How to use GPA calculator</span> <br />
                        🔢 Enter number of courses <br />
                        🧐 Put grades obtained and credits of each course <br />
                        💥 Voila! Your GPA for this semester <br /> <br />
                    </p>
                    {total !== 0 && (
                        <div>
                            <h1 className="answer">GPA: {total}</h1>
                            <div className="meme-image">
                                <img src={memeImage} alt="img" />
                            </div>
                        </div>
                    )}
                </div>
                <div className="calculator-main">
                    <form className="count-form">
                        <h6>Subject Count: </h6>
                        <input
                            type="number"
                            onChange={(e) => setSub(e.target.value)}
                        />
                    </form>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>{list1}</div>
                        <br />
                        <br />
                        {sub > 0 && <button type="Submit">Calculate</button>}
                    </form>
                </div>
                <br />
            </div>
        );
    } else {
        return (
            <div className="Calculator">
                <div className="calculator-info">
                    <p className="steps">
                        <br />
                        <span>How to use GPA calculator</span> <br />
                        🔢 Enter number of courses <br />
                        🧐 Put grades obtained and credits of each course <br />
                        💥 Voila! Your GPA for this semester <br /> <br />
                    </p>
                    <div>
                        <h1 className="answer">
                            Cannot enter more than 10 subjects....majak bana
                            rakha h
                        </h1>
                        <div className="meme-image">
                            <img src={disappointMeme} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="calculator-main-fail">
                    <form>
                        <h6>Subject Count: </h6>
                        <input
                            type="number"
                            onChange={(e) => setSub(e.target.value)}
                        />
                    </form>
                </div>
                <br />
            </div>
        );
    }
};
export default Calculator;
