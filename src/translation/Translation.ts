export interface sentences {
    developerTitle : string,
    aboutMe : string,
    aboutMeSectionLabel : string,
    selfDescription: string,
    skills : string,
    skillsSectionLabel : string,
    myProjects : string,
    myProjectsSectionLabel : string,
    previousExperiences : string,
    previousExperiencesSectionLabel : string,
    academicFormation : string,
    academicFormationSectionLabel : string,
    seeOnGithub : string,
    currentJob : string,
    foreignLanguage : string,
    english : string,
    foreignLanguageImage : string,
    foreignLanguageUrl : string, 
    relatedTechnologies : string,
// Projects
    cultueTitle: string,
    cultueSubtitle : string,
    cultueDescription: string,
    bibleForHumansTitle: string,
    bibleForHumansSubtitle : string,
    bibleForHumansDescription: string,
    bibleForHumansLink: string,
    vidAngelTitle: string,
    vidAngelSubtitle: string,
    vidAngelDescription: string,
    vidAngelLink : string,
    myShopTitle : string,
    myShopSubtitle : string,
    myShopDescription : string,
    figmaBy : string,
    portfolioTitle : string,
    portfolioSubtitle : string,
    portfolioDescription : string,
    acaiAntonioTitle : string,
    acaiAntonioSubtitle : string,
    acaiAntonioDescription : string,
    ultimatoSystemTitle : string,
    ultimatoSystemSubtitle : string,
    ultimatoSystemDescription : string,
    ultimatoFinalPaperLink : string,
    boardGameHelperTitle : string,
    boardGameHelperSubtitle : string,
    boardGameHelperDescription : string,
    ballGameTitle : string,
    ballGameSubtitle : string,
    ballGameDescription : string,
// Professional Experiences
    englishTeacher : string,
    englishTeacherDescription : string,
    photographyEditor : string,
    photographyEditorDescription : string,
    pythonTeacher : string,
    pythonTeacherDescription : string,
    intern : string,
    internDescription : string,
    excelTeacher : string,
    excelTeacherDescription : string,
    fullstackDeveloper : string,
    fullstackDeveloperDescription : string,
    contractDeveloper : string,
    contractDeveloperDescription : string,
    administrativeAssistant : string,
    administrativeAssistantDescription : string,
    storageAdministrator : string,
    storageAdministratorDescription : string,
    frontendDeveloper : string,
    frontendDeveloperDescription : string,
    graduation : string,
    graduationDescription : string,
    graduationEnade : string,
    graduationTCC : string,
}

