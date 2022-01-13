import React, { useState } from 'react';

const Gpacalc = () => {
    const [sub, setSub] = useState(0);
    const credits = [];
    const gp = [];
    const list1 = [];
    let sum = 0;
    let gpa = 0;
    const [result, setResult] = useState(0);
    let evaluate = (e) => {
        for (let i = 0; i < credits.length; i++) {
            gpa += parseInt(credits[i]) * parseInt(gp[i]);
            sum += parseInt(credits[i]);
        }
        setResult(gpa / sum);
        e.preventDefault();
    };
    for (var i = 0; i < sub; i++) {
        list1.push(
            <div>
                <select
                    name="credits"
                    onChange={(e) => credits.push(parseInt(e.target.value))}
                >
                    <option value="0" selected>
                        0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select
                    name="grades"
                    onChange={(e) => gp.push(parseInt(e.target.value))}
                >
                    <option value="10">S</option>
                    <option value="9">A</option>
                    <option value="8">B</option>
                    <option value="7">C</option>
                    <option value="6">D</option>
                    <option value="5">E</option>
                    <option value="0" selected>
                        F
                    </option>
                </select>
                <br />
            </div>
        );
    }
    return (
        <div className="gpacalc">
            <form>
                <h5>Enter no. of Subjects:</h5>
                <input
                    type="number"
                    value={sub}
                    onChange={(e) => parseInt(setSub(e.target.value))}
                />
            </form>
            <br />
            <div>
                <form>
                    <h5>Enter Grade and Credits for each Subject</h5>
                    {list1}
                    <button onClick={(e) => evaluate(e)}>Calculate</button>
                </form>
            </div>
            {result && <h1>{result}</h1>}
        </div>
    );
};

export default Gpacalc;
