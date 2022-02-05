import * as Styled from './styles';
import { FaSearch, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import axios from '../../services';
import { useEffect, useState } from 'react';
import CharacterModal from '../CharacterModal';
import Loading from '../../components/Loading';
import toast from 'react-hot-toast';
import { timer } from '../../lib/toast';
import { FilterOptionsEnum } from '../../data/enums';

type ListCharacteresProps = {
  string: string | string[];
  filter: string | string[];
};

export interface DataFiltered {
  imageUrl: string;
  name: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  enemies: string[];
  allies: string[];
}

export function ListCharacteres({ string, filter }: ListCharacteresProps) {
  const [data, setData] = useState<[]>([]);
  const [dataFiltered, setDataFiltered] = useState<DataFiltered[]>();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<DataFiltered>();
  const [isLoading, setIsLoading] = useState(false);
  const [filterEnum] = useState(
    filter === 'name'
      ? FilterOptionsEnum.NAME
      : filter === 'tvShow'
      ? FilterOptionsEnum.TV_SHOW
      : filter === 'film'
      ? FilterOptionsEnum.FILM
      : FilterOptionsEnum.VIDEOGAME,
  );

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(`characters`)
      .then(({ data }) => {
        setData(data.data);
        setIsLoading(false);
        toast.success(`Pesquisa realizada com sucesso`, {
          duration: timer().success,
        });
      })
      .catch(() => {
        setIsLoading(false);
        toast.error(`Falha ao pesquisar os dados`, {
          duration: timer().error,
        });
      });
  };

  const enableModal = async (data: DataFiltered) => {
    setModalVisible(false);
    setModalData(data);
  };
  useEffect(() => {
    setModalVisible(true);
  }, [modalData, modalVisible]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    data && typeof string === 'string' && string === ' '
      ? setDataFiltered(data)
      : filterEnum === FilterOptionsEnum.NAME
      ? setDataFiltered(
          data.filter(
            (item: DataFiltered) =>
              typeof string === 'string' && item.name.includes(string),
          ),
        )
      : filterEnum === FilterOptionsEnum.FILM
      ? setDataFiltered(
          data.filter(
            (item: DataFiltered) =>
              typeof string === 'string' &&
              item.films.find((category) => category.includes(string)),
          ),
        )
      : filterEnum === FilterOptionsEnum.TV_SHOW
      ? setDataFiltered(
          data.filter(
            (item: DataFiltered) =>
              typeof string === 'string' &&
              item.tvShows.find((category) => category.includes(string)),
          ),
        )
      : setDataFiltered(
          data.filter(
            (item: DataFiltered) =>
              typeof string === 'string' &&
              item.videoGames.find((category) => category.includes(string)),
          ),
        );
  }, [data, string, filterEnum]);

  return (
    <Styled.BackToSearch>
      <Loading isLoading={isLoading} />
      <Link href="/" passHref>
        <a>
          <FaSearch size={32} />
          <h1>Back to search</h1>
        </a>
      </Link>
      <Styled.CharactersContainer>
        {dataFiltered &&
          dataFiltered.map((character, index) => (
            <div key={index} className="content">
              <div className="card-content">
                <div
                  className="pressable"
                  onClick={() => enableModal(character)}
                >
                  <Styled.ThumbImage>
                    <img src={`${character.imageUrl}`} />
                  </Styled.ThumbImage>
                </div>
                <div
                  className="pressable"
                  onClick={() => enableModal(character)}
                >
                  <span className="name">{character.name}</span>
                </div>
                <div
                  className="pressable"
                  onClick={() => enableModal(character)}
                >
                  <FaEye id="details" size={32} />
                </div>
              </div>
              {index + 1 < dataFiltered.length && (
                <div className="overlay"></div>
              )}
            </div>
          ))}
      </Styled.CharactersContainer>

      {modalVisible && modalData && (
        <CharacterModal modalVisible={modalVisible} data={modalData} />
      )}
    </Styled.BackToSearch>
  );
}
