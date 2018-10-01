import React from 'react';
import './FilmCard.css';

export default function FilmCard({ data, onClick }) {
  const { image, title, description, id, actors, year } = data;
  const imageContainerStyle = {
    backgroundImage: `url('${image}')`,
  };
  return (
    <div className={'film-container'}>
      <div className={'film-card'}>
        <div className={'film-image'} style={imageContainerStyle} />
        <div className={'content-container'}>
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
      </div>
    </div>
  );
}
