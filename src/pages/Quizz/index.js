import React, { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CheckIcon,
  Container,
  Item,
  Options,
  DescriptionContent,
  ContainerIcon,
  DressImage,
  SuggestionContainer,
} from './styles';
import Modal from '../../components/Modal';
import Overlay from '../../components/Overlay';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { filterData, checkData } from '../../utils/filterData';
import { FindDressesByName } from '../../utils/FindItemInCollection';
import { OPTIONS } from './constants';
import { ImagesContext } from '../../contexts/imagesContext';
import { ButtonContext } from '../../contexts/buttonContext';

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
  const { currentList, setCurrentList } = useContext(ImagesContext);
  const { currentName, setCurrentName } = useContext(ImagesContext);
  const { currentDesc, setCurrentDesc } = useContext(ImagesContext);
  const { currentValue, setCurrentValue } = useContext(ImagesContext);
  const { currenSlide, setCurrentSlide } = useContext(ButtonContext);
  const { current6xCard, setCurrent6xCard } = useContext(ImagesContext);
  const { current6xCheck, setCurrent6xCheck } = useContext(ImagesContext);
  const [filteredAns, setFilteredAns] = useState();
  const [dressesSugestion, setDressesSugestion] = useState();
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {

    if (filteredAns) {
      setDressesSugestion(FindDressesByName(filteredAns));

    }
  }, [filteredAns]);

  const HandleSend = () => {
    if (checkData(currentAnswers)) {
      setFilteredAns(filterData(currentAnswers));
    } else {
      toast.error('É necessário preencher todas as opções.');
    }
  };

  const HandleCollections = () => {
    setCurrentSlide('collections');
  }

  return (
    <>
      <Container>
        {modalOpened && (
          <Overlay>
            <Modal modalOpened={setModalOpened} />
          </Overlay>
        )}
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
                        <CheckIcon
                          active={currentAnswers[item.key] === res.value}
                        />
                        <img
                          src={res.icon}
                          alt="icon"
                          style={{ width: '40px', height: '40px' }}
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
            <h2 style={{ marginTop: '20px', marginBottom: '12px' }}>
              Sugerimos estes vestidos:{' '}
            </h2>
            <SuggestionContainer>
              {dressesSugestion &&
                dressesSugestion.map((ans) => {

                  return (
                    <DressImage
                      src={ans.image}
                      alt="test"
                      onClick={() => {
                        setCurrentList(ans.listOfImages);
                        setModalOpened(true);
                        setCurrentName(ans.name);
                        setCurrentDesc(ans.description);
                        setCurrentValue(ans.value);
                        setCurrent6xCard(ans.parcelCard);
                  setCurrent6xCheck(ans.parcelCheck);
                      }}
                    />
                  );
                })}
            </SuggestionContainer>
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
        {filteredAns && <Button
          primary
          text="CONHECER NOSSAS COLEÇÕES"
          clickEvent={() => HandleCollections()}
          to="/"
        >
          {' '}
        </Button>}
      </Container>

      <Footer />
      <ToastContainer />

    </>
  );
}
