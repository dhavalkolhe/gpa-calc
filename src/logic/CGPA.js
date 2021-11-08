import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Cgpa = () => {
  const { register, handleSubmit } = useForm();
  let [total, setTotal] = useState(0);
  const onSubmit = (data) => {
    let credits = 0;
    let gpa = 0;
    for (var i = 1; i <= 8; i++) {
      credits += parseInt(data[`sem${i}-credits`]);
      gpa += parseInt(data[`sem${i}-marks`] * data[`sem${i}-credits`]);
    }
    setTotal(gpa / credits);
  };
  return (
    <div className="CGPA">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Credits</label>
        <label>Marks</label>
        <br />
        <br />
        <label>Sem-1</label>
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
        <label>Sem-2</label>
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
        <label>Sem-3</label>
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
        <label>Sem-4</label>
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
        <label>Sem-5</label>
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
        <label>Sem-6</label>
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
        <label>Sem-7</label>
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
        <label>Sem-8</label>
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
        <button type="submit">Submit</button>
      </form>
      {total !== 0 && <h1>{total}</h1>}
    </div>
  );
};
export default Cgpa;
