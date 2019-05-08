import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars, imageUrl } = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-card__inner">
        <div className="movie-card__details">
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="movie-card__image">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
