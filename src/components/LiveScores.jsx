import React from "react";
import { useSelector } from "react-redux";

export default function LiveScores() {
  const liveScores = useSelector((state) => state.soccer.liveScores);
  return (
    <div className="live-scores">
      <h2>Fixtures</h2>
      <ul>
        {/* {liveScores.map(
          (match) => (
            console.log(match),
            (
              <li key={match.id}>
                <strong>{match.name}</strong> <br />
                Start Time: {new Date(match.starting_at).toLocaleString()}{" "}
                <br />
                Result: {match.result_info || "Match in Progress"}
              </li>
            )
          )
        )} */}
      </ul>
    </div>
  );
}
