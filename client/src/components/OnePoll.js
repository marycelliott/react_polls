import React, { useState, useEffect } from "react";
import axios from "axios";

const OnePoll = props => {
  const [poll, setPoll] = useState({});
  const [option1, setOption1] = useState({});
  const [option2, setOption2] = useState({});
  const [option3, setOption3] = useState({});
  const [option4, setOption4] = useState({});

  const { name, question } = poll;
  useEffect(() => {
    axios.get("http://localhost:8000/api/polls/" + props.id).then(res => {
      console.log(res);
      setPoll(res.data);
      setOption1(res.data.option1);
      setOption2(res.data.option2);
      setOption3(res.data.option3);
      setOption4(res.data.option4);
    });
  }, []);

  useEffect(() => {
    axios
      .put("http://localhost:8000/api/polls/" + props.id, {
        name,
        question,
        option1,
        option2,
        option3,
        option4
      })
      .then(res => {
        console.log(res);
      });
  }, [option1, option2, option3, option4]);

  return (
    <div className="container">
      <h2>{poll.question}</h2>
      <table className="table table-sm table-striped">
        <thead>
          <th>Option</th>
          <th># of Votes</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>{option1.option}</td>
            <td>{option1.vote}</td>
            <td>
              <button
                onClick={() =>
                  setOption1({ ...option1, vote: option1.vote + 1 })
                }
                className="btn btn-success"
              >
                Vote
              </button>
            </td>
          </tr>

          <tr>
            <td>{option2.option}</td>
            <td>{option2.vote}</td>
            <td>
              <button
                onClick={() =>
                  setOption2({ ...option2, vote: option2.vote + 1 })
                }
                className="btn btn-success"
              >
                Vote
              </button>
            </td>
          </tr>

          <tr>
            <td>{option3.option}</td>
            <td>{option3.vote}</td>
            <td>
              <button
                onClick={() =>
                  setOption3({ ...option3, vote: option3.vote + 1 })
                }
                className="btn btn-success"
              >
                Vote
              </button>
            </td>
          </tr>

          <tr>
            <td>{option4.option}</td>
            <td>{option4.vote}</td>
            <td>
              <button
                onClick={() =>
                  setOption4({ ...option4, vote: option4.vote + 1 })
                }
                className="btn btn-success"
              >
                Vote
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OnePoll;
