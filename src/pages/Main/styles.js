import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 5% 10% 5% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 468px) {
     padding: 0;
     margin-top: -30px;
    }


`;
