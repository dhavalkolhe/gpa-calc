import React, { useState } from 'react';

const FatPassingMarks = () => {
    const [subjectComponent, setSubjectComponent] = useState('Theory');
    const [theoryMarksFormData, setTheoryMarksFormData] = useState({
        'cat-1-marks': 0,
        'cat-2-marks': 0,
        'internal-1-marks': 0,
        'internal-2-marks': 0,
        'internal-3-marks': 0,
    });
    const [labMarksFormData, setLabMarksFormData] = useState({
        'lab-1': 0,
        'lab-2': 0,
        'lab-3': 0,
        'lab-4': 0,
        'lab-5': 0,
        'lab-6': 0,
    });

    const [theoryPassingMarksMessage, setTheoryPassingMarksMessage] =
        useState('');
    const [labPassingMarksMessage, setLabPassingMarksMessage] = useState('');

    const componentSelectHandler = (event) => {
        setSubjectComponent(event.target.value);
    };

    const onMarksValueChangeHandler = (event) => {
        setTheoryMarksFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            };
        });
    };

    const onLabMarksChangeHandler = (event) => {
        setLabMarksFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            };
        });
    };

    const onTheoryMarksFormSubmitHandler = (event) => {
        event.preventDefault();
        const catOneMarks = parseFloat(
            theoryMarksFormData['cat-1-marks'] / 2
        ).toFixed(2);
        const catTwoMarks = parseFloat(
            theoryMarksFormData['cat-2-marks'] / 2
        ).toFixed(2);
        const internalTotalMarks = parseFloat(
            Number(theoryMarksFormData['internal-1-marks']) +
                Number(theoryMarksFormData['internal-2-marks']) +
                Number(theoryMarksFormData['internal-3-marks'])
        ).toFixed(2);

        console.log(catOneMarks, catTwoMarks, internalTotalMarks);
        const totalMarks =
            Number(catOneMarks) +
            Number(catTwoMarks) +
            Number(internalTotalMarks);
        console.log(totalMarks);

        totalMarks > 40
            ? setTheoryPassingMarksMessage(
                  'You need 40 marks out of 100 in FAT to pass theory component'
              )
            : setTheoryPassingMarksMessage('');
    };

    const onLabMarksFormSubmitHandler = (event) => {
        event.preventDefault();
        const totalLabAssessmentsMarks = parseFloat(
            Number(labMarksFormData['lab-1']) +
                Number(labMarksFormData['lab-2']) +
                Number(labMarksFormData['lab-3']) +
                Number(labMarksFormData['lab-4']) +
                Number(labMarksFormData['lab-5']) +
                Number(labMarksFormData['lab-6'])
        ).toFixed(2);
        totalLabAssessmentsMarks > 50
            ? setLabPassingMarksMessage(
                  'You have fulfilled the criteria of passing the Lab Component'
              )
            : setLabPassingMarksMessage(
                  `You just need ${50 - totalLabAssessmentsMarks} out of 40 in LAB FAT to pass Lab Component`
              );
    };
    return (
        <div>
            Subject Component:
            <br />
            <select
                name="subject-component"
                onChange={componentSelectHandler}
                value={subjectComponent}
            >
                <option value="Theory">Theory</option>
                <option value="Lab">Lab</option>
            </select>
            {subjectComponent === 'Theory' ? (
                <div>
                    <form onSubmit={onTheoryMarksFormSubmitHandler}>
                        <br />
                        <div className="form-input">
                            <label htmlFor="cat-1">
                                CAT - 1 Marks (out of 30)
                            </label>
                            <br />
                            <input
                                id="cat-1"
                                type="number"
                                step="0.5"
                                placeholder="CAT-1 Marks"
                                name="cat-1-marks"
                                value={theoryMarksFormData['cat-1-marks']}
                                onChange={onMarksValueChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="cat-2">
                                CAT - 2 Marks (out of 30)
                            </label>
                            <br />
                            <input
                                id="cat-2"
                                type="number"
                                step="0.5"
                                placeholder="CAT-2 Marks"
                                name="cat-2-marks"
                                value={theoryMarksFormData['cat-2-marks']}
                                onChange={onMarksValueChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="internal-1">
                                DA/QUIZ-1 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="internal-1"
                                type="number"
                                step="0.5"
                                placeholder="DA/QUIZ Marks"
                                name="internal-1-marks"
                                value={theoryMarksFormData['internal-1-marks']}
                                onChange={onMarksValueChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="internal-2">
                                DA/QUIZ-2 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="internal-2"
                                type="number"
                                step="0.5"
                                placeholder="DA/QUIZ Marks"
                                name="internal-2-marks"
                                value={theoryMarksFormData['internal-2-marks']}
                                onChange={onMarksValueChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="internal-3">
                                DA/QUIZ-3 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="internal-3"
                                type="number"
                                step="0.5"
                                placeholder="DA/QUIZ Marks"
                                name="internal-3-marks"
                                value={theoryMarksFormData['internal-3-marks']}
                                onChange={onMarksValueChangeHandler}
                            />
                        </div>
                        <br />
                        <button type="Submit">Calculate</button>
                    </form>
                    <br />
                    {theoryPassingMarksMessage.length > 0 && (
                        <h1 className="answer">{theoryPassingMarksMessage}</h1>
                    )}
                </div>
            ) : (
                <div>
                    <form onSubmit={onLabMarksFormSubmitHandler}>
                        <br />
                        <div className="form-input">
                            <label htmlFor="lab-1">
                                Lab Assessment - 1 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="lab-1"
                                type="number"
                                step="0.5"
                                placeholder="Lab Assessment Marks"
                                name="lab-1"
                                value={labMarksFormData['lab-1']}
                                onChange={onLabMarksChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="lab-2">
                                Lab Assessment - 2 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="lab-2"
                                type="number"
                                step="0.5"
                                placeholder="Lab Assessment Marks"
                                name="lab-2"
                                value={labMarksFormData['lab-2']}
                                onChange={onLabMarksChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="lab-3">
                                Lab Assessment - 3 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="lab-3"
                                type="number"
                                step="0.5"
                                placeholder="Lab Assessment Marks"
                                name="lab-3"
                                value={labMarksFormData['lab-3']}
                                onChange={onLabMarksChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="lab-4">
                                Lab Assessment - 4 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="lab-4"
                                type="number"
                                step="0.5"
                                placeholder="Lab Assessment Marks"
                                name="lab-4"
                                value={labMarksFormData['lab-4']}
                                onChange={onLabMarksChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="lab-5">
                                Lab Assessment - 5 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="lab-5"
                                type="number"
                                step="0.5"
                                placeholder="Lab Assessment Marks"
                                name="lab-5"
                                value={labMarksFormData['lab-5']}
                                onChange={onLabMarksChangeHandler}
                            />
                        </div>
                        <br />
                        <div className="form-input">
                            <label htmlFor="lab-6">
                                Lab Assessment - 6 Marks (out of 10)
                            </label>
                            <br />
                            <input
                                id="lab-6"
                                type="number"
                                step="0.5"
                                placeholder="Lab Assessment Marks"
                                name="lab-6"
                                value={labMarksFormData['lab-6']}
                                onChange={onLabMarksChangeHandler}
                            />
                        </div>
                        <br />
                        <button type="Submit">Calculate</button>
                    </form>
                    <br />
                    {labPassingMarksMessage.length > 0 && (
                        <h1 className="answer">{labPassingMarksMessage}</h1>
                    )}
                </div>
            )}
        </div>
    );
};

export default FatPassingMarks;
