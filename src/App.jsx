import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchLeagues } from "./controllers/FetchLeagues";
import LeagueCards from "./components/LeagueCards";
import Fixtures from "./components/Fixtures";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { leagues, selectedLeague, status } = useSelector(
    (state) => state.soccer
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLeagues());
    }
  }, [dispatch, status]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {status === "loading" && <p>Loading leagues...</p>}
                {status === "success" && <LeagueCards leagues={leagues} />}
              </>
            }
          />
          <Route
            path="/fixtures"
            element={
              selectedLeague ? (
                <Fixtures leagueId={selectedLeague.id} />
              ) : (
                <p>Please select a league to view fixtures.</p>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
