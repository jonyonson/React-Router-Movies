import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (savedList.filter(x => x.id === movie.id).length > 0) {
      // console.log('That movie is already saved');
      const newList = savedList.filter(x => x.id !== movie.id);
      this.setState({ savedList: newList });
    } else {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie
              {...props}
              savedList={this.state.savedList}
              addToSavedList={this.addToSavedList}
            />
          )}
        />
      </div>
    );
  }
}
