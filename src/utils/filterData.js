import { FilterOptions } from '../constants/FilterOptions';

export const filterData = (data) => {
  const res = FilterOptions.filter((item) => {
    return (
      item.location.includes(data.location) &&
      item.schedule.includes(data.schedule) &&
      item.season.includes(data.season) &&
      (item.color.includes(data.color) || data.color === 'branco,off') &&
      item.structure.includes(data.structure) &&
      (item.toppings.includes(data.toppings) ||
        (data.toppings === 'limpo,liso' &&
          (item.toppings.includes('liso') ||
            item.toppings.includes('liso')))) &&
      item.body.includes(data.body)
    );
  });

  return res;
};


export const checkData = (data) => {

  if (Object.values(data).indexOf('') > -1){
    return false;
  }
  return true;
};

