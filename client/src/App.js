import React, { useState, useEffect } from "react";
import './App.css'; // Assuming you have some basic styles

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Fetching data from " + apiUrl + "/members...");
    fetch(`${apiUrl}/members`)
      .then((res) => {
        console.log("Received response:", res);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Members List</h1>
      {data.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <ul>
          {data.map((member, index) => (
            <li key={index}>{member.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
