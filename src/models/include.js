export const include = () => ({
  title: '',
  text: '',
});

export const activitiesReview = (path = '@/assets/imgs/') => ({
  srcPath: path,
  activities: [
    {
      title: '',
      sprite: '',
      text: '',
    },
    {
      title: '',
      sprite: '',
      text: '',
    },
    {
      title: '',
      sprite: '',
      text: '',
    },
  ],
});

export const participants = (path = '@/assets/imgs/yoshi/') => ({
  spritePath: path,
  team: [
    {
      name: 'Engenharia da Computação',
      sprites: ['blue1.png', 'blue2.png', 'blue3.png', 'blue4.png', 'blue5.png', 'blue6.png', 'blue7.png'],
    },
    {
      name: 'Ciência da Computação',
      sprites: ['red1.png', 'red2.png', 'red3.png', 'red4.png', 'red5.png', 'red6.png', 'red7.png'],
    },
    {
      name: 'Engenharia de Telecomunicações',
      sprites: ['yellow1.png', 'yellow2.png', 'yellow3.png', 'yellow4.png', 'yellow5.png', 'yellow6.png', 'yellow7.png'],
    },
  ],
});
