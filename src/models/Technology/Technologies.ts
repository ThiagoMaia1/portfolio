import $t from "../../translation/Translation";
import Category from "../Category";
import Technology from "./Technology";
import { getKeyByValue } from '../../constants/FuncoesGeraisTS'

export type TechnologyFamilies =  'Vanilla' | 'React' | 'ReactNative' | 'Mobile' | 'Vue' | 'Angular' | 'SQL' | 'MicrosoftOffice' | 'NOSQL' | 'API' | 'Design' | 'Adobe' | 'Cloud' | 'MERN' | 'Flutter' | 'Business' | 'Styling' | 'GoogleServices' | 'Languages' | 'Tests'

const technologies = {
    Access: new Technology('Access', 'Access.svg', Category.Database, 'https://www.microsoft.com/en/microsoft-365/access', 'MicrosoftOffice'),
    AdobeIllustrator: new Technology('Adobe Illustrator', 'AdobeIllustrator.png', Category.Software, 'https://www.adobe.com/br/products/illustrator.html', 'Adobe'),
    AdobeIndesign: new Technology('Adobe Indesign', 'AdobeIndesign.png', Category.Software, 'https://www.adobe.com/br/products/indesign.html', 'Adobe'),
    AdobeLightroom: new Technology('Adobe Lightroom', 'AdobeLightroom.png', Category.Software, 'https://www.adobe.com/br/products/photoshop-lightroom.html', 'Adobe'),
    AdobePremiere: new Technology('Adobe Premiere', 'AdobePremiere.png', Category.Software, 'https://www.adobe.com/br/products/premiere.html', 'Adobe'),
    AdobePhotoshop: new Technology('Adobe Photoshop', 'AdobePhotoshop.png', Category.Software, 'https://www.adobe.com/br/products/photoshop.html', 'Adobe'),
    Angular: new Technology('Angular', 'Angular.svg', Category.Framework, 'https://angular.io/', 'Angular'),
    AngularJS: new Technology('AngularJS', 'AngularJS.png', Category.Framework, 'https://angularjs.org/', 'Angular'),
    APIRest: new Technology('API Rest', 'APIRest.png', Category.Tool, 'https://developer.mozilla.org/pt-BR/docs/Glossary/REST', 'API'),
    Apollo: new Technology('Apollo', 'Apollo.svg', Category.Tool, 'https://www.apollographql.com/', 'API'),
    AWS: new Technology('Amazon Web Services', 'AWS.svg', Category.Tool, 'https://aws.amazon.com/', 'Cloud'),
    Azure: new Technology('Microsoft Azure', 'Azure.png', Category.Tool, 'https://azure.microsoft.com/', 'Cloud'),
    Bootstrap: new Technology('Bootstrap', 'Bootstrap.png', Category.Tool, 'https://getbootstrap.com/', 'Styling'),
    ChromeCast: new Technology('Chrome Cast', 'ChromeCast.png', Category.Tool, 'https://developers.google.com/cast', 'GoogleServices'),
    ChromeExtensions: new Technology('Chrome Extensions', 'ChromeExtensions.png', Category.Tool, 'https://developer.chrome.com/docs/extensions/', 'GoogleServices'),
    CSharp: new Technology('C#', 'CSharp.svg', Category.Language, 'https://docs.microsoft.com/pt-br/dotnet/csharp/', 'Languages'),
    CSS3: new Technology('CSS 3', 'CSS3.png', Category.Language, 'https://developer.mozilla.org/pt-BR/docs/Web/CSS', 'Vanilla'),
    Dart: new Technology('Dart', 'Dart.png', Category.Language, 'https://dart.dev/', 'Flutter'),
    Excel: new Technology('Excel', 'Excel.png', Category.Software, 'https://www.microsoft.com/pt-br/microsoft-365/excel', 'MicrosoftOffice'),
    Expo: new Technology('Expo', 'Expo.png', Category.Tool, 'https://expo.io/', 'React'),
    Express: new Technology('Express', 'Express.png', Category.Framework, 'https://expressjs.com/', 'MERN'),
    ForeignLanguage: new Technology($t('english'), 'English.png', Category.Tool, 'https://www.britannica.com/topic/English-language', 'Business'),
    Figma: new Technology('Figma', 'Figma.svg', Category.Tool, 'https://www.figma.com/', 'Design'),
    Firebase: new Technology('Firebase', 'Firebase.png', Category.Tool, 'https://firebase.google.com/', 'Cloud'),
    Flutter: new Technology('Flutter', 'Flutter.svg', Category.Framework, 'https://flutter.dev/', 'Flutter'),
    Gatsby: new Technology('Gatsby', 'Gatsby.png', Category.Framework, 'https://www.gatsbyjs.com/', 'React'),
    GitHub: new Technology('GitHub', 'GitHub.png', Category.Tool, 'https://github.com/', 'Business'),
    GitLab: new Technology('GitLab', 'GitLab.svg', Category.Tool, 'https://gitlab.com/', 'Business'),
    GraphQL: new Technology('GraphQL', 'GraphQL.png', Category.Tool, 'https://graphql.org/', 'API'),
    HTML5: new Technology('HTML 5', 'HTML5.png', Category.Language, 'https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5', 'Vanilla'),
    Javascript: new Technology('Javascript', 'Javascript.svg', Category.Language, 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript', 'Vanilla'),
    Jenkins: new Technology('Jenkins', 'Jenkins.svg', Category.Tool, 'https://www.jenkins.io/', 'Business'),
    Jest: new Technology('Jest', 'Jest.svg', Category.Tool, 'https://jestjs.io/', 'Tests'),
    jQuery: new Technology('jQuery', 'jQuery.svg', Category.Tool, 'https://jquery.com/', 'Angular'),
    Jira: new Technology('Jira', 'Jira.svg', Category.Tool, 'https://www.atlassian.com/software/jira', 'Business'),
    MaterialUI: new Technology('Material UI', 'MaterialUI.svg', Category.Tool, 'https://material-ui.com/', 'Styling'),
    MongoDB: new Technology('MongoDB', 'MongoDB.png', Category.Database, 'https://www.mongodb.com/', 'MERN'),
    MySQL: new Technology('MySQL', 'MySQL.png', Category.Database, 'https://www.mysql.com/', 'SQL'),
    NextJs: new Technology('Next.js', 'NextJs.svg', Category.Tool, 'https://nextjs.org/', 'React'),
    NodeJs: new Technology('Node.js', 'Nodejs.png', Category.Language, 'https://nodejs.org/', 'MERN'),
    PaperJs: new Technology('Paper.js', 'PaperJs.png', Category.Tool, 'http://paperjs.org/', 'Styling'),
    PlayStore: new Technology('Android Play Store', 'PlayStore.svg', Category.Tool, 'https://developer.android.com/distribute/console?hl=pt-br', 'Mobile'),
    PostgreSQL: new Technology('PostgreSQL', 'PostgreSQL.png', Category.Database, 'https://www.postgresql.org/', 'SQL'),
    Postman: new Technology('Postman', 'Postman.png', Category.Tool, 'https://www.postman.com/', 'API'),
    Python: new Technology('Python', 'Python.png', Category.Language, 'https://python.org.br/', 'Languages'),
    ReactJs: new Technology('React JS', 'ReactJs.png', Category.Framework, 'https://pt-br.reactjs.org/', 'React'),
    ReactNative: new Technology('React Native', 'ReactJs.png', Category.Framework, 'https://reactnative.dev/', 'React'),
    ReactRouter: new Technology('React Router', 'ReactRouter.svg', Category.Tool, 'https://reactrouter.com/', 'React'),
    ReactQuery: new Technology('React Query', 'ReactQuery.svg', Category.Tool, 'https://react-query.tanstack.com/', 'React'),
    Redux: new Technology('Redux', 'Redux.png', Category.Tool, 'https://redux.js.org/', 'React'),
    ReduxSaga: new Technology('Redux-Saga', 'ReduxSaga.svg', Category.Tool, 'https://redux-saga.js.org/', 'React'),
    SASS: new Technology('SASS/SCSS', 'SASS.png', Category.Language, 'https://sass-lang.com/', 'Styling'),
    Scrum: new Technology('Scrum', 'Scrum.png', Category.Language, 'https://en.wikipedia.org/wiki/Scrum_(software_development)', 'Business'),
    Sendgrid: new Technology('Twilio Sendgrid', 'SendGrid.png', Category.Language, 'https://sendgrid.com/', 'Business'),
    Sequelize: new Technology('Sequelize', 'Sequelize.svg', Category.Framework, 'https://sequelize.org/', 'SQL'),
    Serverless: new Technology('Serverless', 'Serverless.svg', Category.Tool, 'https://www.serverless.com/', 'API'),
    Slack: new Technology('Slack', 'Slack.svg', Category.Tool, 'https://slack.com/', 'Business'),
    SQL: new Technology('SQL', 'SQL.png', Category.Language, 'https://docs.microsoft.com/pt-br/sql/t-sql/language-reference?view=sql-server-ver15', 'SQL'),
    SQLServer: new Technology('SQL Server', 'SQLServer.png', Category.Software, 'https://www.microsoft.com/pt-br/sql-server/sql-server-downloads', 'SQL'),
    Storybook: new Technology('Storybook', 'Storybook.svg', Category.Tool, 'https://storybook.js.org/', 'React'),
    StyledComponents: new Technology('Styled Components', 'StyledComponents.png', Category.Tool, 'https://styled-components.com/', 'React'),
    SWR: new Technology('SWR', 'SWR.svg', Category.Tool, 'https://swr.vercel.app/', 'React'),
    TailwindCSS: new Technology('Tailwind CSS', 'TailwindCSS.svg', Category.Tool, 'https://tailwindcss.com/', 'Styling'),
    Trello: new Technology('Trello', 'Trello.png', Category.Tool, 'https://trello.com/', 'Business'),
    Typescript: new Technology('Typescript', 'Typescript.svg', Category.Language, 'https://www.typescriptlang.org/', 'Vanilla'),
    VBA: new Technology('Visual Basic for Applications', 'VBA.png', Category.Language, 'https://docs.microsoft.com/pt-br/office/vba/library-reference/concepts/getting-started-with-vba-in-office', 'MicrosoftOffice'),
    Vue: new Technology('Vue', 'Vue.png', Category.Framework, 'https://vuejs.org/', 'Vue'),
    VueX: new Technology('VuX', 'VueX.png', Category.Tool, 'https://vuex.vuejs.org/', 'Vue'),
    VueI18n: new Technology('Vue I18n', 'vueI18n.png', Category.Tool, 'https://kazupon.github.io/vue-i18n/introduction.html', 'Vue'),
    Word: new Technology('Word', 'Word.png', Category.Software, 'https://www.microsoft.com/pt-br/microsoft-365/word', 'MicrosoftOffice'),
};

let t = technologies;
let Vanilla = [t.Javascript, t.HTML5, t.Typescript, t.CSS3, t.SASS];
let Adobe = [t.AdobePhotoshop, t.AdobeIndesign, t.AdobeIllustrator, t.AdobePremiere, t.AdobeLightroom];
let React = [t.ReactJs, t.ReactRouter, t.ReduxSaga, t.NextJs, t.Gatsby, t.StyledComponents, t.ReactNative, t.ReactQuery, t.SWR, t.Storybook, ...Vanilla];
let Cloud = [t.Firebase, t.AWS, t.Serverless, t.Azure, t.Sendgrid]
let ReactNative = [t.ReactNative, t.Expo, t.Redux];
let Flutter = [t.Flutter, t.Dart];

export const technologyFamilies : Record<TechnologyFamilies, Array<Technology>> = {
    Vanilla,
    React,
    Vue: [t.Vue, t.VueX, t.VueI18n, ...Vanilla],
    Angular: [t.Angular, t.AngularJS, t.jQuery, ...Vanilla],
    SQL: [t.SQL, t.PostgreSQL, t.MySQL, t.SQLServer, t.Sequelize],
    MicrosoftOffice: [t.Access, t.Word, t.Excel, t.VBA],
    NOSQL: [t.Firebase, t.MongoDB],
    API: [t.APIRest, t.AWS, t.GraphQL, t.Apollo, t.Postman, t.Express, t.Serverless],
    Design: [t.Figma, ...Adobe],
    Adobe,
    ReactNative,
    Mobile: [...Flutter, ...ReactNative, t.PlayStore],
    Flutter,
    Cloud,
    GoogleServices: [t.ChromeExtensions, t.PlayStore, t.ChromeCast],
    MERN: [t.NodeJs, ...React, t.Express, t.MongoDB],
    Business: [t.ForeignLanguage, t.Trello, t.Sendgrid, t.GitHub, t.GitLab, t.Excel, t.Scrum, t.Jira, t.Jenkins, t.Slack, ...Cloud],
    Styling: [t.Bootstrap, t.TailwindCSS, t.PaperJs, t.CSS3, t.SASS, t.StyledComponents, t.MaterialUI],
    Languages: [t.Python, t.NodeJs, t.CSharp, t.Javascript, t.Typescript, t.Dart],
    Tests: [t.Jest],
};

export const getTechnologiesOfFamily = (technology : Technology) => 
    technologyFamilies[technology.family].map(t =>
        getKeyByValue(technologies, t)
    )

export type TechnologiesKey = keyof typeof technologies;

export default technologies;
