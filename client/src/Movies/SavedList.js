import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <div className="saved-list__inner">
          {this.props.list.map(movie => (
            <NavLink
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="saved-list__item"
              activeClassName="saved-list__item--active"
            >
              <img src={movie.imageUrl} alt={movie.title} />
            </NavLink>
          ))}
        </div>
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
