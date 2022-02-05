import * as Styled from './styles';
import { FaSearch } from 'react-icons/fa';
import Router from 'next/router';
import { env } from '../../environments';
import { useState } from 'react';

export type SearchCharacteresProps = {
  title?: string;
};

export function SearchCharacteres({ title }: SearchCharacteresProps) {
  const [string, setString] = useState('');
  const [filter, setFilter] = useState('name');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    Router.push(
      `${env.ROUTER_UTILS.base.characteres}/${
        string ? `${string}?filter=${filter}` : `%20?filter=${filter}`
      }`,
    );
  };

  return (
    <Styled.SearchContainer>
      <h1>{title}</h1>
      <div>
        <form onSubmit={onSubmit}>
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="filter-options"
            id="lang"
            value={filter}
          >
            <option value="name">Name</option>
            <option value="film">Film</option>
            <option value="tvShow">TV Show</option>
            <option value="videogame">VideoGame</option>
          </select>
          <input
            type="text"
            placeholder={`search by ${filter}`}
            value={string}
            onChange={(e) => setString(e.target.value)}
          />
          <FaSearch className="icon-pressable" onClick={onSubmit} size={24} />
        </form>
      </div>
    </Styled.SearchContainer>
  );
}
