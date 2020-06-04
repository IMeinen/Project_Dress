import AQUA_TUMB from '../images/Zodiaco/Aquario/Principal.jpg';
import CANC_TUMB from '../images/Zodiaco/Cancer/Principal.jpg';
import CAPR_TUMB from '../images/Zodiaco/Capricornio/Principal.jpg';
import ESCO_TUMB from '../images/Zodiaco/Escorpiao/Principal.jpg';
import GEME_TUMB from '../images/Zodiaco/Gemeos/Principal.jpg';
import LEAO_TUMB from '../images/Zodiaco/Leao/Principal.jpg';
import LIBR_TUMB from '../images/Zodiaco/Libra/Principal.jpg';
import SAGI_TUMB from '../images/Zodiaco/Sagitario/Principal.jpg';
import TOUR_TUMB from '../images/Zodiaco/Touro/Principal.jpg';
import VIRG_TUMB from '../images/Zodiaco/Virgem/Principal.jpg';
import { AQUA_LIST } from '../images/Zodiaco/Aquario/constants';
import { CANC_LIST } from '../images/Zodiaco/Cancer/constants';
import { CAPR_LIST } from '../images/Zodiaco/Capricornio/constants';
import { ESCO_LIST } from '../images/Zodiaco/Escorpiao/constants';
import { GEME_LIST } from '../images/Zodiaco/Gemeos/constants';
import { LEAO_LIST } from '../images/Zodiaco/Leao/constants';
import { LIBR_LIST } from '../images/Zodiaco/Libra/constants';
import { SAGI_LIST } from '../images/Zodiaco/Sagitario/constants';
import { TOUR_LIST } from '../images/Zodiaco/Touro/constants';
import { VIRG_LIST } from '../images/Zodiaco/Virgem/constants';
import { V04_LIST } from '../images/Nevoa/O04/constants';
import { V05_LIST }  from '../images/Nevoa/O05/constants';
import { V07_LIST }  from '../images/Nevoa/O07/constants';
import { V08_LIST }  from '../images/Nevoa/O08/constants';
import { V09_LIST }  from '../images/Nevoa/O09/constants';
import { V10_LIST }  from '../images/Nevoa/O10/constants';
import { V11_LIST }  from '../images/Nevoa/O11/constants';
import { V12_LIST }  from '../images/Nevoa/O12/constants';
import { V13_LIST }  from '../images/Nevoa/O13/constants';
import { V14_LIST }  from '../images/Nevoa/O14/constants';
import { PE06_LIST } from '../images/Nevoa/PE06/constants';
import { PE07_LIST } from '../images/Nevoa/PE07/constants';
import { PE08_LIST } from '../images/Nevoa/PE08/constants';
import { PE09_LIST } from '../images/Nevoa/PE09/constants';
import { PE11_LIST } from '../images/Nevoa/PE11/constants';
import { PE12_LIST } from '../images/Nevoa/PE12/constants';
import { PR12_LIST } from '../images/Nevoa/PR12/constants';
import { PR13_LIST } from '../images/Nevoa/PR13/constants';
import { PR05_LIST } from '../images/Noivado/PR05/constants';
import { PR06_LIST } from '../images/Noivado/PR06/constants';
import { PR07_LIST } from '../images/Noivado/PR07/constants';
import { PR08_LIST } from '../images/Noivado/PR08/constants';
import { PR09_LIST } from '../images/Noivado/PR09/constants';

const Collections = [
  {
    link: 'nevoa',
    title: '// NÉVOA',
    description:
      'Leve, delicada e atemporal. Inspirada na névoa que se forma Leve, delicada e atemporal. Inspirada na névoa que se forma cultuando a beleza única de cada mulher.',
    images: [
      { image: V04_LIST[0], listOfImages: V04_LIST, width: '' },
      { image: V05_LIST[0], listOfImages: V05_LIST  , width: '' },
      { image: V07_LIST[0], listOfImages: V07_LIST  , width: '' },
      { image: V08_LIST[0], listOfImages: V08_LIST  , width: '' },
      { image: V09_LIST[0], listOfImages: V09_LIST  , width: '' },
      { image: V10_LIST[0], listOfImages: V10_LIST  , width: '' },
      { image: V11_LIST[0], listOfImages: V11_LIST  , width: '' },
      { image: V12_LIST[0], listOfImages: V12_LIST  , width: '' },
      { image: V13_LIST[0], listOfImages: V13_LIST  , width: '' },
      { image: V14_LIST[0], listOfImages: V14_LIST  , width: '' },
      { image: PE06_LIST[0], listOfImages: PE06_LIST , width: '' },
      { image: PE07_LIST[0], listOfImages: PE07_LIST , width: '' },
      { image: PE08_LIST[0], listOfImages: PE08_LIST , width: '' },
      { image: PE09_LIST[0], listOfImages: PE09_LIST , width: '' },
      { image: PE11_LIST[0], listOfImages: PE11_LIST , width: '' },
      { image: PE12_LIST[0], listOfImages: PE12_LIST , width: '' },
      { image: PR12_LIST[0], listOfImages: PR12_LIST , width: '' },
      { image: PR13_LIST[0], listOfImages: PR13_LIST , width: '' },
    ],
  },
  {
    link: 'zodiaco',
    title: '// ZODÍACO',
    description: 'lOREM IP',
    images: [
      { image: AQUA_TUMB, listOfImages: AQUA_LIST, width: '49.725' },
      { image: CANC_TUMB, listOfImages: CANC_LIST, width: '49.725' },
      { image: CAPR_TUMB, listOfImages: CAPR_LIST, width: '49.725' },
      { image: ESCO_TUMB, listOfImages: ESCO_LIST, width: '49.725' },
      { image: GEME_TUMB, listOfImages: GEME_LIST, width: '49.725' },
      { image: LEAO_TUMB, listOfImages: LEAO_LIST, width: '49.725' },
      { image: LIBR_TUMB, listOfImages: LIBR_LIST, width: '49.725' },
      { image: SAGI_TUMB, listOfImages: SAGI_LIST, width: '49.725' },
      { image: TOUR_TUMB, listOfImages: TOUR_LIST, width: '49.725' },
      { image: VIRG_TUMB, listOfImages: VIRG_LIST, width: '49.725' },
    ],
  },
  {
    link: 'noivado',
    title: '// NOIVADO',
    description: 'lOREM IPSUM',
    images: [
      { image: PR05_LIST[0] , listOfImages: PR05_LIST, width: '49.725' },
      { image: PR06_LIST[0] , listOfImages: PR06_LIST, width: '49.725' },
      { image: PR07_LIST[0] , listOfImages: PR07_LIST, width: '32.3' },
      { image: PR08_LIST[0] , listOfImages: PR08_LIST, width: '32.3' },
      { image: PR09_LIST[0] , listOfImages: PR09_LIST, width: '32.3' },

    ],
  },
];

export default Collections;
// {image:rose1, listOfImages: []},
//       {image:rose2, listOfImages: [],width: '49.725'},
//       {image:rose3, listOfImages: [],width: '49.725'},
//       {image:rose4, listOfImages: [],width: '49.725'},
//       {image:rose5, listOfImages: [],width: '49.725', adjustTop : true},
//       {image:rose6, listOfImages: [],width: '49.725'},
//       {image:rose7,listOfImages: [],width: '49.725'},
