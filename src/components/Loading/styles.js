import styled from 'styled-components';

import ReactLoading from "react-loading";

export const CustomLoader = styled(ReactLoading)`
  margin: auto;
  height: 120px;
  width: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #fff;
`;
