interface sentences {
    developerTitle : string;
    aboutMe : string;
    selfDescription: string;
    myProjects : string;
    cultueTitle: string,
    cultueSubtitle : string,
    cultueDescription: string,
    vidAngelTitle: string,
    vidAngelSubtitle: string,
    vidAngelDescription: string,
    myShopTitle : string,
    myShopSubtitle : string,
    myShopDescription : string,
    portfolioTitle : string,
    portfolioSubtitle : string,
    portfolioDescription : string,
    skills : string,
    foreignLanguage : string,
    foreignLanguageImage : string,
    foreignLanguageUrl : string, 
}

const translation : Record<string, sentences> = {
    'pt-BR': {
        developerTitle: 'Desenvolvedor Front-End',
        aboutMe: "Quem Sou Eu?",
        selfDescription: "Sou formado em engenheiro de produção, com experiência em administração de estoques e desenvolvimento de sistemas empresariais.\n        \n        Em minhas experiências profissionais pude contribuir para o desenvolvimento de meu setor. Tenho bastante iniciativa e um olhar crítico para propor melhorias em procedimentos, utilizando ferramentas de tecnologia da informação.\n        \n        Desde o início de minha graduação me interessei pela área de desenvolvimento/programação, e busco me desenvolver nisso através de cursos online e desenvolvimento de projetos pessoais.\n        \n        Acredito na importância de um ambiente de trabalho amigável, com bons relacionamentos e respeito mútuo. ",
        myProjects: "Meus Projetos",
        cultueTitle: 'Cultue',
        cultueSubtitle: 'Apresentações de Slides para Igrejas',
        cultueDescription: 'Aplicação web voltada para a criação de slides para cultos de igrejas.\nUtiliza os apis: vagalume e biblia para buscar letras de músicas e textos bíblicos e aloca-los em slides.\nPermite a personalização dos slides e exportações em HTML ou PowerPoint.',
        vidAngelTitle: 'VidAngle Subtitles',
        vidAngelSubtitle: '',
        vidAngelDescription: '',
        myShopTitle : 'MyShop',
        myShopSubtitle : 'E-Commerce',
        myShopDescription : 'Aplicativo Mobile de ecommerce para Android ou IOs. Design reroduzido do Figma (TODO: Inserir Link).',
        portfolioTitle : 'Este Portfólio Incrível',
        portfolioSubtitle : '',
        portfolioDescription : 'Este site! Registrado aqui apenas para indicar as tecnologias utilizadas.',
        skills: 'Principais Competências',
        foreignLanguage : 'Inglês Fluente',
        foreignLanguageImage : 'English.png',
        foreignLanguageUrl : 'https://www.britannica.com/topic/English-language',
    },
    'en': {
        developerTitle: 'Front-end Developer',
        aboutMe: "About Me",
        selfDescription: "Sou formado em engenheiro de produção, com experiência em administração de estoques e desenvolvimento de sistemas empresariais.\n        \n        Em minhas experiências profissionais pude contribuir para o desenvolvimento de meu setor. Tenho bastante iniciativa e um olhar crítico para propor melhorias em procedimentos, utilizando ferramentas de tecnologia da informação.\n        \n        Desde o início de minha graduação me interessei pela área de desenvolvimento/programação, e busco me desenvolver nisso através de cursos online e desenvolvimento de projetos pessoais.\n        \n        Acredito na importância de um ambiente de trabalho amigável, com bons relacionamentos e respeito mútuo. ",
        myProjects: "My Projects",
        cultueTitle: 'Cultue',
        cultueSubtitle: 'Slide Presentations for Churches',
        cultueDescription: '',
        vidAngelTitle: 'VidAngle Subtitles',
        vidAngelSubtitle: '',
        vidAngelDescription: `Extension for Google Chrome that uses the OpenSubtitles Api to add subtitles to movies and TV shows on the VidAngel streaming service.`,
        myShopTitle : 'MyShop',
        myShopSubtitle : 'E-Commerce',
        myShopDescription : '',
        portfolioTitle : `This Awesome Portfolio`,
        portfolioSubtitle : '',
        portfolioDescription : '',
        skills: 'Main Skills',
        foreignLanguage : 'Native Portuguese',
        foreignLanguageImage : 'Portuguese.png',
        foreignLanguageUrl : 'https://www.portugues.com.br/',
    }
};

const getTranslatedSentence = (key : keyof sentences) => {
    let languageCode : string = window.navigator.language;
    if (!(languageCode in translation)) {
        for (let k of Object.keys(translation)) {
            if (getGeneralLanguage(k) === getGeneralLanguage(languageCode))
                break;
        }
        languageCode = 'en';
    }
    return translation[languageCode][key];
}

const getGeneralLanguage = (code : string) => code.split('-')[0];

export default getTranslatedSentence;