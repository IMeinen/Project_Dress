import React from 'react';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';
import { SearchInput, InputContainer } from './styles';
import { filterData } from '../../utils/filterData';

export default function FilterInput({ data, set }) {
  return (
    <InputContainer>
      <SearchInput
        placeholder="Digite o nome de um personagem"
        onChange={(event) => set(filterData(data, event.currentTarget.value))}
      />
      <GoSearch size={24} color="#fff" />
    </InputContainer>
  );
}

FilterInput.propTypes = {
  data: PropTypes.arrayOf(
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
  set: PropTypes.func.isRequired,
};
