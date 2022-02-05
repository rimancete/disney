import { Home } from '../templates/Home';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  heigth: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export default function Index() {
  return (
    <>
      <Wrapper>
        <Home />
      </Wrapper>
    </>
  );
}
