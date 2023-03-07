import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { searchAthlete, getAllAthletes } from "../../apis/athlete";

const BrowseAthletes = ({ setPage, initialData }) => {
  const [searchContext, setSearchContext] = useState({
    name: "",
    gender: "",
    country: "",
    event: "",
  });
  const [results, setResults] = useState([]); 

  useEffect(() => {
    handleGetAllAthletes();
  }, []);

  const handleGetAllAthletes = async () => {
    const res = await getAllAthletes();
    setResults(res);
  };

  const handleSetSearch = (e) => {
    setSearchContext({ ...searchContext, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    searchAthlete(
      searchContext.name,
      searchContext.event,
      searchContext.country,
      searchContext.gender
    ).then((res) => {
      setResults(res);
    });
  };

  const handleClearSearch = () => {
    setSearchContext({
      name: "",
      gender: "",
      country: "",
      event: "",
    });

    handleGetAllAthletes();
  };

  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <div className="row">
            <div className="col-6 mb-3">
              <h1>Search Athlete</h1>
            </div>
            <div className="col-6">
              <div className="float-end">
                <button className="m-1 btn btn-primary" onClick={handleSearch}>
                  Search
                </button>
                <button
                  className="m-1 btn btn-secondary"
                  onClick={handleClearSearch}
                >
                  Clear
                </button>
                <button
                  className="m-1 btn btn-dark"
                  onClick={() => setPage("CREATE")}
                >
                  New
                </button>
              </div>
            </div>
            <div>
              <div className="row mb-2">
                <div className="col-2">
                  <label className="form-label">Name</label>
                </div>
                <div className="col-4 ">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={searchContext.name}
                    onChange={handleSetSearch}
                  />
                </div>
                <div className="col-2">
                  <label className="form-label">Gender</label>
                </div>
                <div className="col-4 ">
                  <select
                    className="form-select"
                    name="gender"
                    value={searchContext.gender}
                    onChange={handleSetSearch}
                  >
                    <option hidden>Select Gender</option>
                    <option value="male" key="male">
                      Male
                    </option>
                    <option value="female" key="female">
                      Female
                    </option>
                  </select>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-2">
                  <label className="form-label">Country</label>
                </div>
                <div className="col-4 ">
                  <select
                    className="form-select"
                    name="country"
                    value={searchContext.country}
                    onChange={handleSetSearch}
                  >
                    <option hidden>Select Country</option>
                    {initialData?.countries?.map((country) => (
                      <option
                        value={country.countryName}
                        key={"country" + country.id}
                      >
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="form-label">Event</label>
                </div>
                <div className="col-4">
                  <select
                    className="form-select"
                    name="event"
                    value={searchContext.event}
                    onChange={handleSetSearch}
                  >
                    <option hidden>Select Event</option>
                    {initialData?.events?.map((event) => (
                      <option
                        name="event"
                        vauelue={event.name}
                        key={"country" + event.id}
                      >
                        {event.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            {results?.map((result) => (
              <div key={result.id} className="col-4">
                <ProfileCard
                  imageURL={result.image}
                  name={result.firstName + " " + result.lastName}
                  age={result.age}
                  country={result.country}
                  eventResults={result.eventParticipationDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseAthletes;
