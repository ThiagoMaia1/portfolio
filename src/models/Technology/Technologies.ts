import Category from "../Category";
import Technology from "./Technology";

const folder : string = './logos/technologies/';

const technologies = {
    Access: new Technology('Access', folder + 'Access.svg', Category.Software, 'https://www.microsoft.com/en/microsoft-365/access'), 
    AdobeIllustrator: new Technology('Adobe Illustrator', folder + 'AdobeIllustrator.png', Category.Software, 'https://www.adobe.com/br/products/illustrator.html'), 
    AdobeIndesign: new Technology('Adobe Indesign', folder + 'AdobeIndesign.png', Category.Software, 'https://www.adobe.com/br/products/indesign.html'), 
    AdobeLightroom: new Technology('Adobe Lightroom', folder + 'AdobeLightroom.png', Category.Software, 'https://www.adobe.com/br/products/photoshop-lightroom.html'), 
    AdobePremiere: new Technology('Adobe Premiere', folder + 'AdobePremiere.png', Category.Software, 'https://www.adobe.com/br/products/premiere.html'), 
    AdobePhotoshop: new Technology('Adobe Photoshop', folder + 'AdobePhotoshop.png', Category.Software, 'https://www.adobe.com/br/products/photoshop.html'), 
    AWS: new Technology('Amazon Web Services', folder + 'AWS.svg', Category.Tool, 'https://aws.amazon.com/'), 
    ChromeCast: new Technology('Chrome Cast', folder + 'ChromeCast.png', Category.Tool, 'https://developers.google.com/cast'), 
    ChromeExtensions: new Technology('Chrome Extensions', folder + 'ChromeExtensions.png', Category.Tool, 'https://developer.chrome.com/docs/extensions/'), 
    CSS3: new Technology('CSS 3', folder + 'CSS3.png', Category.Language, 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'), 
    Dart: new Technology('Dart', folder + 'Dart.png', Category.Language, 'https://dart.dev/'), 
    Excel: new Technology('Excel', folder + 'Excel.png', Category.Software, 'https://www.microsoft.com/pt-br/microsoft-365/excel'), 
    Expo: new Technology('Expo', folder + 'Expo.png', Category.Tool, 'https://expo.io/'), 
    Figma: new Technology('Figma', folder + 'Figma.svg', Category.Tool, 'https://www.figma.com/'), 
    Firebase: new Technology('Firebase', folder + 'Firebase.png', Category.Tool, 'https://firebase.google.com/'), 
    Flutter: new Technology('Flutter', folder + 'Flutter.svg', Category.Framework, 'https://flutter.dev/'), 
    GitHub: new Technology('GitHub', folder + 'GitHub.png', Category.Tool, 'https://github.com/'), 
    HTML5: new Technology('HTML 5', folder + 'HTML5.png', Category.Language, 'https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5'), 
    Javascript: new Technology('Javascript', folder + 'Javascript.svg', Category.Language, 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'), 
    NodeJs: new Technology('Node.js', folder + 'Nodejs.png', Category.Language, 'https://nodejs.org/'), 
    PaperJs: new Technology('Paper.js', folder + 'PaperJs.png', Category.Tool, 'http://paperjs.org/'), 
    PlayStore: new Technology('Android Play Store', folder + 'PlayStore.svg', Category.Tool, 'https://developer.android.com/distribute/console?hl=pt-br'), 
    PostgreSQL: new Technology('PostgreSQL', folder + 'PostgreSQL.png', Category.Software, 'https://www.postgresql.org/'), 
    Postman: new Technology('Postman', folder + 'Postman.png', Category.Tool, 'https://www.postman.com/'), 
    Python: new Technology('Python', folder + 'Python.png', Category.Language, 'https://python.org.br/'), 
    ReactJs: new Technology('React.js', folder + 'ReactJs.png', Category.Framework, 'https://pt-br.reactjs.org/'), 
    ReactNative: new Technology('React Native', folder + 'ReactJs.png', Category.Framework, 'https://reactnative.dev/'), 
    ReactRouter: new Technology('React Router', folder + 'ReactRouter.svg', Category.Tool, 'https://reactrouter.com/'), 
    Redux: new Technology('Redux', folder + 'Redux.png', Category.Tool, 'https://redux.js.org/'), 
    SASS: new Technology('SASS/SCSS', folder + 'SASS.png', Category.Language, 'https://sass-lang.com/'), 
    SQL: new Technology('SQL', folder + 'SQL.png', Category.Language, 'https://docs.microsoft.com/pt-br/sql/t-sql/language-reference?view=sql-server-ver15'), 
    Typescript: new Technology('Typescript', folder + 'Typescript.svg', Category.Language, 'https://www.typescriptlang.org/'), 
    VBA: new Technology('Visual Basic for Applications', folder + 'VBA.png', Category.Language, 'https://docs.microsoft.com/pt-br/office/vba/library-reference/concepts/getting-started-with-vba-in-office'), 
    Vue: new Technology('Vue', folder + 'Vue.png', Category.Framework, 'https://vuejs.org/'), 
};

export default technologies;
