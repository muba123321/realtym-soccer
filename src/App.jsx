import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
// import { fetchLiveScores } from "./controllers/FetchFixtures";
// import LiveScores from "./components/LiveScores";
import { fetchLeagues } from "./controllers/FetchLeagues";
import LeagueCards from "./components/LeagueCards";

function App() {
  const dispatch = useDispatch();
  const { leagues, selectedLeague, status } = useSelector(
    (state) => state.soccer
  );

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {status === "loading" && <p>Loading leagues...</p>}
      {status === "success" && <LeagueCards leagues={leagues} />}
      {/* {selectedLeague && <Fixtures leagueId={selectedLeague.id} />} */}
    </div>
  );
}

export default App;
