import React from 'react';
import films from '../../dicts/films';
import './styles.css';

export default function Home() {
  return (
    <div className={'home'}>
      {films.data.map(film => {
        return (
          <div className={'film'} key={film.id}>
            <img className={'film-image'} src={film.image} alt=""/>
            <a>{film.title}</a>
            <p>{film.description}</p>
            <p>{film.year}</p>
            <p>
              {film.actors.map((actor, i, array) => {
                const isLast = i + 1 === array.length;
                return (
                  <a key={actor}>
                    {`${actor}${isLast ? '' : ', '}`}
                  </a>
                );
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}
