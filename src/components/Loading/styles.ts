import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: 30px;

    span {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.65);
    }
  `}
`;
