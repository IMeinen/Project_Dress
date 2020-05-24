export const filterScroll = (list,current) => {

  if(list.length > 4){
    if((current + 4) <= list.length){
      return list.slice(current,current + 4);
    }
      return list.slice(current - 1,current + 4);


  }
    return list;

};
