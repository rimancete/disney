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
        <>
          <h2 className="category-title">Filmes: </h2>
          {data.films.length > 0 ? (
            data.films.map((item, index) => (
              <p key={index}>
                {`\xa0${item}`}
                {index + 1 < data.films.length ? `,` : ``}
              </p>
            ))
          ) : (
            <p>Nenhum</p>
          )}
        </>
      )}
      {type === 'SF' && (
        <>
          <h2 className="category-title">Curtas: </h2>
          {data.shortFilms.length > 0 ? (
            data.shortFilms.map((item, index) => (
              <p key={index}>
                {`\xa0${item}`}
                {index + 1 < data.shortFilms.length ? `,` : ``}
              </p>
            ))
          ) : (
            <p>{`\xa0Nenhum`}</p>
          )}
        </>
      )}
      {type === 'TV' && (
        <>
          <h2 className="category-title">Programas de TV: </h2>
          {data.tvShows.length > 0 ? (
            data.tvShows.map((item, index) => (
              <p key={index}>
                {`\xa0${item}`}
                {index + 1 < data.tvShows.length ? `,` : ``}
              </p>
            ))
          ) : (
            <p>{`\xa0Nenhum`}</p>
          )}
        </>
      )}
      {type === 'VG' && (
        <>
          <h2 className="category-title">Games: </h2>
          {data.videoGames.length > 0 ? (
            data.videoGames.map((item, index) => (
              <p key={index}>
                {`\xa0${item}`}
                {index + 1 < data.videoGames.length ? `,` : ``}
              </p>
            ))
          ) : (
            <p>{`\xa0Nenhum`}</p>
          )}
        </>
      )}
      {type === 'E' && (
        <>
          <h2 className="category-title">Inimigos: </h2>
          {data.enemies.length > 0 ? (
            data.enemies.map((item, index) => (
              <p key={index}>
                {`\xa0${item}`}
                {index + 1 < data.enemies.length ? `,` : ``}
              </p>
            ))
          ) : (
            <p>{`\xa0Nenhum`}</p>
          )}
        </>
      )}
      {type === 'A' && (
        <>
          <h2 className="category-title">Aliados: </h2>
          {data.allies.length > 0 ? (
            data.allies.map((item, index) => (
              <p key={index}>
                {`\xa0${item}`}
                {index + 1 < data.allies.length ? `,` : ``}
              </p>
            ))
          ) : (
            <p>{`\xa0Nenhum`}</p>
          )}
        </>
      )}
    </>
  );
}
