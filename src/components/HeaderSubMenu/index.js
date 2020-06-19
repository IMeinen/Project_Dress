import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerLinks, SubMenu, Acordeon, IconActive } from './styles';

function useOutsideAlerter(ref, handleClose) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref,handleClose]);
}

export default function HeadersSubMenu({ openSubMenu }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, openSubMenu);
  const [activeNoivas, setActiveNoivas] = useState(false);
  const [activeShoes, setActiveShoes] = useState(false);
  // const [activeLastChance, setActiveLastChance] = useState(false);
  return (
    <SubMenu ref={wrapperRef}>
      <ContainerLinks>
        <Acordeon
          active={activeNoivas}
          onClick={() => setActiveNoivas(!activeNoivas)}
        >
          <div className="title">
            <h1 className="link-text">NOIVAS</h1>
            <IconActive rotate={activeNoivas} />
          </div>
          <div className="internal-items">
            <Link to="/collection/nevoa" onClick={() => openSubMenu(false)}>
              <h1 className="link-text">COLEÇÃO // NÉVOA</h1>
            </Link>
            <Link to="/collection/zodiaco" onClick={() => openSubMenu(false)}>
              <h1 className="link-text">COLEÇÃO // ZODÍACO</h1>
            </Link>
            <Link to="/collection/noivado" onClick={() => openSubMenu(false)}>
              <h1 className="link-text">COLEÇÃO // NOIVADO</h1>
            </Link>
          </div>
        </Acordeon>
        <Acordeon
          active={activeShoes}
          onClick={() => setActiveShoes(!activeShoes)}
        >
          <div className="title">
            <h1 className="link-text">SAPATOS</h1>
            <IconActive rotate={activeShoes} />
          </div>
          <div className="internal-items">
            <Link to="/shoes/2019" onClick={() => openSubMenu(false)}>
              <h1 className="link-text">COLEÇÃO // 2019</h1>
            </Link>
            <Link to="/shoes/2020" onClick={() => openSubMenu(false)}>
              <h1 className="link-text">COLEÇÃO // 2020</h1>
            </Link>
          </div>
        </Acordeon>
        <Link className="only-link" to="/acessories/2019" onClick={() => openSubMenu(false)} style={{marginBottom: '16px'}}>
          <h1 className="link-text">ACESSÓRIOS DE CABELO</h1>
        </Link>
        <Link className="only-link" to="/custom-made" onClick={() => openSubMenu(false)} style={{marginBottom: '16px'}}>
          <h1 className="link-text">VESTIDO SOB MEDIDA</h1>
        </Link>
        {/* <Acordeon active={activeLastChance} onClick={() => setActiveLastChance(!activeLastChance)}>
          <div className="title">
          <h1 className="link-text">LAST CHANCE</h1>
          <IconActive rotate={activeLastChance} />
          </div>
          <div className="internal-items">
            <Link to="/collection/last-chance-festa" onClick={() => openSubMenu(false)}>
              <h1 className="link-text">FESTA</h1>
            </Link>
            <Link to="/collection/last-chance-noiva" onClick={() => openSubMenu(false)}>
              <h1 className="link-text">NOIVA</h1>
            </Link>
          </div>
        </Acordeon> */}
      </ContainerLinks>
    </SubMenu>
  );
}
