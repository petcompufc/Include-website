import talks from '../assets/imgs/talks.png';
import games from '../assets/imgs/games.png';
import adopt from '../assets/imgs/adopt.png';

export const include = {
  title: 'Include',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at erat nunc. Nulla augue leo, consequat non ligula ac, dictum accumsan purus. Integer pulvinar tincidunt risus, ac consequat lectus vestibulum vel. Duis sed mauris vel enim suscipit malesuada. Morbi mollis imperdiet tempus.',
};

export const activitiesReview = {
  mainTitle: 'Atividades do Include',
  activities: [
    {
      title: 'Apresentações',
      sprite: talks,
      alt: 'Balão de Quadrinhos',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at erat nunc. Nulla augue leo, consequat non ligula ac, dictum accumsan purus. Integer pulvinar tincidunt risus, ac consequat lectus vestibulum vel. Duis sed mauris vel enim suscipit malesuada. Morbi mollis imperdiet tempus.',
    },
    {
      title: 'Gincanas',
      sprite: games,
      alt: 'Video game portátil',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at erat nunc. Nulla augue leo, consequat non ligula ac, dictum accumsan purus. Integer pulvinar tincidunt risus, ac consequat lectus vestibulum vel. Duis sed mauris vel enim suscipit malesuada. Morbi mollis imperdiet tempus.',
    },
    {
      title: 'Adoção',
      sprite: adopt,
      alt: 'Ícone de um bebê',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at erat nunc. Nulla augue leo, consequat non ligula ac, dictum accumsan purus. Integer pulvinar tincidunt risus, ac consequat lectus vestibulum vel. Duis sed mauris vel enim suscipit malesuada. Morbi mollis imperdiet tempus.',
    },
  ],
};

export const participants = {
  mainTitle: 'Organizadores',
  description: 'Nós, PET Computação em parceria com os PET de Engenharia da Computação e Engenharia de Telecomunicação organizamos esse evento especialmente para você, calouro desses cursos.',
  teams: [
    {
      name: 'Engenharia da Computação',
      type: 'blue',
    },
    {
      name: 'Ciência da Computação',
      type: 'red',
    },
    {
      name: 'Engenharia de Telecomunicações',
      type: 'yellow',
    },
  ],
};
