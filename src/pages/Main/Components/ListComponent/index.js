import React from 'react';

import PropTypes from 'prop-types';
import { ItemsList, CharItem } from './styles';

function ListComponent({
  currentCharacters,
  setOpenModal,
  setSelectedChar,
  characters
}) {
  const handleOpenModal = (id) => {
    setOpenModal(true);
    const selected = characters.filter((item) => {
      return item.char_id === id;
    });
    setSelectedChar(selected);
  };

  return (
    <ItemsList>
      {currentCharacters &&
        currentCharacters.map((char) => {
          return (
            <CharItem
              onClick={() => handleOpenModal(char.char_id)}
              test-id={`List item of ${char.char_id}`}
              key={`List item of ${char.char_id}`}
            >
              <img
                src={char.img}
                alt={`img of ${char.char_id}`}
                height="100%"
                width="100%"
              />
              <div className="description">
                <h1>{char.name}</h1>
              </div>
            </CharItem>
          );
        })}
    </ItemsList>
  );
}

export default ListComponent;
ListComponent.propTypes = {
  characters: PropTypes.arrayOf(
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
    })
  ).isRequired,
  currentCharacters: PropTypes.arrayOf(
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
    })
  ).isRequired,
  setOpenModal: PropTypes.func.isRequired,
  setSelectedChar: PropTypes.func.isRequired,
};
