
import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 550px;
  background-color: #256136;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px 0px 10px 5px;

  @media only screen and (max-width: 468px) {
    width: 90%;
    margin: 5px 0px 10px 0px;
  }
`;

export const SearchInput = styled.input`
  background-color: #256136;
  border-style: none;
  width: 500px;
  line-height: 46px;
  padding-left: 10px;
  color: #fff;
  font-size: 22px;

  ::placeholder{
    color: #fff;
    font-style: italic;
    font-size: 14px;
  }

  @media only screen and (max-width: 468px) {
    width: 80%;

  }
`;
