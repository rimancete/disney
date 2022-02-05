import React from 'react';
import { DataFiltered } from '../ListCharacteres';
import CharacterDetails from './CharacterDetails';
import * as Styled from './styles';

interface CharacterModalProps {
  modalVisible: boolean;
  data: DataFiltered;
}

export default function CharacterModal({
  modalVisible,
  data,
}: CharacterModalProps) {
  const handleClose = async () => {
    document.querySelector('.modal-container').classList.add('modal-hide');
  };
  return (
    <Styled.ModalContainer>
      <Styled.ModalBackground
        onClick={handleClose}
        id="dv-modal"
        className="modal-container"
      >
        {modalVisible && (
          <Styled.ModalContent>
            <Styled.Title>
              <Styled.TitleImage>
                <img src={`${data.imageUrl}`} />
              </Styled.TitleImage>
              <Styled.TitleText>{data.name}</Styled.TitleText>
            </Styled.Title>
            <Styled.Body>
              <Styled.BodyCategory>
                <CharacterDetails data={data} type="F" />
              </Styled.BodyCategory>
              <Styled.BodyCategory>
                <CharacterDetails data={data} type="SF" />
              </Styled.BodyCategory>
              <Styled.BodyCategory>
                <CharacterDetails data={data} type="TV" />
              </Styled.BodyCategory>
              <Styled.BodyCategory>
                <CharacterDetails data={data} type="VG" />
              </Styled.BodyCategory>
              <Styled.BodyCategory>
                <CharacterDetails data={data} type="E" />
              </Styled.BodyCategory>
              <Styled.BodyCategory>
                <CharacterDetails data={data} type="A" />
              </Styled.BodyCategory>
            </Styled.Body>
            <Styled.ButtonContainer>
              <button
                className="btn-only-cancel"
                onClick={handleClose}
                type="submit"
              >
                FECHAR
              </button>
            </Styled.ButtonContainer>
          </Styled.ModalContent>
        )}
      </Styled.ModalBackground>
    </Styled.ModalContainer>
  );
}
