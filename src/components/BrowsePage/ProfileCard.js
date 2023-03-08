import React from "react";

const ProfileCard = ({ imageURL, name, age, country, eventResults }) => {
  return (
    <div className="card m-3 w-75">
      <div className="card-body">
        <div align="center" className="w-100 m-1">
          <img src={`${imageURL}`} alt="Profile" width="186" height="146" />
        </div>
        <div className="mx-3">
          <div className="row">
            <div className="col-5">Name</div>
            <div className="col-7">{name}</div>
          </div>
          <div className="row">
            <div className="col-5">Age</div>
            <div className="col-7">{age}</div>
          </div>
          <div className="row">
            <div className="col-5">Country</div>
            <div className="col-7">{country}</div>
          </div>
        </div>
        <table className="table mt-2 w-75" align="center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Event</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {eventResults?.map((result) => (
              <tr key={result.id}>
                <td>{result.eventName}</td>
                <td>
                  {result.result}
                  {result.result === 1
                    ? "st Place"
                    : result.result === 2
                    ? "nd Place"
                    : result.result === 3
                    ? "rd Place"
                    : "th Place"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileCard;
