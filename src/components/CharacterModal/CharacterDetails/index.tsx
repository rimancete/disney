import React from 'react';
import { DataFiltered } from '../../ListCharacteres';

interface CharacterDetailsProps {
  data: DataFiltered;
  type: 'F' | 'SF' | 'TV' | 'VG' | 'E' | 'A';
}

export default function CharacterDetails({
  data,
  type,
}: CharacterDetailsProps) {
  return (
    <>
      {type === 'F' && (
        <div className="description">
          <div className="description-title">
            <h2 className="description-title__text">Filmes: </h2>
          </div>
          <div>
            {data.films.length > 0 ? (
              data.films.map((item, index) => (
                <p key={index}>
                  {`${item}`}
                  {index + 1 < data.films.length ? `,` : ``}
                </p>
              ))
            ) : (
              <p className="description__no-data-text">Nenhum</p>
            )}
          </div>
        </div>
      )}
      {type === 'SF' && (
        <div className="description">
          <div className="description-title">
            <h2 className="description-title__text">Curtas: </h2>
          </div>
          <div>
            {data.shortFilms.length > 0 ? (
              data.shortFilms.map((item, index) => (
                <p key={index}>
                  {`${item}`}
                  {index + 1 < data.shortFilms.length ? `,` : ``}
                </p>
              ))
            ) : (
              <p className="description__no-data-text">Nenhum</p>
            )}
          </div>
        </div>
      )}
      {type === 'TV' && (
        <div className="description">
          <div className="description-title">
            <h2 className="description-title__text">Programas de TV: </h2>
          </div>
          <div>
            {data.tvShows.length > 0 ? (
              data.tvShows.map((item, index) => (
                <p key={index}>
                  {`${item}`}
                  {index + 1 < data.tvShows.length ? `,` : ``}
                </p>
              ))
            ) : (
              <p className="description__no-data-text">Nenhum</p>
            )}
          </div>
        </div>
      )}
      {type === 'VG' && (
        <div className="description">
          <div className="description-title">
            <h2 className="description-title__text">Games: </h2>
          </div>
          <div>
            {data.videoGames.length > 0 ? (
              data.videoGames.map((item, index) => (
                <p key={index}>
                  {`${item}`}
                  {index + 1 < data.videoGames.length ? `,` : ``}
                </p>
              ))
            ) : (
              <p className="description__no-data-text">Nenhum</p>
            )}
          </div>
        </div>
      )}
      {type === 'E' && (
        <div className="description">
          <div className="description-title">
            <h2 className="description-title__text">Inimigos: </h2>
          </div>
          <div>
            {data.enemies.length > 0 ? (
              data.enemies.map((item, index) => (
                <p key={index}>
                  {`${item}`}
                  {index + 1 < data.enemies.length ? `,` : ``}
                </p>
              ))
            ) : (
              <p className="description__no-data-text">Nenhum</p>
            )}
          </div>
        </div>
      )}
      {type === 'A' && (
        <div className="description">
          <div className="description-title">
            <h2 className="description-title__text">Aliados: </h2>
          </div>
          <div>
            {data.allies.length > 0 ? (
              data.allies.map((item, index) => (
                <p key={index}>
                  {`${item}`}
                  {index + 1 < data.allies.length ? `,` : ``}
                </p>
              ))
            ) : (
              <p className="description__no-data-text">Nenhum</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
