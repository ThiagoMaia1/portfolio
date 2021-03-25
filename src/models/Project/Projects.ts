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
    ],
    getTranslatedSentence('cultueDescription'),
    'https://cultue.web.app/',
    './logos/projects/Cultue.svg',
    [
      './Imagens/ScreenShots/Cultue/Front Topo.png',
      './Imagens/ScreenShots/Cultue/Front Bottom.png',
      './Imagens/ScreenShots/Cultue/Login.png',
      './Imagens/ScreenShots/Cultue/Main.png',
      './Imagens/ScreenShots/Cultue/Música.png',
      './Imagens/ScreenShots/Cultue/Fundos.png',
      './Imagens/ScreenShots/Cultue/Select Filtro.png',
      './Imagens/ScreenShots/Cultue/Exportar.png',
      './Imagens/ScreenShots/Cultue/Atalhos.png',
      './Imagens/ScreenShots/Cultue/Imagens Usuário.png',
      './Imagens/ScreenShots/Cultue/Perfil.png',
      './Imagens/ScreenShots/Cultue/Lista de Apresentações.png',
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
    ],
    getTranslatedSentence('vidAngelDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    './logos/projects/VidAngelSubtitles.png'
  ),
  new Project(
    getTranslatedSentence('myShopTitle'),
    getTranslatedSentence('myShopSubtitle'),
    [t.Dart, t.Flutter, t.Figma, t.Trello, ],
    getTranslatedSentence('myShopDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    './logos/projects/MyShop.png'
  ),
  new Project(
    getTranslatedSentence('portfolioTitle'),
    getTranslatedSentence('portfolioSubtitle'),
    [t.Typescript, t.HTML5, t.SASS, t.ReactJs, t.PaperJs, t.AWS],
    getTranslatedSentence('portfolioDescription'),
    'https://chrome.google.com/webstore/detail/vidangel-subtitles/glnfgjbdffkpaphaiablhgenfoigmfbj?hl=pt-BR&authuser=0',
    './logos/projects/Portfolio.svg'
  ),
];

export default projects;
