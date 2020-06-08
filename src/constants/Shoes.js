import {
  BRILHANTE_LIST,
  DRAPEADO_LIST,
  NOIVA_LIST,
  NUDEBRILHANTE_LIST,
  NUDE_LIST,
  X_LIST,
} from '../images/Sapatos/2019/constants';

import {
  BRANCO_BAIXO_LIST,
  NOVOX_LIST,
  NUDEALTO_LIST,
  NUDEBAIXO_LIST,
  TELABRANCO_LIST
} from '../images/Sapatos/2020/constants';

const ShoesCollections = [
  {
    link: '2019',
    title: '// COLEÇÃO 2019',
    description: '',
    images: [
      {
        name: 'Branco brilhante',
        description:
          '',
        value: 'R$ 281,00',
        originalValue: 'R$ 469,00',
        parcelCard: 'R$ 381,00',
        image: BRILHANTE_LIST[0],
        listOfImages: BRILHANTE_LIST,
        width: '',
      },
      {
        name: 'Cetim Drapeado',
        description:
          '',
          value: 'R$ 234,00',
          originalValue: 'R$ 469,00',
          parcelCard: 'R$ 334,00',
        image: DRAPEADO_LIST[0],
        listOfImages: DRAPEADO_LIST,
        width: '',
      },
      {
        name: 'Nude',
        description:
          '',
          value: 'R$ 293,00',
          originalValue: 'R$ 489,00',
          parcelCard: 'R$ 393,00',
        image: NUDE_LIST[0],
        listOfImages: NUDE_LIST,
        width: '',
      },
      {
        name: 'Nude brilhante',
        description:
          '',
          value: 'R$ 255,00',
          originalValue: 'R$ 510,00',
          parcelCard: 'R$ 355,00',
        image: NUDEBRILHANTE_LIST[0],
        listOfImages: NUDEBRILHANTE_LIST,
        width: '',
      },
      {
        name: 'Noiva',
        description:
          '',
          value: 'R$ 299,00',
          originalValue: 'R$ 499,00',
          parcelCard: 'R$ 399,00',
        image: NOIVA_LIST[0],
        listOfImages: NOIVA_LIST,
        width: '',
      },
      {
        name: 'Noiva',
        description:
          '',
          value: 'R$ 281,00',
          originalValue: 'R$ 469,00',
          parcelCard: 'R$ 381,00',
        image: X_LIST[0],
        listOfImages: X_LIST,
        width: '',
      },
    ],
  },
  {
    link: '2020',
    title: '// COLEÇÃO 2020',
    description: '',
    images: [
      {
        name: 'Branco baixo',
        description:
          '',
        value: 'R$ 420,00',
        parcelCard: 'R$ 520,00',
        image: BRANCO_BAIXO_LIST[0],
        listOfImages: BRANCO_BAIXO_LIST,
        width: '',
      },
      {
        name: 'Nude baixo',
        description:
          '',
        value: 'R$ 420,00',
        parcelCard: 'R$ 520,00',
        image: NUDEBAIXO_LIST[0],
        listOfImages: NUDEBAIXO_LIST,
        width: '',
      },
      {
        name: 'Nude alto',
        description:
          '',
        value: 'R$ 465,00',
        parcelCard: 'R$ 565,00',
        image: NUDEALTO_LIST[0],
        listOfImages: NUDEALTO_LIST,
        width: '',
      },
      {
        name: 'Novo X',
        description:
          '',
        value: 'R$ 475,00',
        parcelCard: 'R$ 575,00',
        image: NOVOX_LIST[0],
        listOfImages: NOVOX_LIST,
        width: '',
      },
      {
        name: 'Tela Branco',
        description:
          '',
        value: 'R$ 519,00',
        parcelCard: 'R$ 619,00',
        image: TELABRANCO_LIST[0],
        listOfImages: TELABRANCO_LIST,
        width: '',
      }
    ]
  }
];

export default ShoesCollections;
