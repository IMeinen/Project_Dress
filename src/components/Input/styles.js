import styled from 'styled-components';

export const CustomInput = styled.input`
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  line-height: 1.2em;
  text-decoration: none;
  text-transform: none;
  letter-spacing: 0.2px;
  padding: 1em 2em;
  height: 4.47em;
  border: 2px solid;
  border-color: #f6f4f0;
  background-color: #f6f4f0;
  box-sizing: border-box;
  -webkit-appearance: none;
  outline: none;
  appearance: none;
  margin-top: 20px;
  width: 60%;
  &:hover {
    border: 2px solid;
    border-color: #373739;
  }

  ::placeholder{
    color: #444;
  }
`;
