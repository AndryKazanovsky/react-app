import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
import films from '../../dicts/films';
import FilmCard from '../../components/FilmCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: films.data,
      reverseStatus: 'up',
      sortYearValue: 'newest',
      sortNameValue: 'a-z'
    };
  }
  onCardClick = id => {
    this.props.history.push(`film/${id}`);
  };
  reverseFilms = () => {
    this.setState({
      films: films.data.reverse(),
      reverseStatus: this.state.reverseStatus === 'up' ? 'down' : 'up',
    });
  };
  sortByName = () => {
    const { sortNameValue } = this.state;
    const sortedFilmsByName = films.data.sort((a, b) => a.title - b.title);
    this.setState({
        // films: sortNameValue === 'a-z' ?
            sortNameValue: 'a-z' ? 'a-z' :
    })
  };

  sortByYear = () => {
    const { sortYearValue } = this.state;
    this.setState({
      films: films.data.sort((a, b) => {
        return sortYearValue === 'newest' ? a.year - b.year : b.year - a.year;
      }),
      sortYearValue: sortYearValue === 'newest' ? 'oldest' : 'newest',
    });
  };
  render() {
    const { films, reverseStatus, sortYearValue } = this.state;
    return (
      <div className={'home'}>
        <div onClick={this.reverseFilms}>
          reverse {reverseStatus === 'up' ? '^' : 'v'}
        </div>
        <div onClick={this.sortByName}>sort by name</div>
        <div onClick={this.sortByYear}>
          sort by year {`(${sortYearValue} first)`}
        </div>
        // select с выбором года фильма. при выборе года - фильтруй фильмы на
        совпадение по году
        {films.map(film => (
          <FilmCard key={film.id} data={film} onClick={this.onCardClick} />
        ))}
      </div>
    );
  }
}

export default withRouter(Home);
