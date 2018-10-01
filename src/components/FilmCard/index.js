import React from 'react';
import './style.css';

export default function FilmCard({ data, onClick }) {
  const { image, title, description, id, actors, year } = data;
  return (
    <div className={'film-card'}>
      <img className={'film-image'} src={image} alt="" />
      {onClick ? (
        <div onClick={() => onClick(id)}>{title}</div>
      ) : (
        <p>{title}</p>
      )}
      <p>{description}</p>
      <p>{year}</p>
      <p>
        {actors.map((actor, i, array) => {
          const isLast = i + 1 === array.length;
          return <a key={actor}>{`${actor}${isLast ? '' : ', '}`}</a>;
        })}
      </p>
    </div>
  );
}
