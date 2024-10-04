import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchLiveScores } from "./controllers/FetchLiveScore";
import LiveScores from "./components/LiveScores";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.soccer);

  useEffect(() => {
    dispatch(fetchLiveScores());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {status === "loading" && <p> Loading live Score...</p>}
      {status === "success" && <LiveScores />}
      {status === "failed" && <p> Failed fetching live score!!!</p>}
    </div>
  );
}

export default App;
