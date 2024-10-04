import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LeagueCards({ leagues }) {
  console.log(leagues);
  const dispatch = useDispatch();
  const { pagination } = useSelector((state) => state.soccer);

  const handleLoadMore = () => {
    if (pagination.has_more) {
      dispatch(fetchLeagues(pagination.current_page + 1));
    }
  };
  return (
    <div className="league-cards">
      {leagues.map((league) => (
        <div key={league.id} className="league-card">
          <img src={league.image_path} alt={league.name} />
          <h3>{league.name}</h3>
          {/* <p>Country: {league.country.name}</p> */}
        </div>
      ))}
      {pagination.has_more && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
