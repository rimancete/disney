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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    Router.push(
      `${env.ROUTER_UTILS.base.characteres}/${string ? string : '%20'}`,
    );
  };

  return (
    <Styled.SearchContainer>
      <h1>{title}</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="search by name"
            value={string}
            onChange={(e) => setString(e.target.value)}
          />
          <FaSearch size={24} />
        </form>
      </div>
    </Styled.SearchContainer>
  );
}
