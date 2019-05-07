import React, { Component } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    const savedList = this.props.savedList;
    const id = this.state.movie.id;
    let isSaved = savedList.filter(x => x.id === id).length > 0 ? true : false;
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div onClick={this.saveMovie} className="save-button">
          {!isSaved ? 'Save' : 'Remove'}
        </div>
      </div>
    );
  }
}
