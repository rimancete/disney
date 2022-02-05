import React from 'react';
import * as Styled from './styles';
import Link from 'next/link';

export default function Header() {
  return (
    <Styled.Nav>
      <Link href="/" passHref>
        <a>
          <img alt="logo" src="/assets/images/logo.png" className="logo" />
        </a>
      </Link>
    </Styled.Nav>
  );
}
