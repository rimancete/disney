import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    padding: 10px;
    display: flex;
    justify-content: center;
    a {
      color: ${theme.colors.white};
      margin: 0 0 0 15px;
    }
    .logo {
      margin: 24px auto 0px;
      width: 180px;
    }
  `}
`;
