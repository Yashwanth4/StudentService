import React, { useState } from "react";

function update({ firstN, lastN, mn, ads }) {
  const [firstName, setFirstName] = useState(firstN);
  const [lastName, setLastName] = useState(lastN);
  const [matriculationNumber, setMatriculationNumber] = useState(
    mn
  );
  const [address, setAddress] = useState(ads);

  const handle = (e, set) => {
    set(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        return handle(e, setFirstName);
        break;
      case "lastName":
        return handle(e, setLastName);
        break;
      case "matriculationNumber":
        return handle(e, setMatriculationNumber);
        break;
      case "address":
        return handle(e, setAddress);
        break;
      default:
        return;
    }
  };

  async function Updatedata(url = "", data = {}) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleSubmit = () => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      MatriculationNumber: matriculationNumber,
      Addres: address,
    };
    Updatedata("http://localhost:8080/students", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          FirstName
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="firstName"
            id="firstName"
            value={firstName}
            type="text"
          />
        </label>
        <label htmlFor="lastName">
          LastName
          <input
            name="lastName"
            onChange={(e) => {
              handleChange(e);
            }}
            id="lastName"
            value={lastName}
            type="text"
          />
        </label>
        <label htmlFor="matriculationNumber">
          matriculationNumber
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="matriculationNumber"
            id="matriculationNumber"
            value={matriculationNumber}
            type="text"
          />
        </label>
        <label htmlFor="Address">
          Address
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="address"
            id="Address"
            value={address}
            type="text"
          />
        </label>
      </form>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default update;