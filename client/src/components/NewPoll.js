import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewPoll = props => {
  const { name } = props;
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();
  const [errs, setErrs] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/polls", {
        name,
        question,
        option1,
        option2,
        option3,
        option4
      })
      .then(res => {
        if (res.data.errors) {
          const errorResponse = res.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) {
            // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message);
          }
          // Set Errors
          setErrs(errorArr);
        } else {
          navigate("/dashboard");
        }
      });
  };

  return (
    <div className="container">
      <h3>Add a New Poll</h3>
      <div>
        {errs.map(err => (
          <p className="small text-danger">{err}</p>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">Question</label>
          <input
            type="text"
            onChange={e => setQuestion(e.target.value)}
            className="form-control form-control-sm w-50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Option 1</label>
          <input
            type="text"
            onChange={e =>
              setOption1({ ...option1, option: e.target.value, vote: 0 })
            }
            className="form-control form-control-sm w-50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Option 2</label>
          <input
            type="text"
            onChange={e =>
              setOption2({ ...option2, option: e.target.value, vote: 0 })
            }
            className="form-control form-control-sm w-50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Option 3</label>
          <input
            type="text"
            onChange={e =>
              setOption3({ ...option3, option: e.target.value, vote: 0 })
            }
            className="form-control form-control-sm w-50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Option 4</label>
          <input
            type="text"
            onChange={e =>
              setOption4({ ...option4, option: e.target.value, vote: 0 })
            }
            className="form-control form-control-sm w-50"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewPoll;
