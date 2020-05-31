import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ExampleIcon,
  Container,
  Item,
  Options,
  DescriptionContent,
  ContainerIcon,
} from './styles';

import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { filterData, checkData } from '../../utils/filterData';
import { OPTIONS } from './constants';

export default function CustomMade() {
  const [currentAnswers, setCurrentAnswers] = useState({
    location: '',
    schedule: '',
    season: '',
    color: '',
    structure: '',
    toppings: '',
    body: '',
  });
  const [filteredAns, setFilteredAns] = useState();

  const HandleSend = () => {
    if (checkData(currentAnswers)) {
      setFilteredAns(filterData(currentAnswers));
    } else {
      toast.error('É necessário preencher todos os campos.');
    }
  };
  return (
    <>
      <Container>
        <DescriptionContent>
          <h1>// QUIZZ</h1>
          <div className="subdescription">
            <p>
              Responda as perguntas abaixo para que possamos indicar o melhor
              vestido para você:
            </p>
          </div>
        </DescriptionContent>
        {OPTIONS &&
          OPTIONS.map((item) => {
            return (
              <Item>
                <h1>{item.question}</h1>
                <Options>
                  {(item.answers || []).map((res) => {
                    return (
                      <ContainerIcon
                        onClick={() =>
                          setCurrentAnswers({
                            ...currentAnswers,
                            [item.key]: res.value,
                          })
                        }
                      >
                        <ExampleIcon
                          active={currentAnswers[item.key] === res.value}
                        />
                        <span>{res.description}</span>
                      </ContainerIcon>
                    );
                  })}
                </Options>
              </Item>
            );
          })}

        {filteredAns && (
          <>
          <h2 style={{marginTop: '20px', marginBottom: '12px'}}>Sugerimos estes vestidos: </h2>
          <ul>
            {filteredAns.map((ans) => {
              return <li>{ans.name}</li>;
            })}
          </ul>
          </>
        )}
        <Button
          primary
          text="ENVIAR"
          style={{ marginTop: '30px' }}
          clickEvent={() => HandleSend()}
        >
          {' '}
        </Button>
      </Container>

      <Footer />
      <ToastContainer />
    </>
  );
}
