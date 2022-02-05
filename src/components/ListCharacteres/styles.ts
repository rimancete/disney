import styled, { css } from 'styled-components';

export const BackToSearch = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteLarge} {
      width: 850px;
      margin-top: ${theme.spacings.huge};
      display: flex;
      z-index: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.white};
      border-radius: 10px;
      padding-top: ${theme.spacings.medium};
    },
  `}
`;

export const CharactersContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;
    width: 100%;
    padding: 0 20px;
    img {
      display: inline;
    }
    .name {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }
    .content {
      width: 100%;
    }
    .card-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
    }
    .overlay {
      width: 100%
      height: 1px;
      border-top: 1px solid ${theme.colors.mediumGray};
    }
  `}
`;

export const ThumbImage = styled.div`
  ${({ theme }) => css`
    width: 202px;
    height: 200px;
    overflow: hidden;
    border: 5px solid ${theme.colors.secondaryColor};
    border-radius: 5%;

    img {
      display: block;
      width: 200px;
      height: 200px;
      border-radius: 5%;
    }
  `}
`;
