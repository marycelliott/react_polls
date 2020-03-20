import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const AllPolls = props => {
  const { name, setName } = props;
  const [polls, setPolls] = useState([]);

  const fetchPolls = () => {
    axios.get("http://localhost:8000/api/polls").then(res => {
      setPolls(res.data);
    });
  };
  useEffect(() => {
    if (!name) {
      navigate("/");
    } else {
      fetchPolls();
    }
  }, []);

  const deletePoll = id => {
    axios
      .delete("http://localhost:8000/api/polls/" + id)
      .then(res => fetchPolls());
  };

  return (
    <div className="container">
      <h1 className="display-4 mb-3">Current Polls</h1>
      <Link to="/create" role="button" className="btn btn-secondary">
        Add New
      </Link>
      <button
        onClick={() => {
          setName(null);
          navigate("/");
        }}
        className="btn btn-info"
      >
        Logout
      </button>
      <table className="table table-sm table-striped">
        <thead>
          <th>Name</th>
          <th>Poll Question</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {polls.map(poll => (
            <tr>
              <td>{poll.name}</td>
              <td>
                <Link to={"/poll/" + poll._id}>{poll.question}</Link>
              </td>
              <td>
                {poll.name === name ? (
                  <button
                    onClick={() => deletePoll(poll._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPolls;
