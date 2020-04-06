import React, { useState, useEffect, useCallback } from 'react';

import Logo from '../../images/logo.png';
import { LogoIMG, ListContainer, HintText } from './styles';
import FilterInput from '../../components/FilterInput';
import Modal from '../../components/Modal';
import Overlay from '../../components/Overlay';
import ListComponent from './Components/ListComponent';
import Loading from '../../components/Loading';

import { api } from '../../services/api';

export default function Main() {
  const [characters, setCharacters] = useState();
  const [currentCharacters, setCurrentCharacters] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedChar, setSelectedChar] = useState();
  const [loading, setLoading] = useState(true);

  const handleLoad = useCallback(async () => {
    const [error, response] = await api.getCharactersData();

    if (response) {
      setCurrentCharacters(response);
      setCharacters(response);
      setLoading(false);
    }
    if (error) {
      console.log(error.message);
    }
  },[]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div style={{ maxWidth: '100%', width: '100%' }}>
      <LogoIMG src={Logo} alt="logo_image" />
      <HintText>
        <h2>Clique nos personagens para visualizar suas informações.</h2>
      </HintText>
      {openModal && (
        <Overlay>
          <Modal charInfo={selectedChar[0]} modalOpened={setOpenModal} />
        </Overlay>
      )}
      {!loading && (
        <ListContainer>
          {currentCharacters && (
            <FilterInput data={characters} set={setCurrentCharacters} />
          )}

          <ListComponent
            characters={characters}
            currentCharacters={currentCharacters}
            setSelectedChar={setSelectedChar}
            setOpenModal={setOpenModal}
          />
        </ListContainer>

      )}
      {loading && (<Loading /> )}
    </div>
  );
}
