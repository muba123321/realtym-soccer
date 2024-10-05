import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLeague } from "../redux/soccer/soccerslice";
import { useNavigate } from "react-router-dom";

export default function LeagueCards({ leagues }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pagination, status } = useSelector((state) => state.soccer);

  const handleLoadMore = () => {
    if (pagination.has_more && status !== "loading") {
      dispatch(fetchLeagues(pagination.current_page + 1));
    }
  };

  const handleLeagureClick = (league) => {
    dispatch(selectLeague(league));
    navigate("/fixtures");
  };

  return (
    <div className="league-cards">
      {leagues.length > 0 ? (
        leagues.map((league) => (
          <div
            key={league.id}
            className="league-card"
            onClick={() => handleLeagureClick(league)}
            role="button"
            tabIndex="0"
            aria-label={`Select ${league.name}`}
          >
            <div className="league-logo">
              <img src={league.image_path} alt={`${league.name} logo`} />
            </div>
            <h3>{league.name}</h3>
          </div>
        ))
      ) : (
        <p>No leagues available</p>
      )}

      {pagination.has_more && status !== "loading" && (
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      )}

      {status === "loading" && <p>Loading more leagues...</p>}
    </div>
  );
}
