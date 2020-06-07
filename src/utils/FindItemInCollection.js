import Collections from '../constants/Collections';

const FindDress = (name) => {

  const res = Collections.map((collection) => {
    return collection.images.filter((item) =>
    item.name === name );
  });

  const filtered = res.filter(item => item.length > 0)
  return filtered[0][0];

}

export const FindDressesByName = (listNames) => {

  const res = listNames.map((item) =>



    FindDress(item.name));

  return res;

}
