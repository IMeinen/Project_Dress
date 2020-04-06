export const filterData = (list, inputText) => {
  return list.filter((item) => {
    return item.name.toLowerCase().indexOf(inputText.toLowerCase()) >= 0;
  });
};
