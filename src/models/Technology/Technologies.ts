import Category from "../Category";
import Technology from "./Technology";

const folder : string = './logos/technologies/';

const technologies = {
    Access: new Technology('Access', folder + 'Access.svg', Category.Software), 
    AdobeIllustrator: new Technology('Adobe Illustrator', folder + 'AdobeIllustrator.png', Category.Software), 
    AdobeIndesign: new Technology('Adobe Indesign', folder + 'AdobeIndesign.png', Category.Software), 
    AdobeLightroom: new Technology('Adobe Lightroom', folder + 'AdobeLightroom.png', Category.Software), 
    AdobePremiere: new Technology('Adobe Premiere', folder + 'AdobePremiere.png', Category.Software), 
    AdobePhotoshop: new Technology('Adobe Photoshop', folder + 'AdobePhotoshop.png', Category.Software), 
    AWS: new Technology('Amazon Web Services', folder + 'AWS.svg', Category.Tool), 
    ChromeCast: new Technology('Chrome Cast', folder + 'ChromeCast.png', Category.Tool), 
    ChromeExtensions: new Technology('Chrome Extensions', folder + 'ChromeExtensions.png', Category.Tool), 
    CSS3: new Technology('CSS 3', folder + 'CSS3.png', Category.Language), 
    Dart: new Technology('Dart', folder + 'Dart.png', Category.Language), 
    Excel: new Technology('Excel', folder + 'Excel.png', Category.Software), 
    Expo: new Technology('Expo', folder + 'Expo.png', Category.Tool), 
    Figma: new Technology('Figma', folder + 'Figma.svg', Category.Tool), 
    Firebase: new Technology('Firebase', folder + 'Firebase.png', Category.Tool), 
    Flutter: new Technology('Flutter', folder + 'Flutter.svg', Category.Framework), 
    GitHub: new Technology('GitHub', folder + 'GitHub.png', Category.Tool), 
    HTML5: new Technology('HTML 5', folder + 'HTML5.png', Category.Language), 
    Javascript: new Technology('Javascript', folder + 'Javascript.svg', Category.Language), 
    NodeJs: new Technology('Node.js', folder + 'Nodejs.png', Category.Language), 
    PaperJs: new Technology('Paper.js', folder + 'PaperJs.png', Category.Tool), 
    PlayStore: new Technology('Android Play Store', folder + 'PlayStore.svg', Category.Tool), 
    PostgreSQL: new Technology('PostgreSQL', folder + 'PostgreSQL.png', Category.Software), 
    Postman: new Technology('Postman', folder + 'Postman.png', Category.Tool), 
    Python: new Technology('Python', folder + 'Python.png', Category.Language), 
    ReactJs: new Technology('React.js', folder + 'ReactJs.png', Category.Framework), 
    ReactNative: new Technology('React Native', folder + 'ReactJs.png', Category.Framework), 
    ReactRouter: new Technology('React Router', folder + 'ReactRouter.svg', Category.Tool), 
    Redux: new Technology('Redux', folder + 'Redux.png', Category.Tool), 
    SASS: new Technology('SASS/SCSS', folder + 'SASS.png', Category.Language), 
    SQL: new Technology('SQL', folder + 'SQL.png', Category.Language), 
    Typescript: new Technology('Typescript', folder + 'Typescript.svg', Category.Language), 
    VBA: new Technology('Visual Basic for Applications', folder + 'VBA.png', Category.Language), 
    Vue: new Technology('Vue', folder + 'Vue.png', Category.Framework), 
};

export default technologies;