const translation : Record<string, sentences> = {
    'ptasd-asdsaadBR': {
        developerTitle: 'Desenvolvedor Front-End',
        aboutMe: "Quem Sou Eu?",
        aboutMeSectionLabel: 'Sobre Mim',
        selfDescription: "Eu sou um desenvolvedor web e mobile situado na histórica Ouro Preto, MG.\n\nSou formado em engenharia de produção, mas acabei percebendo que minha real paixão profissional é desenvolvimento de softwares. Então decidi me aprofundar nessa área, pra tentar ganhar a vida programando. Eu comecei construindo algumas ideias legais que tinha para websites e apps com o intuito de aprender que você pode ver abaixo.\n\nTenho grande paixão por melhorar coisas, e adoro usar tecnologia para tornar o trabalho mais fácil pras pessoas no dia-a-dia, o que exige ouvir bastante as pessoas, e tentar se colocar no lugar delas. Eu adoro desafios e aprender coisas novas, especialmente se elas forem úteis.",
        skills: 'Principais Competências',
        skillsSectionLabel: 'Competências',
        myProjects: "Meus Projetos",
        myProjectsSectionLabel: 'Projetos',
        previousExperiences: 'Experiência Profissional',
        previousExperiencesSectionLabel: 'Experiências',
        seeOnGithub: 'Ver no GitHub',
        currentJob: 'hoje',
        academicFormation: 'Formação Acadêmica',
        academicFormationSectionLabel: 'Formação',
        foreignLanguage : 'Inglês Fluente',
        english : 'Inglês Fluente',
        foreignLanguageImage : 'English.png',
        foreignLanguageUrl: 'https://www.britannica.com/topic/English-language',
        relatedTechnologies: 'Ver competências relacionadas',
    // Projects
        cultueTitle: 'Cultue',
        cultueSubtitle: 'Apresentações de Slides para Igrejas',
        cultueDescription: 'Aplicação web voltada para a criação de slides para cultos de igrejas.\nUtiliza os apis: vagalume e biblia para buscar letras de músicas e textos bíblicos e aloca-los em slides.\nPermite a personalização dos slides e exportações em HTML ou PowerPoint.',
        bibleForHumansTitle: 'Bíblia Para Humanos',
        bibleForHumansSubtitle : 'API Rest',
        bibleForHumansDescription: 'Um API Rest construído em Node.js que recebe referências bíblicas da forma que humanos escrevem. Permite usuários finais escreverem referências bíblicas em uma forma não-rígida, e retorna textos bíblicos em 7 diferentes versões.',
        bibleForHumansLink: 'Clique para ver o repositório GitHub da página de apresentação do API.',
        vidAngelTitle: 'VidAngel Subtitles',
        vidAngelSubtitle: '',
        vidAngelDescription: 'Extensão para o Google Chrome que modifica o site VidAngel, um filtrador de conteúdo impróprio em filmes e séries dos serviços de streaming comuns. O site está disponível apenas em inglês, a extensão utiliza o API OpenSubtitles para adicionar automaticamente legendas de qualquer idioma, sincronizando-as com os filtros selecionados.', 
        vidAngelLink: 'Clique para conhecer mais sobre o VidAngel.',
        myShopTitle : 'MyShop',
        myShopSubtitle : 'E-Commerce',
        myShopDescription : 'Aplicativo Mobile de ecommerce para Android ou IOs. Design reproduzido a partir do ',
        figmaBy: 'Figma de Oleh Chabanov.',
        portfolioTitle : 'Este Portfólio Incrível',
        portfolioSubtitle : '',
        portfolioDescription : 'Este site! Registrado aqui apenas para indicar as tecnologias utilizadas.',
        acaiAntonioTitle: 'Açaí da Ana',
        acaiAntonioSubtitle: '(EM CONSTRUÇÃO)',
        acaiAntonioDescription: 'Aplicativo em React Native para venda virtual de açaís. Em andamento.',
        ultimatoSystemTitle: 'Editora Ultimato',
        ultimatoSystemSubtitle: 'Sistema Interno',
        ultimatoSystemDescription: 'Sistema construído em Access para controle das atividades internas gerais da Editora Ultimato. Banco de Dados com 400 mil clientes.\n\nInclui módulos de vendas, incluindo controle de metas, registros de clientes e campanhas publicitárias, ponto eletrônico, controle de royalties, estoques, envios e cobranças.',
        ultimatoFinalPaperLink: 'Clique para ler mais detalhes no Trabalho de Conclusão de Curso sobre o projeto.',
        boardGameHelperTitle: 'Tropa Remanescente',
        boardGameHelperSubtitle: 'Apoio para o Jogo',
        boardGameHelperDescription: 'Aplicativo de apoio para o jogo de tabuleiro "Tropa Remanescente".',
        ballGameTitle: 'Mereo Bounce',
        ballGameSubtitle: '',
        ballGameDescription: 'Joguinho de pular obstáculos, desenvolvido em Angular. Criei para tentar chamar atenção durante o processo seletivo para a empresa Mereo.',
    // Professional Experiences
        englishTeacher : 'Professor de Inglês',
        englishTeacherDescription : 'Ministração de Aulas e Monitorias em Inglês. Escola com foco em inglês empresarial.',
        photographyEditor : 'Editor de Fotografia',
        photographyEditorDescription : 'Tratamento/edição de fotografias de estúdio utilizando Adobe Photoshop, Lightroom. Diagramação de álbuns personalizados utilizando Adobe InDesign.',
        pythonTeacher : 'Monitor de Aulas de Python',
        pythonTeacherDescription : 'Auxílio na ministração de aulas de programação em Python em inglês. Tradução dos roteiros de aula para inglês.',
        intern : 'Estagiário em Administração',
        internDescription : 'Auxílio na administração do sistema e banco de dados. Auxílio no controle de estoque.',
        excelTeacher : 'Professor de Excel',
        excelTeacherDescription : 'Curso de Excel de curto prazo para os funcionários da empresa.',
        fullstackDeveloper : 'Desenvolvedor Fullstack',
        fullstackDeveloperDescription : 'Desenvolvimento de melhorias no sistema de assinaturas, pagamentos e vendas. Saneamento do banco de dados, obtenção de relatórios personalizados.',
        contractDeveloper : 'Desenvolvedor Fullstack - Sob Demanda',
        contractDeveloperDescription : 'Manutenção do sistema da empresa em regime remoto, sob demanda.',
        administrativeAssistant : 'Assistente em Administração',
        administrativeAssistantDescription : 'Área de Licitações e Contratos: Controle de saldos de contratos, elaboração de contratos e documentos, verificação de regularidade de empresas.',
        storageAdministrator : 'Administrador de Almoxarifado',
        storageAdministratorDescription : 'Organização e planejamento de estoques. Manutenção do catálogo de materiais. Comunicação com o setor de desenvolvimento de sistemas. Automação de pequenas tarefas usando Python e NodeJs.',
        frontendDeveloper : 'Desenvolvedor Front-End',
        frontendDeveloperDescription : 'Desenvolvimento e manutenção de módulos web em Angular e AngularJS, utilizando metodologias ágeis (Scrum). Equipe internacional.',
        graduation: 'Graduação em Engenharia de Produção',
        graduationDescription: '',
        graduationEnade: 'Curso nº 1 do Brasil em Engenharia de Produção para turma 2013-2017, segundo ENADE.',
        graduationTCC: 'Trabalho de Conclusão de Curso foi um estudo de caso sobre normalização de Banco de Dados relacional e melhoria do sistema interno de uma editora.', 
    },
    'en': {
        developerTitle: 'Front-end Developer',
        aboutMe: 'About Me',
        aboutMeSectionLabel: 'About Me',
        selfDescription: "I'm web and mobile developer based on the historical Ouro Preto, Brazil. I gratuated in Industrial Engineering, but ended up realizing that my true professional passion was software development, so I decided to dig deep on that area to make a living out of programming. I started out building some cool website ideas that I had in order to learn, until I was hired.\n\nI have a passion for improving things, and specially for using technology to make work easier for people on their daily routines, which takes a lot of listening and trying to put yourself in other people's shoes. I love challenges, and learning new things, specially if they're useful.\n\nI believe the workplace is a great place to learn and meet people, and believe in the importance of a friendly enviroment with good relationships and mutual respect.",
        skills: 'Main Skills',
        skillsSectionLabel: 'Skills',
        myProjects: 'My Projects',
        myProjectsSectionLabel: 'Projects',
        previousExperiences: 'Professional Experience',
        previousExperiencesSectionLabel: 'Experiences',
        seeOnGithub: 'See on GitHub',
        currentJob: 'today',
        academicFormation: 'Education',
        academicFormationSectionLabel: 'Education',
        foreignLanguage: 'Native Portuguese',
        english: 'Fluent English',
        foreignLanguageImage: 'Portuguese.png',
        foreignLanguageUrl: 'https://www.portugues.com.br/',
        relatedTechnologies: 'See related skills',
        // Projects
        cultueTitle: 'Cultue',
        cultueSubtitle: 'Slide Presentations for Churches',
        cultueDescription: 'Web application directed at the creation of slide presentations for churches. Uses Vagalume and Bible apis to fetch music lyrics and biblical texts and distribute them in the correct number of slides. Allows for personalization and exporting as HTML or PowerPoint.',
        bibleForHumansTitle: 'Bible For Humans',
        bibleForHumansSubtitle : 'API Rest',
        bibleForHumansDescription: 'A restful API built on Node.JS, that receives biblical references in a way written by humans. Allows end users to write bible references in a non-rigid format and returns biblical texts in 7 different versions.',
        bibleForHumansLink: 'Click to see the GitHub repository for the API\'s presentation page.',
        vidAngelTitle: 'VidAngel Subtitles',
        vidAngelSubtitle: '',
        vidAngelDescription: `Extension for Google Chrome that uses the OpenSubtitles Api to add subtitles to movies and TV shows on the VidAngel streaming service.`,
        vidAngelLink: 'Click to learn more about VidAngel.',
        myShopTitle : 'MyShop',
        myShopSubtitle : 'E-Commerce',
        myShopDescription : 'Mobile E-commerce app for Android or IOs. Design reproduced from ',
        figmaBy: 'Figma by Oleh Chabanov.',
        portfolioTitle : `This Awesome Portfolio`,
        portfolioSubtitle : '',
        portfolioDescription : 'This website! Registered here only to show the technologies that were used.',
        acaiAntonioTitle: "Ana's Açaí",
        acaiAntonioSubtitle: '(IN DEVELOPMENT)',
        acaiAntonioDescription: 'React Native mobile App for sales of Açaí.',
        ultimatoSystemTitle: 'Ultimato: Publishing House',
        ultimatoSystemSubtitle: 'Internal Business System',
        ultimatoSystemDescription: 'System built in Access for controlling general internal activities of Ultimato Publishing House. Database with over 400 thousand clients. Includes modules for sales, goals and retribution, clients profiles, marketing campaigns, eletronic timecards, royalties payment, storage, expedition and charging.',
        ultimatoFinalPaperLink: 'Click to read more details on the Final Paper written about the system. (Portuguese Only)',
        boardGameHelperTitle: 'Remainder Troop',
        boardGameHelperSubtitle: 'Board Game Helper',
        boardGameHelperDescription: 'Support app for the "Remainder Troop" board game.',
        ballGameTitle: 'Mereo Bounce',
        ballGameSubtitle: '',
        ballGameDescription: 'Small game of jumping obstacles, created as I learnet Angular to try and impress the folks at Mereo before they interviewed me.',
    // Professional Experiences
        englishTeacher : 'English Teacher',
        englishTeacherDescription : 'Ministering english classes and correcting tests. School focused on english for enterprises.',
        photographyEditor : 'Photo Editor',
        photographyEditorDescription : 'Editing/treating studio photographs using Adobe Photoshop, Lightroom. Diagramming personalized photo albums using Adobe InDesign.',
        pythonTeacher : 'Python Tutor',
        pythonTeacherDescription : 'Helping to minister programming classes in Python for engineering students. Classes ministered in english.',
        intern : 'Administrative Intern',
        internDescription : 'Supporting administration of system and database, storage management and publicity campaigns.',
        excelTeacher : 'Excel Teacher',
        excelTeacherDescription : 'Ministering short term Excel course for company employees.',
        fullstackDeveloper : 'Fullstack Developer',
        fullstackDeveloperDescription : 'Maintance and enhancement of the internal system of the company. Process automation. User support. Database sanitizing, normalization. Bulding custom SQL reports. Database of over 500 thousand clients.',
        contractDeveloper : 'System Mantainer',
        contractDeveloperDescription : 'Remote maintance of internal system on demand.',
        administrativeAssistant : 'Administrative Assistante',
        administrativeAssistantDescription : 'Purchases and Contracts Sector: Control of contracts values and services, writing of contracts and documents, companies background check.',
        storageAdministrator : 'Storehouse Manager',
        storageAdministratorDescription : 'Organization and planning of stocks, catalogue maintance, communication with development sector. Automation of small tasks using Python and NodeJs.',
        frontendDeveloper : 'Front-End Developer',
        frontendDeveloperDescription : 'Development and maintance of modules in Angular and AngularJS, using agile methodologies (Scrum). International team.',
        graduation: "Bachelor's Degree in Industrial Engineering",
        graduationDescription: '',
        graduationEnade: "School was 1º place for industrial engineering in Brazil's national evaluation of universities for my class' year.",
        graduationTCC: 'Final paper was a case study in Relational Database normalization and user interface improvement in a publishing house. (Portuguese Only)', 
    }
};

const $t = (key : keyof sentences) => {
    let languageCode = getLanguageCode();
    return translation[languageCode][key];
}

const getGeneralLanguage = (code : string) => code.split('-')[0];

export const getLanguageCode = () => {
    let languageCode : string = window.navigator.language;
    if (!(languageCode in translation)) {
        for (let k of Object.keys(translation)) {
            if (getGeneralLanguage(k) === getGeneralLanguage(languageCode))
                break;
        }
        languageCode = 'en';
    }
    return languageCode;
}

export default $t;