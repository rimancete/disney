import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  .modal-container.modal-hide {
    display: none;
  }
`;

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 40%;
    min-width: 300px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 29px 0px;
  `}
`;

export const Title = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleImage = styled.div`
  ${({ theme }) => css`
    width: 262px;
    height: 260px;
    overflow: hidden;
    border: 5px solid ${theme.colors.secondaryColor};
    border-radius: 5%;

    img {
      display: block;
      width: 260px;
      height: 260px;
      border-radius: 5%;
    }
  `}
`;

export const TitleText = styled.h1`
  text-align: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .category-title {
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
