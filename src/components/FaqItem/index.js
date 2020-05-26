import React, { useState } from 'react';


import {
  Container,
  LinkItem,
  AnswerItem,
  IconActive
} from './styles';


export default function FaqItem({question,answer,isActive}) {
  const [active,setActive] = useState(isActive,false);
  return (
   <Container>
     <LinkItem >
      <div className="button-question" onClick={() => setActive(!active)}>
        <h1>{question}</h1>
        <IconActive rotate={active}/>
      </div>
      <AnswerItem active={active}>
        <p>{answer}</p>
      </AnswerItem>
     </LinkItem>

   </Container>
  );
}
