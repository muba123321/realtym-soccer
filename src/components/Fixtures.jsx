import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFixtures } from "../controllers/FetchFixtures";

export default function Fixtures({ leagueId }) {
  const dispatch = useDispatch();
  const { fixtures, status } = useSelector((state) => state.soccer);

  useEffect(() => {
    dispatch(fetchFixtures(leagueId));
  }, [dispatch, leagueId]);

  return (
    <div className="fixtures">
      <h2>Fixtures</h2>
      {status === "loading" && <p>Loading fixtures...</p>}
      {status === "success" && (
        <ul>
          {fixtures.map(
            (fixture) => (
              console.log(fixture),
              (
                <li key={fixture.id}>
                  <strong>{fixture.name}</strong> <br />
                  Start Time: {new Date(
                    fixture.starting_at
                  ).toLocaleString()}{" "}
                  <br />
                  Result: {fixture.result_info || "Match in Progress"}
                </li>
              )
            )
          )}
        </ul>
      )}
    </div>
  );
}
