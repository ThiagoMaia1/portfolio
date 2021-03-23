import Category from "../Category";
import Technology from "./Technology";

const folder : string = './logos/technologies/';

const technologies : Record<string, Technology> = {
    'Access': new Technology('Access', folder + 'Access.svg', Category.Software), 
    'AdobeIllustrator': new Technology('Adobe Illustrator', folder + 'AdobeIllustrator.png', Category.Software), 
    'AdobeIndesign': new Technology('Adobe Indesign', folder + 'AdobeIndesign.png', Category.Software), 
    'AdobeLightroom': new Technology('Adobe Lightroom', folder + 'AdobeLightroom.png', Category.Software), 
    'AdobePremiere': new Technology('Adobe Premiere', folder + 'AdobePremiere.png', Category.Software), 
    'AdobePhotoshop': new Technology('Adobe Photoshop', folder + 'AdobePhotoshop.png', Category.Software), 
    'AWS': new Technology('Amazon Web Services', folder + 'AWS.svg', Category.Tool), 
    'ChromeCast': new Technology('ChromeCast', folder + 'ChromeCast.png', Category.Tool), 
    'ChromeExtensions': new Technology('ChromeExtensions', folder + 'ChromeExtensions.png', Category.Tool), 
    'CSS3': new Technology('CSS 3', folder + 'CSS3.png', Category.Language), 
    'Dart': new Technology('Dart', folder + 'Dart.png', Category.Language), 
    'Excel': new Technology('Excel', folder + 'Excel.png', Category.Software), 
    'Figma': new Technology('Figma', folder + 'Figma.png', Category.Tool), 
    'Firebase': new Technology('Firebase', folder + 'Firebase.png', Category.Tool), 
    'Flutter': new Technology('Flutter', folder + 'Flutter.png', Category.Framework), 
    'GitHub': new Technology('GitHub', folder + 'GitHub.png', Category.Tool), 
    'HTML5': new Technology('HTML 5', folder + 'HTML5.png', Category.Language), 
    'Javascript': new Technology('Javascript', folder + 'Javascript.png', Category.Language), 
    'Nodejs': new Technology('Node.js', folder + 'Nodejs.png', Category.Language), 
    'PlayStore': new Technology('Android Play Store', folder + 'PlayStore.png', Category.Tool), 
    'PostgreSQL': new Technology('PostgreSQL', folder + 'PostgreSQL.png', Category.Software), 
    'Postman': new Technology('Postman', folder + 'Postman.png', Category.Tool), 
    'Python': new Technology('Python', folder + 'Python.png', Category.Language), 
    'ReactJs': new Technology('React.js', folder + 'ReactJs.png', Category.Framework), 
    'ReactNative': new Technology('React Native', folder + 'ReactJs.png', Category.Framework), 
    'ReactRouter': new Technology('React Router', folder + 'ReactRouter.png', Category.Tool), 
    'Redux': new Technology('Redux', folder + 'Redux.png', Category.Tool), 
    'SASS': new Technology('SASS', folder + 'SASS.png', Category.Language), 
    'SQL': new Technology('SQL', folder + 'SQL.png', Category.Language), 
    'Typescript': new Technology('Typescript', folder + 'Typescript.png', Category.Language), 
    'VBA': new Technology('Visual Basic for Applications', folder + 'VBA.png', Category.Language), 
    'Vue': new Technology('Vue', folder + 'Vue.png', Category.Framework), 
    //TODO add Expo
};

export default technologies;
