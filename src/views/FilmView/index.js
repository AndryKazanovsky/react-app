import React from 'react';
import FilmCard from '../../components/FilmCard';
import films from '../../dicts/films';

export default function Film(props) {
  const filmId = props.match.params.id;
  const film = films.data.find(item => item.id == filmId);
  return (
    <div>
      <FilmCard data={film} />
    </div>
  );
}
