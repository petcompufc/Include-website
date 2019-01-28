import facebook from '../assets/imgs/social-media/fb-logo.png';
import instagram from '../assets/imgs/social-media/instagram-logo.png';
import github from '../assets/imgs/social-media/github-logo.png';

const contactInfos = {
  contributing: 'Encontrou algum bug no site? Abra um Pull Request no Github!',

  copyright: '© 2019 PET Computação UFC, Todos os direitos reservados.',

  address: {
    title: 'PET Computação',
    text: 'Av. Humberto Monte, s/n\nUFC - Campus do Pici\nPET Computação\nBloco 910',
  },

  links: [
    {
      id: 'petsite',
      name: 'petcomp@ufc.br',
      src: '',
      url: 'http://www.petcomp.ufc.br',
    },
    {
      id: 'petfb',
      name: 'facebook PET Computação',
      src: facebook,
      url: 'https://www.facebook.com/PETCompUFC/',
    },
    {
      id: 'petinsta',
      name: 'Instagram PET Computação',
      src: instagram,
      url: 'https://www.instagram.com/petcompufc/',
    },
    {
      id: 'ghsite',
      name: 'Repositório do site',
      src: github,
      url: 'https://github.com/petcompufc/Include-website',
    },
    {
      id: 'ufcportal',
      name: 'Portal UFC',
      src: '',
      url: 'http://www.ufc.br/',
    },
    {
      id: 'dc',
      name: 'Departamento de Computação',
      src: '',
      url: 'http://portal.dc.ufc.br/',
    },
    {
      id: 'cc',
      name: 'Curso de Ciência da Computação',
      src: '',
      url: 'http://cc.ufc.br/',
    },
    {
      id: 'ec',
      name: 'Curso de Engenharia da Computação',
      src: '',
      url: 'http://www.engcomp.ufc.br/',
    },
    {
      id: 'et',
      name: 'Curso de Engenharia de Telecomunicações',
      src: '',
      url: 'http://www.telecom.ufc.br/',
    },
  ],
};

export default contactInfos;
