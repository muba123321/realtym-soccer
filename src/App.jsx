import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchLiveScores } from "./controllers/FetchLiveScore";

function App() {
  const dispatch = useDispatch();
  // const { status } = useSelector((state) => state.football);

  useEffect(() => {
    dispatch(fetchLiveScores());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
