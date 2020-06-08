import {MEASURE_LIST} from '../images/Medidas/constants';

export const findTable = (size) => {
  const res = MEASURE_LIST.find(item => item.link === size);

  return res.image;
}
