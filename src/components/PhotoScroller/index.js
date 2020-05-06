import React, { useState, useEffect, useCallback } from 'react';


import { Container,ImgItem } from './styles';


export default function PhotoScroller({listImages,setImage}) {

  return(
    <Container>
      {(listImages || []).map((item,index) => {
        return <ImgItem image={item} onClick={() => setImage(index)}/>
      })}
    </Container>

  );
}
