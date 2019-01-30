import talks from '../assets/imgs/talks.png';
import games from '../assets/imgs/games.png';
import adopt from '../assets/imgs/adopt.png';

export const include = {
  title: 'Include',
  text: 'O Include é um evento feito para você que esta ingressando nos cursos de Ciência da Computação, Engenharia da Computação e Engenharia de Telecomunicações e gostaria de conhecer um pouco mais sobre o Campus e as atividades realizada pelo seu curso.',
};

export const activitiesReview = {
  mainTitle: 'Atividades do Include',
  activities: [
    {
      title: 'Apresentações',
      sprite: talks,
      alt: 'Balão de Quadrinhos',
      text: 'Conheça seu curso e seus novos companheiros de turma. Saiba quais as entidades acadêmica presentes em seu curso e quais atividades elas desempenham.',
    },
    {
      title: 'Gincanas',
      sprite: games,
      alt: 'Video game portátil',
      text: 'Trabalhe em equipe com seus colegas de turma para resolver enigmas e conhecer o campus.',
    },
    {
      title: 'Adoção',
      sprite: adopt,
      alt: 'Ícone de um bebê',
      text: 'Sente-se preocupado com as cadeiras? Escolha um veterano para lhe ajudar nessa nova jornada acadêmica.',
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
