import getTranslatedSentence from '../../translation/Translation';
import technologies from '../Technology/Technologies';
import Project from './Project';

const t = technologies;

const projects: Array<Project> = [
  new Project(
    getTranslatedSentence('cultueTitle'),
    getTranslatedSentence('cultueSubtitle'),
    [
      t.Javascript,
      t.HTML5,
      t.CSS3,
      t.Redux,
      t.Firebase,
      t.ReactJs,
      t.ReactRouter,
      t.Sendgrid,
      t.APIRest,
    ],
    getTranslatedSentence('cultueDescription'),
    'https://cultue.web.app/',
    'projects/Cultue.svg',
    'https://github.com/ThiagoMaia1/siteSlidesIgreja',
    [
      'Cultue/Front Topo.png',
      'Cultue/Front Bottom.png',
      'Cultue/Login.png',
      'Cultue/Main.png',
      'Cultue/Música.png',
      'Cultue/Fundos.png',
      'Cultue/Select Filtro.png',
      'Cultue/Exportar.png',
      'Cultue/Atalhos.png',
      'Cultue/Imagens Usuário.png',
      'Cultue/Perfil.png',
      'Cultue/Lista de Apresentações.png',
    ]
  ),
  new Project(
    getTranslatedSentence('vidAngelTitle'),
    getTranslatedSentence('vidAngelSubtitle'),
    [
      t.Javascript,
      t.HTML5,
      t.CSS3,
      t.ChromeCast,
      t.ChromeExtensions,
      t.Postman,
      t.APIRest,
    ],
    getTranslatedSentence('vidAngelDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    'projects/VidAngelSubtitles.png',
    'https://github.com/ThiagoMaia1/vidangel-subtitles',
  ),
  new Project(
    getTranslatedSentence('myShopTitle'),
    getTranslatedSentence('myShopSubtitle'),
    [t.Dart, t.Flutter, t.Figma, t.Trello,],
    getTranslatedSentence('myShopDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    'projects/MyShop.png',
    '',
  ),
  new Project(
    getTranslatedSentence('portfolioTitle'),
    getTranslatedSentence('portfolioSubtitle'),
    [t.Typescript, t.HTML5, t.SASS, t.ReactJs, t.PaperJs, t.AWS],
    getTranslatedSentence('portfolioDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    'projects/Portfolio.svg',
    'https://github.com/ThiagoMaia1/portfolio',
  ),
  new Project(
    getTranslatedSentence('ultimatoSystemTitle'),
    getTranslatedSentence('ultimatoSystemSubtitle'),
    [t.Access, t.Excel, t.VBA, t.SQL, t.HTML5],
    getTranslatedSentence('ultimatoSystemDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    'projects/Portfolio.svg',
    'https://github.com/ThiagoMaia1/portfolio',
  ),
  new Project(
    getTranslatedSentence('acaiAntonioTitle'),
    getTranslatedSentence('acaiAntonioSubtitle'),
    [t.Typescript, t.HTML5, t.CSS3, t.ReactNative],
    getTranslatedSentence('acaiAntonioDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    'projects/AcaiAntonio.png',
    'https://github.com/ThiagoMaia1/acai-antonio',
  ),
  // new Project(
  //   getTranslatedSentence('boardGameHelperTitle'),
  //   getTranslatedSentence('boardGameHelperSubtitle'),
  //   [t.Typescript, t.HTML5, t.SASS, t.ReactNative],
  //   getTranslatedSentence('boardGameHelperDescription'),
  //   'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
  //   'projects/Portfolio.svg',
  //   'https://github.com/ThiagoMaia1/portfolio',
  // ),
  new Project(
    getTranslatedSentence('ballGameTitle'),
    getTranslatedSentence('ballGameSubtitle'),
    [t.Typescript, t.HTML5, t.SASS, t.Angular, t.Firebase, t.AWS],
    getTranslatedSentence('ballGameDescription'),
    'https://master.d2gy6xsqkmio1s.amplifyapp.com/',
    'projects/Surpresa.png',
    'https://github.com/ThiagoMaia1/portfolio',
  ),
];

export default projects;
