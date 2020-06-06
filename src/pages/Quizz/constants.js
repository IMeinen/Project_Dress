import React from 'react';
import { ExampleIcon } from './styles';
import CampoIcon from '../../assets/icons/IconsQuizz/CAMPO.svg'
import CidadeIcon from '../../assets/icons/IconsQuizz/CIDADE.svg'
import PraiaIcon from '../../assets/icons/IconsQuizz/PRAIA.svg'
import SerraIcon from '../../assets/icons/IconsQuizz/SERRA.svg'

import ManhaIcon      from '../../assets/icons/IconsQuizz/MANHA.svg'
import TardeIcon      from '../../assets/icons/IconsQuizz/TARDE.svg'
import FinalTardeIcon from '../../assets/icons/IconsQuizz/FINAL_DE_TARDE.svg'
import NoiteIcon      from '../../assets/icons/IconsQuizz/NOITE.svg'

import PrimaveraIcon  from '../../assets/icons/IconsQuizz/PRIMAVERA.svg'
import VeraoIcon      from '../../assets/icons/IconsQuizz/VERAO.svg'
import OutonoIcon     from '../../assets/icons/IconsQuizz/OUTONO.svg'
import InvernoIcon    from '../../assets/icons/IconsQuizz/INVERNO.svg'

import BrancoIcon    from '../../assets/icons/IconsQuizz/BRANCO.svg'
import OffIcon       from '../../assets/icons/IconsQuizz/OFF WHITE.svg'
import TantoFazIcon  from '../../assets/icons/IconsQuizz/TANTO_FAZ.svg'

import LeveIcon    from '../../assets/icons/IconsQuizz/LEVE.svg'
import EstruturadoIcon       from '../../assets/icons/IconsQuizz/ESTRUTURADO.svg'

import LimpoIcon     from '../../assets/icons/IconsQuizz/LIMPO.svg'
import RendaIcon     from '../../assets/icons/IconsQuizz/RENDA.svg'
import AplicadaIcon  from '../../assets/icons/IconsQuizz/RENDA_APLICADA.svg'
import BordadoIcon   from '../../assets/icons/IconsQuizz/RENDA_E_BORDADO.svg'

import AmpulhetaIcon    from '../../assets/icons/IconsQuizz/AMPULHETA.svg'
import OvalarIcon       from '../../assets/icons/IconsQuizz/OVALAR.svg'
import PeraIcon         from '../../assets/icons/IconsQuizz/PERA.svg'
import RetangularIcon   from '../../assets/icons/IconsQuizz/RETANGULAR.svg'
import TrianguloIcon    from '../../assets/icons/IconsQuizz/TRIANGULO_INVERTIDO.svg'

export const OPTIONS = [
  {
    question: 'ONDE VAI SER O SEU CASAMENTO?',
    key: 'location',
    answers: [
      { icon: CampoIcon , value: 'campo', description: 'Campo' },
      { icon: CidadeIcon, value: 'cidade', description: 'Cidade' },
      { icon: PraiaIcon  , value: 'praia', description: 'Praia' },
      { icon: SerraIcon, value: 'serra', description: 'Serra' },
    ],
  },
  {
    question: 'QUAL O HORÁRIO?',
    key: 'schedule',
    answers: [
      { icon: ManhaIcon     , value: 'manhã', description: 'Manhã' },
      { icon: TardeIcon     , value: 'tarde', description: 'Tarde' },
      { icon: FinalTardeIcon, value: 'final da tarde', description: 'Fim da tarde' },
      { icon: NoiteIcon     , value: 'noite', description: 'Noite' },
    ],
  },
  {
    question: 'SERÁ  EM QUAL ESTAÇÃO DO ANO?',
    key: 'season',
    answers: [
      { icon: PrimaveraIcon , value: 'primavera', description: 'Primavera' },
      { icon: VeraoIcon     , value: 'verão', description: 'Verão' },
      { icon: OutonoIcon    , value: 'outono', description: 'Outono' },
      { icon: InvernoIcon   , value: 'inverno', description: 'Inverno' },
    ],
  },
  {
    question: 'QUAL COR VOCÊ PREFERE?',
    key: 'color',
    answers: [
      { icon: BrancoIcon  , value: 'branco', description: 'Branco' },
      { icon: OffIcon     , value: 'off', description: 'Off white' },
      { icon: TantoFazIcon, value: 'branco,off', description: 'Tanto faz' },

    ],
  },
  {
    question: 'QUANDO VOCÊ PENSA NOS TECIDOS DO SEU VESTIDO, ELES SÃO:',
    key: 'structure',
    answers: [
      { icon: LeveIcon , value: 'leve', description: 'Leves' },
      { icon: EstruturadoIcon , value: 'estruturado', description: 'Estruturados' },

    ],
  },
  {
    question: 'QUANTO AOS DETALHES QUE VOCÊ  IMAGINA:',
    key: 'toppings',
    answers: [
      { icon: LimpoIcon    , value: 'limpo,liso', description: 'Limpo/liso' },
      { icon: RendaIcon    , value: 'renda', description: 'Todo em renda' },
      { icon: AplicadaIcon , value: 'renda aplicada', description: 'Com renda aplicada' },
      { icon: BordadoIcon  , value: 'bordado', description: 'Com bordados' },

    ],
  },
  {
    question: 'E POR ÚLTIMO, SEU CORPO É:',
    key: 'body',
    answers: [
      { icon: AmpulhetaIcon , value: 'ampulheta', description: 'Ampulheta' },
      { icon: OvalarIcon    , value: 'ovalar', description: 'Ovalar' },
      { icon: PeraIcon      , value: 'pera', description: 'Pera' },
      { icon: RetangularIcon, value: 'retangular', description: 'Retangular' },
      { icon: TrianguloIcon , value: 'triângulo invertido', description: 'Triângulo invertido' },
    ],
  },
];
