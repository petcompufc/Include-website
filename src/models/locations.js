import entryOne from '../assets/imgs/points/entry1.png';
import entryTwo from '../assets/imgs/points/entry2.png';
import libraryOne from '../assets/imgs/points/library1.png';
import libraryTwo from '../assets/imgs/points/library2.png';
import libraryThree from '../assets/imgs/points/library3.png';
import foodOne from '../assets/imgs/points/food1.png';
import foodTwo from '../assets/imgs/points/food2.png';
import foodThree from '../assets/imgs/points/food3.png';
import foodFour from '../assets/imgs/points/food4.png';
import blockOne from '../assets/imgs/points/block1.png';
import xerox from '../assets/imgs/points/xerox.png';

const locations = [
  {
    id: 'entry1',
    name: 'Entrada Humberto Monte',
    description: 'Entrada do Campus pela Humberto Monte.',
    latLong: [-3.738757, -38.569726],
    icon: entryOne,
  },
  {
    id: 'entry2',
    name: 'Entrada Mister Hull',
    description: 'Entrada do Campus pela Mister Hull.',
    latLong: [-3.737227, -38.571584],
    icon: entryTwo,
  },
  {
    id: 'library1',
    name: 'Biblioteca Central',
    description: 'Biblioteca Central do Campus do Pici. Também chamada de BCT: Biblioteca de Ciências e Tecnologia',
    latLong: [-3.742523, -38.574298],
    icon: libraryOne,
  },
  {
    id: 'library2',
    name: 'Biblioteca da Matemática',
    description: 'Biblioteca muito útil para os alunos da cc.',
    latLong: [-3.746536, -38.573873],
    icon: libraryTwo,

  },
  {
    id: 'library3',
    name: 'Biblioteca da Física',
    description: 'Biblioteca da Física o/.',
    latLong: [-3.747051, -38.575384],
    icon: libraryThree,

  },
  {
    id: 'food1',
    name: 'Restaurante Universitário - Prédio Velho',
    description: 'RU velho. Almoço e Janta por R$ 1,10.',
    latLong: [-3.744898, -38.572963],
    icon: foodOne,

  },
  {
    id: 'food2',
    name: 'Restaurante Universitário - Prédio Novo',
    description: 'RU novo. Almoço e Janta por R$ 1,10.',
    latLong: [-3.747110, -38.577976],
    icon: foodTwo,

  },
  {
    id: 'food3',
    name: 'Cantina da Geologia',
    description: 'Venha aqui nos intervalos comer :D.',
    latLong: [-3.746632, -38.573017],
    icon: foodThree,
  },
  {
    id: 'food4',
    name: 'Cantina da Química',
    description: 'Venha aqui nos intervalos comer :D.',
    latLong: [-3.746480, -38.576817],
    icon: foodFour,
  },
  {
    id: 'block1',
    name: 'Departamento de Computação',
    description: 'Aqui se encontram os LECs e a sala dos professores.',
    latLong: [-3.745978, -38.574143],
    icon: blockOne,
  },
  {
    id: 'xerox',
    name: 'Bioxerox',
    description: 'Xerox para imprimir seus trabalhos :3.',
    latLong: [-3.745160, -38.573727],
    icon: xerox,
  },
];

export default locations;
