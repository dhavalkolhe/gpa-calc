// import { SmokeFreeSharp } from "@mui/icons-material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Cgpa = () => {
  const [semesters, setSemesters] = useState(0);
  const semesterList = [];
  const { register, handleSubmit } = useForm();
  let [total, setTotal] = useState(0);
  const onSubmit = (data) => {
    console.log(data);
    let credits = 0;
    let gpa = 0;
    for (let i = 1; i <= semesters; i++) {
      credits += parseFloat(data[`sem${i}-credits`]);
      gpa += parseFloat(data[`sem${i}-marks`] * data[`sem${i}-credits`]);
    }
    setTotal((gpa / credits).toFixed(2));
  };

  // generate inputs for number of semesters
  for (let i = 0; i < semesters; i++) {
    semesterList.push(
      <div key={i}>
        <label htmlFor="">Semester {i + 1}: </label>
        <br />
        <input
          type="number"
          step="0.5"
          {...register(`sem${i+1}-credits`)}
          name={`sem${i+1}-credits`}
          defaultValue={0}
          placeholder="Total Credits"
        />
        <input
          type="number"
          {...register(`sem${i}-marks`)}
          name={`sem${i+1}-marks`}
          placeholder="GPA"
          defaultValue={0}
          step="0.01"
        />
      </div>
    )
  }
  return (
    <div className="CGPA">
      <form>
        <h6>Semester Count: </h6>
        <input type="number" onChange={(e) => setSemesters(e.target.value)} />
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>{semesterList}</div>
        <br />
        <br />
        {semesters > 0 && <button type="Submit">Calculate</button>}
      </form>
      {total !== 0 && <p className="answer">CGPA: {total}</p>}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <label>Sem-1</label>
        <br />
        <input
          type="number"
          {...register("sem1-credits")}
          name="sem1-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem1-marks")}
          name="sem1-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <label>Sem-2</label>
        <br />
        <input
          type="number"
          {...register("sem2-credits")}
          name="sem2-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem2-marks")}
          name="sem2-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <label>Sem-3</label>
        <br />
        <input
          type="number"
          {...register("sem3-credits")}
          name="sem3-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem3-marks")}
          name="sem3-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <label>Sem-4</label>
        <br />
        <input
          type="number"
          {...register("sem4-credits")}
          name="sem4-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem4-marks")}
          name="sem4-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <label>Sem-5</label>
        <br />
        <input
          type="number"
          {...register("sem5-credits")}
          name="sem5-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem5-marks")}
          name="sem5-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <label>Sem-6</label>
        <br />
        <input
          type="number"
          {...register("sem6-credits")}
          name="sem6-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem6-marks")}
          name="sem6-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <label>Sem-7</label>
        <br />
        <input
          type="number"
          {...register("sem7-credits")}
          name="sem7-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem7-marks")}
          name="sem7-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <label>Sem-8</label>
        <br />
        <input
          type="number"
          {...register("sem8-credits")}
          name="sem8-credits"
          defaultValue={0}
        />
        <input
          type="number"
          {...register("sem8-marks")}
          name="sem8-marks"
          defaultValue={0}
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form> */}
      {/* {total !== 0 && <h1>{total}</h1>} */}
    </div>
  );
};
export default Cgpa;
