import React, { useState, useEffect, useCallback } from 'react';

import Vestido1 from '../../images/vestido1.jpg';
import { Content, DescriptionContent } from './styles';
import Modal from '../../components/Modal';
import Overlay from '../../components/Overlay';
import HeaderGlobal from '../../components/Header'

export default function Dresses() {

  return(

    <DescriptionContent>

          <h1>// ZODÍACO</h1>
          <div className="subdescription">
            <p>
              Para mulheres que desejam sair do convencional ainda levando um
              toque de modernidade, com bordados e rendas que encantam.
            </p>
          </div>
        </DescriptionContent>
        <img
          src={Vestido1}
          className="example-dress"
          alt="test"
          onClick={() => setModalOpened(true)}
        />
  )
}
