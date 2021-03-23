import technologies from '../Technology/Technologies';
import Project from './Project';

const t = technologies;

const projects: Array<Project> = [new Project(
    'Cultue - Apresentações de Slides para Igrejas',
    [
      t['Firebase'],
      t['Reactjs'],
      t['Redux'],
      t['Javascript'],
      t['CSS3'],
      t['HTML5'],
      t['ReactRouter'],
    ],
    `Aplicação web voltada para a criação de slides para cultos de igrejas. 
    Utiliza os apis: vagalume e biblia para buscar letras de músicas e textos bíblicos e aloca-los em slides. 
    Permite a personalização dos slides e exportações em HTML ou PowerPoint.`,
    'https://cultue.web.app/',
    './logos/projects/Cultue.svg',
    [
      './Imagens/ScreenShots/Cultue/Noemi.png',
      './Imagens/ScreenShots/Cultue/Noemi copy.png',
      './Imagens/ScreenShots/Cultue/Noemi copy 2.png',
      './Imagens/ScreenShots/Cultue/Noemi copy 3.png',
      './Imagens/ScreenShots/Cultue/Noemi copy 4.png',
      './Imagens/ScreenShots/Cultue/Noemi copy 5.png',
      './Imagens/ScreenShots/Cultue/Noemi copy 6.png',
      './Imagens/ScreenShots/Cultue/Noemi copy 7.png',
    ]
  ),
  new Project(
    'VidAngel Subtitles',
    [
      t['Javascript'],
      t['CSS3'],
      t['HTML5'],
      t['ChromeCast'],
      t['ChromeExtensions'],
    ],
    `Extension for Google Chrome that uses the OpenSubtitles Api to add subtitles to movies and TV shows on the VidAngel streaming service.`,
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    '/logos/projects/VidAngelSubtitles.png'
  ),
  new Project(
    'MyShop - E-Commerce',
    [t['Dart'], t['Flutter']],
    `Aplicativo Mobile de ecommerce para Android ou Ios.`,
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    './logos/projects/MyShop.png'
  ),
  // new Project(
  //   'Portfolio - Thiago Maia',
  //   [t['Reactjs'], t['SASS'], t['Typescript']],
  //   `Aplicativo Mobile de ecommerce para Android ou Ios.`,
  //   'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
  //   './logos/projects/MyShop.png'
  // ),
];

export default projects;
