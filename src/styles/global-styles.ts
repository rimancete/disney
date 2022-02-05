import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    font-size: 1.05em;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all, 0.3s;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  button {
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 8px 20px;
    font-size: 1.2em;
    transition: all, 0.3s;
  }
  button:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
    border-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  input[type='text'] {
      font-size: 1.25em;
      width: 300px;
      border-radius: 5px;
      padding: 5px 10px;
      &::placeholder {
        font-size: 1em;
      }
  }
  .pressable {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
    border-color: transparent;
    transition: all, 0.3s;
  }
  .pressable:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .btn-only-cancel {
    width: 30%;
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
