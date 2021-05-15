import technologies from "../Technology/Technologies";
import ProfessionalExperience from "./ProfessionalExperience";

let t = technologies;

const professionalExperiences : ProfessionalExperience[] = [
    new ProfessionalExperience('englishTeacher', 'doBusiness', 2012, 12, 6, [t.ForeignLanguage], true),
    new ProfessionalExperience('photographyEditor', 'romanticaBoutique', 2014, 1, 12, [t.AdobeIndesign, t.AdobeLightroom, t.AdobePhotoshop], true),
    new ProfessionalExperience('pythonTeacher', 'ufvTutor', 2017, 2, 5, [t.Python, t.ForeignLanguage, t.Excel], true),
    new ProfessionalExperience('graduation', 'ufvStudent', 2013, 5, 62, [], true, true),
    new ProfessionalExperience('intern', 'ultimato', 2016, 6, 24, [t.Excel, t.VBA, t.Access], true),
    new ProfessionalExperience('excelTeacher', 'ultimato', 2018, 3, 1, [t.Excel, t.VBA], true),
    new ProfessionalExperience('fullstackDeveloper', 'ultimato', 2018, 6, 7, [t.Excel, t.VBA, t.Access, t.HTML5, t.AdobePhotoshop], true),
    new ProfessionalExperience('contractDeveloper', 'ultimato', 2019, 1, 12, [t.Excel, t.VBA, t.Access], true),
    new ProfessionalExperience('administrativeAssistant', 'ufop', 2019, 1, 18, [t.Word, t.Excel, t.VBA], true),
    new ProfessionalExperience('storageAdministrator', 'ufop', 2020, 7, 10, [t.Excel, t.VBA, t.APIRest, t.NodeJs, t.Python], true),
    new ProfessionalExperience('frontendDeveloper', 'mereo', 2021, 4, undefined, [t.GitHub, t.Angular, t.AngularJS, t.CSharp, t.SQLServer, t.Scrum, t.Typescript, t.Javascript, t.HTML5, t.CSS3, t.SASS, t.Bootstrap, t.Jira, t.Jenkins, t.ForeignLanguage], true),
];

export default professionalExperiences;