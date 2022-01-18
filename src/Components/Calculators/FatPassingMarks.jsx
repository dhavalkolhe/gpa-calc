import React, { useState } from 'react';
import betaTumse from '../../assets/beta-tumse.jpg';
import youCanDoIt from '../../assets/you-can-do-it.jpg';
import highRisk from '../../assets/high-risk.jpg';
import buddhiTez from '../../assets/buddhi-tez.jpg';

const FatPassingMarks = () => {
    // meme image link state
    const [memeImage, setMemeImage] = useState('');
    // choosing calculator for theory or lab
    const [subjectComponent, setSubjectComponent] = useState('Theory');
    // initial state for theory marks
    const [theoryMarksFormData, setTheoryMarksFormData] = useState({
        'cat-1-marks': 0,
        'cat-2-marks': 0,
        'internal-1-marks': 0,
        'internal-2-marks': 0,
        'internal-3-marks': 0,
    });
    // initial state for lab marks
    const [labMarksFormData, setLabMarksFormData] = useState({
        'lab-1': 0,
        'lab-2': 0,
        'lab-3': 0,
        'lab-4': 0,
        'lab-5': 0,
        'lab-6': 0,
    });

    // message for required marks in theory fat
    const [theoryPassingMarksMessage, setTheoryPassingMarksMessage] =
        useState('');
    // message for required marks in lab fat
    const [labPassingMarksMessage, setLabPassingMarksMessage] = useState('');

    //function that sets the state as theory or lab to display theory or lab form based on option selected
    const componentSelectHandler = (event) => {
        setSubjectComponent((prevState) => {
            if (prevState === 'Theory') {
                setTheoryMarksFormData({
                    'cat-1-marks': 0,
                    'cat-2-marks': 0,
                    'internal-1-marks': 0,
                    'internal-2-marks': 0,
                    'internal-3-marks': 0,
                });
                setTheoryPassingMarksMessage('');
                setMemeImage('');
            } else if (prevState === 'Lab') {
                setLabMarksFormData({
                    'lab-1': 0,
                    'lab-2': 0,
                    'lab-3': 0,
                    'lab-4': 0,
                    'lab-5': 0,
                    'lab-6': 0,
                });
                setLabPassingMarksMessage('');
                setMemeImage('');
            }
            return event.target.value;
        });
    };

    // function to update the theory marks data on input value change
    const onMarksValueChangeHandler = (event) => {
        setTheoryMarksFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            };
        });
    };

    // function to update the lab marks data on input value change
    const onLabMarksChangeHandler = (event) => {
        setLabMarksFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            };
        });
    };

    // function to calculate the required theory marks for passing the subject on form submit
    const onTheoryMarksFormSubmitHandler = (event) => {
        event.preventDefault();
        // extracting marks in cat 1
        const catOneMarks = parseFloat(
            theoryMarksFormData['cat-1-marks'] / 2
        ).toFixed(2);
        // extracting marks in cat 2
        const catTwoMarks = parseFloat(
            theoryMarksFormData['cat-2-marks'] / 2
        ).toFixed(2);
        // extracting and calculating total marks in da/quiz
        const internalTotalMarks = parseFloat(
            Number(theoryMarksFormData['internal-1-marks']) +
                Number(theoryMarksFormData['internal-2-marks']) +
                Number(theoryMarksFormData['internal-3-marks'])
        ).toFixed(2);

        // calculating total internal marks out of 60
        const totalMarks =
            Number(catOneMarks) +
            Number(catTwoMarks) +
            Number(internalTotalMarks);

        // if total internal marks is less than 10, then student cannot pass the subject
        if (totalMarks < 10) {
            setTheoryPassingMarksMessage(
                '😭 Sorry! You cannot pass theory component of this subject...keep 6k ready 😜'
            );
            setMemeImage((prevMeme) => betaTumse);
        }
        // if total internal marks are greater than 50, then student only
        if (totalMarks >= 50) {
            setTheoryPassingMarksMessage(
                'You need only 40 marks out of 100 in FAT to pass theory component 🥳'
            );
            setMemeImage((prevMeme) => youCanDoIt);
        }
        // if total internal marks are less than 50, then dooing the calculation for marks needed in fat
        else if (totalMarks < 50 && totalMarks >= 10) {
            // calculating the marks needed
            const neededPassingMarks = (50 - totalMarks) * 2.5;
            // if marks needed are less than 40, then also we need minimum 40 marks in theory fat
            if (neededPassingMarks < 40) {
                setTheoryPassingMarksMessage(
                    'You need only 40 marks out of 100 in FAT to pass theory component 🥳'
                );
                setMemeImage((prevMeme) => youCanDoIt);
            } // display the marks needed for passing in theory fat
            else {
                setTheoryPassingMarksMessage(
                    `You need ${neededPassingMarks} marks out of 100 in FAT to pass theory component 😟`
                );
                setMemeImage((prevMeme) => highRisk);
            }
        }
    };

    // function to calculate the required lab marks for passing the subject on form submit
    const onLabMarksFormSubmitHandler = (event) => {
        event.preventDefault();
        // calculating total internal assessment marks of lab out of 60
        const totalLabAssessmentsMarks = parseFloat(
            Number(labMarksFormData['lab-1']) +
                Number(labMarksFormData['lab-2']) +
                Number(labMarksFormData['lab-3']) +
                Number(labMarksFormData['lab-4']) +
                Number(labMarksFormData['lab-5']) +
                Number(labMarksFormData['lab-6'])
        ).toFixed(2);

        // if total internal marks > 50, pass, otherwise show required marks

        if (totalLabAssessmentsMarks > 50) {
            setLabPassingMarksMessage(
                'You have fulfilled the criteria of passing the Lab Component 🥳'
            );
            setMemeImage((prevMeme) => buddhiTez);
        } else {
            setLabPassingMarksMessage(
                `You just need ${
                    50 - totalLabAssessmentsMarks
                } marks out of 40 in LAB FAT to pass Lab Component`
            );
            setMemeImage((prevMeme) => highRisk);
        }

        // if total internal marks less than 10, then student cannot pass the subject, no matter what!!
        if (totalLabAssessmentsMarks < 10) {
            setLabPassingMarksMessage(
                '😭 Sorry! You cannot pass lab component of this subject...keep 6k ready 😜'
            );
            setMemeImage((prevMeme) => betaTumse);
        }
    };
    return (
        <div className="fat-marks-calculator">
            <h6>Subject Component:</h6>
            <select
                name="subject-component"
                onChange={componentSelectHandler}
                value={subjectComponent}
                className="count-input"
            >
                <option value="Theory">Theory</option>
                <option value="Lab">Lab</option>
            </select>
            {subjectComponent === 'Theory' ? (
                <div className="Calculator">
                    <div className="calculator-info fat-pass">
                        <form onSubmit={onTheoryMarksFormSubmitHandler}>
                            <br />
                            <div className="cat-marks-container">
                                <div className="form-input">
                                    <label htmlFor="cat-1">CAT - 1 Marks</label>
                                    <br />
                                    <input
                                        id="cat-1"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 30)"
                                        name="cat-1-marks"
                                        onChange={onMarksValueChangeHandler}
                                        min={0}
                                        max={30}
                                        className="fat-inputs"
                                    />
                                </div>
                                <br />
                                <div className="form-input">
                                    <label htmlFor="cat-2">CAT - 2 Marks</label>
                                    <br />
                                    <input
                                        id="cat-2"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 30)"
                                        name="cat-2-marks"
                                        onChange={onMarksValueChangeHandler}
                                        min={0}
                                        max={30}
                                        className="fat-inputs"
                                    />
                                </div>
                            </div>

                            <br />
                            <div className="form-input">
                                <label
                                    className="internal-marks-label"
                                    htmlFor="internal-1"
                                >
                                    DA/QUIZ-1 Marks
                                </label>
                                <input
                                    id="internal-1"
                                    type="number"
                                    step="0.5"
                                    placeholder="(out of 10)"
                                    name="internal-1-marks"
                                    onChange={onMarksValueChangeHandler}
                                    min={0}
                                    max={10}
                                    className="fat-inputs"
                                />
                            </div>
                            <br />
                            <div className="form-input">
                                <label
                                    className="internal-marks-label"
                                    htmlFor="internal-2"
                                >
                                    DA/QUIZ-2 Marks
                                </label>
                                <input
                                    id="internal-2"
                                    type="number"
                                    step="0.5"
                                    placeholder="(out of 10)"
                                    name="internal-2-marks"
                                    onChange={onMarksValueChangeHandler}
                                    min={0}
                                    max={10}
                                    className="fat-inputs"
                                />
                            </div>
                            <br />
                            <div className="form-input">
                                <label
                                    className="internal-marks-label"
                                    htmlFor="internal-3"
                                >
                                    DA/QUIZ-3 Marks
                                </label>
                                <input
                                    id="internal-3"
                                    type="number"
                                    step="0.5"
                                    placeholder="(out of 10)"
                                    name="internal-3-marks"
                                    onChange={onMarksValueChangeHandler}
                                    min={0}
                                    max={10}
                                    className="fat-inputs"
                                />
                            </div>
                            <br />
                            <button type="Submit" className="calc-btn">
                                Calculate
                            </button>
                        </form>
                    </div>
                    <br />
                    <div className="calculator-main">
                        {theoryPassingMarksMessage.length > 0 && (
                            <div>
                                <h1 className="answer">
                                    {theoryPassingMarksMessage}
                                </h1>
                                <div className="meme-image">
                                    <img src={memeImage} alt="img" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="Calculator">
                    <div className="calculator-info">
                        <form onSubmit={onLabMarksFormSubmitHandler}>
                            <br />
                            <div className="lab-marks-inputs-container">
                                <div className="form-input">
                                    <label htmlFor="lab-1">
                                        Lab Assessment - 1 Marks
                                    </label>
                                    <br />
                                    <input
                                        id="lab-1"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 10)"
                                        name="lab-1"
                                        onChange={onLabMarksChangeHandler}
                                        min={0}
                                        max={10}
                                        className="lab-inputs"
                                    />
                                </div>
                                <br />
                                <div className="form-input">
                                    <label htmlFor="lab-2">
                                        Lab Assessment - 2 Marks
                                    </label>
                                    <br />
                                    <input
                                        id="lab-2"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 10)"
                                        name="lab-2"
                                        onChange={onLabMarksChangeHandler}
                                        min={0}
                                        max={10}
                                        className="lab-inputs"
                                    />
                                </div>
                            </div>
                            <div className="lab-marks-inputs-container">
                                <div className="form-input">
                                    <label htmlFor="lab-3">
                                        Lab Assessment - 3 Marks
                                    </label>
                                    <br />
                                    <input
                                        id="lab-3"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 10)"
                                        name="lab-3"
                                        onChange={onLabMarksChangeHandler}
                                        min={0}
                                        max={10}
                                        className="lab-inputs"
                                    />
                                </div>
                                <br />
                                <div className="form-input">
                                    <label htmlFor="lab-4">
                                        Lab Assessment - 4 Marks
                                    </label>
                                    <br />
                                    <input
                                        id="lab-4"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 10)"
                                        name="lab-4"
                                        onChange={onLabMarksChangeHandler}
                                        min={0}
                                        max={10}
                                        className="lab-inputs"
                                    />
                                </div>
                            </div>
                            <div className="lab-marks-inputs-container">
                                <div className="form-input">
                                    <label htmlFor="lab-5">
                                        Lab Assessment - 5 Marks
                                    </label>
                                    <br />
                                    <input
                                        id="lab-5"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 10)"
                                        name="lab-5"
                                        onChange={onLabMarksChangeHandler}
                                        min={0}
                                        max={10}
                                        className="lab-inputs"
                                    />
                                </div>
                                <br />
                                <div className="form-input">
                                    <label htmlFor="lab-6">
                                        Lab Assessment - 6 Marks
                                    </label>
                                    <br />
                                    <input
                                        id="lab-6"
                                        type="number"
                                        step="0.5"
                                        placeholder="(out of 10)"
                                        name="lab-6"
                                        onChange={onLabMarksChangeHandler}
                                        min={0}
                                        max={10}
                                        className="lab-inputs"
                                    />
                                </div>
                            </div>
                            <br />
                            <button type="Submit" className="calc-btn">
                                Calculate
                            </button>
                        </form>
                    </div>
                    <br />

                    <div className="calculator-main">
                        {labPassingMarksMessage.length > 0 && (
                            <div>
                                <h1 className="answer">
                                    {labPassingMarksMessage}
                                </h1>
                                <div className="meme-image">
                                    <img src={memeImage} alt="img" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FatPassingMarks;
