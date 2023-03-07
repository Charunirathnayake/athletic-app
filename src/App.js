import { useEffect, useState } from "react";
import "./App.css";

import { getAllCountries } from "./apis/country";
import { getAllEvents } from "./apis/event";
import BrowseAthletes from "./components/BrowsePage/BrowseAthletes";
import CreateAthlete from "./components/CreatePage/CreateAthlete";

function App() {
  const [page, setPage] = useState("BROWSE");

  const [countries, setCountries] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchInitialData() {
      const countries = await getAllCountries();
      const events = await getAllEvents();

      setCountries(countries);
      setEvents(events);
    }

    fetchInitialData();
  }, []);

  return (
    <div className="container-fluid">
      {page === "BROWSE" && (
        <BrowseAthletes setPage={setPage} initialData={{ countries, events }} />
      )}
      {page === "CREATE" && (
        <CreateAthlete setPage={setPage} initialData={{ countries, events }} />
      )}
    </div>
  );
}

export default App;
