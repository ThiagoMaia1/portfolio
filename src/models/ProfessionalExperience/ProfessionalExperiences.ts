import technologies from "../Technology/Technologies";
import ProfessionalExperience from "./ProfessionalExperience";

let t = technologies;

const professionalExperiences : ProfessionalExperience[] = [
    new ProfessionalExperience('englishTeacher', 'doBusiness', 2012, 12, 6, [t.ForeignLanguage], true),
    new ProfessionalExperience('photographyEditor', 'romanticaBoutique', 2014, 1, 12, [t.AdobeIndesign, t.AdobeLightroom, t.AdobePhotoshop], true),
    new ProfessionalExperience('pythonTeacher', 'ufvTutor', 2017, 2, 5, [t.Python, t.ForeignLanguage, t.Excel], true),
    new ProfessionalExperience('graduation', 'ufvStudent', 2013, 5, 62, [], true, true),
    new ProfessionalExperience('excelTeacher', 'ultimato', 2018, 3, 1, [t.Excel, t.VBA], true),
    new ProfessionalExperience('fullstackDeveloper', 'ultimato', 2016, 6, 31, [t.VBA, t.Excel, t.Access, t.HTML5, t.AdobePhotoshop], true),
    new ProfessionalExperience('contractDeveloper', 'ultimato', 2019, 1, 12, [t.VBA, t.Excel, t.Access], true),
    new ProfessionalExperience('administrativeAssistant', 'ufop', 2019, 1, 18, [t.Word, t.Excel, t.VBA, t.APIRest, t.NodeJs, t.Python], true),
    new ProfessionalExperience('frontendDeveloper', 'mereo', 2021, 4, 3, [t.Typescript, t.Javascript, t.HTML5, t.CSS3, t.SASS, t.Bootstrap, t.AngularJS, t.Angular, t.CSharp, t.SQLServer, t.GitHub, t.Jenkins, t.Jira, t.Scrum, t.ForeignLanguage], true),
    new ProfessionalExperience('reactDeveloper', 'rsdCash', 2021, 5, 4, [t.Typescript, t.SASS, t.ReactJs, t.NextJs, t.StyledComponents, t.ReactQuery, t.Jest, t.GitHub, t.ForeignLanguage], true),
    new ProfessionalExperience('reactAndNodeDeveloper', 'flomatika', 2021, 6, undefined, [t.Typescript, t.CSS3, t.ReactJs, t.MaterialUI, t.SWR, t.Jest, t.Storybook, t.NodeJs, t.Sequelize, t.PostgreSQL, t.Serverless, t.AWS, t.GitLab, t.Scrum, t.Jira, t.Slack, t.ForeignLanguage], true),
    new ProfessionalExperience('reactDeveloperTurtle', 'turtleOs', 2021, 9, undefined, [t.Typescript, t.SASS, t.ReactJs, t.ReactRouter, t.GraphQL, t.Apollo, t.Figma, t.GitHub, t.ForeignLanguage], true),
];

export default professionalExperiences;