import { FilterOptions } from '../constants/FilterOptions';

// ORDENA POR PONTOS
const orderByPoints = ( a, b ) => {
  if ( a.points > b.points ){
    return -1;
  }
  if ( a.points < b.points ){
    return 1;
  }
  return 0;
}


export const filterData = (data) => {
  const res = FilterOptions.map((item,index) => {
    let points = 0;

    // DETALHES
    if (
      item.toppings.includes(data.toppings) ||
      (data.toppings === 'limpo,liso' &&
        (item.toppings.includes('liso') || item.toppings.includes('liso')))
    ) {
      points += 1.5;
    }
    // ESTRUTURA
    if (item.structure.includes(data.structure)) {
      points += 1.5;
    }
    // LOCAL
    if(item.location.includes(data.location)){
      points += 1.4;
    }
    // COR
    if((item.color.includes(data.color) || data.color === 'branco,off')){
      points += 1.3;
    }
     // TIPO DE CORPO
     if(item.body.includes(data.body)){
      points += 1.2;
    }
       // ESTAÇÃO
       if(item.season.includes(data.season)){
        points += 1.1;
      }
    // HORÁRIOS
    if(item.schedule.includes(data.schedule)){
      points += 1;
    }

    item.points = points;


    return item;
  });

  return  res.sort(orderByPoints).slice(0,4);
};


// CHECA SE O ESTADO FOI PREENCHIDO
export const checkData = (data) => {
  if (Object.values(data).indexOf('') > -1) {
    return false;
  }
  return true;
};
