import React from 'react';

import PropTypes from 'prop-types';
import { Container,StyledClose } from './styles';

export default function Modal({ charInfo,modalOpened }) {

  return (
    <Container>
      <StyledClose  onClick={() => modalOpened(false)  }/>
      <div className="core-informations">
        <div className="image-container">
          <img src={charInfo.img} alt={`bg of ${charInfo.char_id}`} />
        </div>
        <div className="description-container">
          <div className="description-line">
            <h1>Nome:</h1>
            <p>{charInfo.name}</p>
          </div>
          <div className="description-line">
            <h1>Aniversário:</h1>
            <p>{charInfo.birthday.split('-').join('/')}</p>
          </div>
          <div className="description-line">
            <h1>Ocupação:</h1>
            <p>{charInfo.occupation.join(', ')}</p>
          </div>
          <div className="description-line">
            <h1>Situação:</h1>
            <p>{charInfo.status}</p>
          </div>
          <div className="description-line">
            <h1>Apelido:</h1>
            <p>{charInfo.nickname}</p>
          </div>
          <div className="description-line">
            <h1>Aparece nas temporadas:</h1>
            <p>{charInfo.appearance.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="footer-informations">
        <h2>{`O personagem ${charInfo.name} é intrepertado por ${charInfo.portrayed} que atuou nas seguintes séries: ${charInfo.category}.`}</h2>
      </div>
    </Container>
  );
}

Modal.propTypes = {
  charInfo:
    PropTypes.shape({
      appearance: PropTypes.arrayOf(PropTypes.number),
      better_call_saul_appearance: PropTypes.arrayOf(PropTypes.number),
      birthday: PropTypes.string,
      category: PropTypes.string,
      char_id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string,
      nickname: PropTypes.string,
      occupation: PropTypes.arrayOf(PropTypes.string),
      portrayed: PropTypes.string,
      status: PropTypes.string,
    }).isRequired,
  modalOpened: PropTypes.func.isRequired,
};
