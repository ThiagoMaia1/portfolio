interface sentences {
    developerTitle : string;
    aboutMe : string;
    selfDescription: string;
    myProjects : string;
}

const translation : Record<string, sentences> = {
    'pt-BR': {
        developerTitle: 'Desenvolvedor Front-End',
        aboutMe: "Quem Sou Eu?",
        selfDescription: "Sou formado em engenheiro de produção, com experiência em administração de estoques e desenvolvimento de sistemas empresariais.\n        \n        Em minhas experiências profissionais pude contribuir para o desenvolvimento de meu setor. Tenho bastante iniciativa e um olhar crítico para propor melhorias em procedimentos, utilizando ferramentas de tecnologia da informação.\n        \n        Desde o início de minha graduação me interessei pela área de desenvolvimento/programação, e busco me desenvolver nisso através de cursos online e desenvolvimento de projetos pessoais.\n        \n        Acredito na importância de um ambiente de trabalho amigável, com bons relacionamentos e respeito mútuo. ",
        myProjects: "Meus Projetos"
    },
    'en': {
        developerTitle: 'Front-end Developer',
        aboutMe: "About Me",
        selfDescription: "Sou formado em engenheiro de produção, com experiência em administração de estoques e desenvolvimento de sistemas empresariais.\n        \n        Em minhas experiências profissionais pude contribuir para o desenvolvimento de meu setor. Tenho bastante iniciativa e um olhar crítico para propor melhorias em procedimentos, utilizando ferramentas de tecnologia da informação.\n        \n        Desde o início de minha graduação me interessei pela área de desenvolvimento/programação, e busco me desenvolver nisso através de cursos online e desenvolvimento de projetos pessoais.\n        \n        Acredito na importância de um ambiente de trabalho amigável, com bons relacionamentos e respeito mútuo. ",
        myProjects: "My Projects"
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