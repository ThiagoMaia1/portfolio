import { urlFinalPaper } from '../../constants/Constants';
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
    ],
    undefined,
    'https://cultue.web.app',
  ),
  new Project(
    getTranslatedSentence('myShopTitle'),
    getTranslatedSentence('myShopSubtitle'),
    [t.Dart, t.Flutter, t.Figma, t.Trello,],
    getTranslatedSentence('myShopDescription'),
    'https://youtu.be/BJljtECxGkE',
    'projects/MyShop.png',
    'https://github.com/ThiagoRavier/ecommerce',
    [
      'MyShop/Registration.png',
      'MyShop/Home.png',
      'MyShop/Catalogue.png',
      'MyShop/Gallery.png',
      'MyShop/Product.png',
      'MyShop/Cart.png',
      'MyShop/Closing.png',
      'MyShop/Profile.png',
    ],
    {
      url: 'https://www.figma.com/file/bHEvWMeeRywiIU9fU5T6yn/Mobile-App-FIGMA-(E-commerce-template)-by-Oleh-Chabanov', 
      label: getTranslatedSentence('figmaBy'),
    }
  ),
  new Project(
    getTranslatedSentence('ballGameTitle'),
    getTranslatedSentence('ballGameSubtitle'),
    [t.Typescript, t.HTML5, t.SASS, t.Angular, t.Firebase, t.AWS],
    getTranslatedSentence('ballGameDescription'),
    'https://master.d2gy6xsqkmio1s.amplifyapp.com/',
    'projects/Surpresa.png',
    'https://github.com/ThiagoMaia1/angular-game',
    ['BallGame/Surpresa.png'],
    // undefined,
    // 'https://master.d2gy6xsqkmio1s.amplifyapp.com/'
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
    [
      'VidAngelSubtitles/Print Extensão.PNG',
      'VidAngelSubtitles/Print Extensão2.PNG',
      'VidAngelSubtitles/Print Extensão3.PNG',
    ],
    {
      url: 'https://www.vidangel.com/browse',
      label: getTranslatedSentence('vidAngelLink'),
    }
  ),
  new Project(
    getTranslatedSentence('ultimatoSystemTitle'),
    getTranslatedSentence('ultimatoSystemSubtitle'),
    [t.Access, t.Excel, t.VBA, t.SQL, t.HTML5],
    getTranslatedSentence('ultimatoSystemDescription'),
    urlFinalPaper,
    'projects/Ultimato.png',
    '',
    [
      'Ultimato/Form_Expedicao_Base.PNG',
      'Ultimato/Form_Expedicao_Novo.PNG',
      'Ultimato/Form_Entrada_Produtos.PNG',
      'Ultimato/Form_Coleta_Transportadora.PNG',
      'Ultimato/Form_Postagens_Realizadas.PNG',
      'Ultimato/Form_Presentes.PNG',
      'Ultimato/Form_Reclamacoes_Inserir.PNG',
      'Ultimato/Form_Transferencias.PNG',
      'Ultimato/Form_Vendas_Novo.PNG',
    ],
    {
      url: urlFinalPaper, 
      label: getTranslatedSentence('ultimatoFinalPaperLink'),
    }
  ),
  new Project(
    getTranslatedSentence('boardGameHelperTitle'),
    getTranslatedSentence('boardGameHelperSubtitle'),
    [t.Typescript, t.HTML5, t.SASS, t.ReactNative],
    getTranslatedSentence('boardGameHelperDescription'),
    'https://youtu.be/9Owm3zBeq8Q',
    'projects/BoardGame.png',
    'https://github.com/ThiagoMaia1/board-game-helper.git',
    [
      'BoardGameHelper/CharacterSelection.png',
      'BoardGameHelper/CharacterInfo.png',
      'BoardGameHelper/MainPagePortrait.png',
      'BoardGameHelper/ChapterHistory.png',
      'BoardGameHelper/MainPageLandscape.png',
    ],
  ),
  new Project(
    getTranslatedSentence('acaiAntonioTitle'),
    getTranslatedSentence('acaiAntonioSubtitle'),
    [t.Typescript, t.HTML5, t.CSS3, t.ReactNative],
    getTranslatedSentence('acaiAntonioDescription'),
    'https://youtu.be/BWt3QXCnMxY',
    'projects/AcaiAntonio.png',
    'https://github.com/ThiagoMaia1/acai-antonio',
    [
      'Acai/Início.png',
      'Acai/Tamanhos.png',
      'Acai/Recheios.png',
    ],
  ),
  new Project(
    getTranslatedSentence('portfolioTitle'),
    getTranslatedSentence('portfolioSubtitle'),
    [t.Typescript, t.HTML5, t.SASS, t.ReactJs, t.PaperJs, t.AWS],
    getTranslatedSentence('portfolioDescription'),
    'http://localhost:3000', //'https://thiagomaia.tk',
    'projects/Portfolio.svg',
    'https://github.com/ThiagoMaia1/portfolio',
    [],
    undefined,
    window.location.origin + '/' + Date.now().toString(),
  ),
];

export default projects;
