interface sentences {
    developerTitle : string;
    aboutMe : string;
    selfDescription: string;
    myProjects : string;
    seeOnGithub : string;
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
    acaiAntonioTitle : string,
    acaiAntonioSubtitle : string,
    acaiAntonioDescription : string,
    ultimatoSystemTitle : string,
    ultimatoSystemSubtitle : string,
    ultimatoSystemDescription : string,
    boardGameHelperTitle : string,
    boardGameHelperSubtitle : string,
    boardGameHelperDescription : string,
    ballGameTitle : string,
    ballGameSubtitle : string,
    ballGameDescription : string,
    skills : string,
    foreignLanguage : string,
    foreignLanguageImage : string,
    foreignLanguageUrl : string, 
}

const translation : Record<string, sentences> = {
    'pt-BR': {
        developerTitle: 'Desenvolvedor Front-End',
        aboutMe: "Quem Sou Eu?",
        selfDescription: "Sou formado em engenharia de produção, com experiência em desenvolvimento e administração de sistemas empresariais.\n\nEm minhas experiências profissionais pude contribuir para o desenvolvimento de meu setor. Tenho bastante iniciativa e um olhar crítico para propor melhorias em procedimentos, utilizando ferramentas de tecnologia da informação.\n\nDesde o início de minha graduação me interessei pela área de desenvolvimento/programação, e busco me desenvolver nisso através de cursos online e desenvolvimento de projetos pessoais.\n\nAcredito na importância de um ambiente de trabalho amigável, com bons relacionamentos e respeito mútuo.",
        myProjects: "Meus Projetos",
        seeOnGithub: 'Ver no GitHub',
        cultueTitle: 'Cultue',
        cultueSubtitle: 'Apresentações de Slides para Igrejas',
        cultueDescription: 'Aplicação web voltada para a criação de slides para cultos de igrejas.\nUtiliza os apis: vagalume e biblia para buscar letras de músicas e textos bíblicos e aloca-los em slides.\nPermite a personalização dos slides e exportações em HTML ou PowerPoint.',
        vidAngelTitle: 'VidAngel Subtitles',
        vidAngelSubtitle: '',
        vidAngelDescription: 'Extensão para o Google Chrome que modifica o site VidAngel, um filtrador de conteúdo impróprio em filmes e séries dos serviços de streaming comuns. O site está disponível apenas em inglês, a extensão utiliza o API OpenSubtitles para adicionar automaticamente legendas de qualquer idioma, sincronizando-as com os filtros selecionados.', 
        myShopTitle : 'MyShop',
        myShopSubtitle : 'E-Commerce',
        myShopDescription : 'Aplicativo Mobile de ecommerce para Android ou IOs. Design reproduzido a partir do ',
        portfolioTitle : 'Este Portfólio Incrível',
        portfolioSubtitle : '',
        portfolioDescription : 'Este site! Registrado aqui apenas para indicar as tecnologias utilizadas.',
        acaiAntonioTitle: 'Açaí da Ana',
        acaiAntonioSubtitle: '(EM CONSTRUÇÃO)',
        acaiAntonioDescription: 'Aplicativo em React Native para venda virtual de açaís. Em andamento.',
        ultimatoSystemTitle: 'Editora Ultimato',
        ultimatoSystemSubtitle: 'Sistema Interno',
        ultimatoSystemDescription: 'Sistema construído em Access para controle das atividades internas gerais da Editora Ultimato. Banco de Dados com 400 mil clientes.\n\nInclui módulos de vendas, incluindo controle de metas, registros de clientes e campanhas publicitárias, ponto eletrônico, controle de royalties, estoques, envios e cobranças.',
        boardGameHelperTitle: 'Tropa Remanescente',
        boardGameHelperSubtitle: 'Apoio para o Jogo',
        boardGameHelperDescription: 'Aplicativo de apoio para o jogo de tabuleiro "Tropa Remanescente".',
        ballGameTitle: 'Surpresa pro Ricardo',
        ballGameSubtitle: 'Minigame',
        ballGameDescription: 'Pequeno jogo usando Angular para tentar impressionar o pessoal da Mereo.',
        skills: 'Principais Competências',
        foreignLanguage : 'Inglês Fluente',
        foreignLanguageImage : 'English.png',
        foreignLanguageUrl : 'https://www.britannica.com/topic/English-language',
    },
    'en': {
        developerTitle: 'Front-end Developer',
        aboutMe: "About Me",
        selfDescription: "Sou formado em engenharia de produção, com experiência em desenvolvimento e administração de sistemas empresariais.\n\nEm minhas experiências profissionais pude contribuir para o desenvolvimento de meu setor. Tenho bastante iniciativa e um olhar crítico para propor melhorias em procedimentos, utilizando ferramentas de tecnologia da informação.\n\nDesde o início de minha graduação me interessei pela área de desenvolvimento/programação, e busco me desenvolver nisso através de cursos online e desenvolvimento de projetos pessoais.\n\nAcredito na importância de um ambiente de trabalho amigável, com bons relacionamentos e respeito mútuo.",
        myProjects: "My Projects",
        seeOnGithub: 'See on GitHub',
        cultueTitle: 'Cultue',
        cultueSubtitle: 'Slide Presentations for Churches',
        cultueDescription: 'Web application directed at the creation of slide presentations for churches. Uses Vagalume and Bible apis to fetch music lyrics and biblical texts and distribute them in the correct number of slides. Allows for personalization and exporting as HTML or PowerPoint.',
        vidAngelTitle: 'VidAngel Subtitles',
        vidAngelSubtitle: '',
        vidAngelDescription: `Extension for Google Chrome that uses the OpenSubtitles Api to add subtitles to movies and TV shows on the VidAngel streaming service.`,
        myShopTitle : 'MyShop',
        myShopSubtitle : 'E-Commerce',
        myShopDescription : 'Mobile E-commerce app for Android or IOs. Design reproduced from ',
        portfolioTitle : `This Awesome Portfolio`,
        portfolioSubtitle : '',
        portfolioDescription : 'This website! Registered here only to show the technologies that were used.',
        acaiAntonioTitle: "Ana's Açaí",
        acaiAntonioSubtitle: '(IN DEVELOPMENT)',
        acaiAntonioDescription: 'React Native mobile App for sales of Açaí.',
        ultimatoSystemTitle: 'Ultimato: Publishing House',
        ultimatoSystemSubtitle: 'Internal Business System',
        ultimatoSystemDescription: 'System built in Access for controlling general internal activities of Ultimato Publishing House. Database with over 400 thousand clients. Includes modules for sales, goals and retribution, clients profiles, marketing campaigns, eletronic timecards, royalties payment, storage, expedition and charging.',
        boardGameHelperTitle: 'Remainder Troop',
        boardGameHelperSubtitle: 'Board Game Helper',
        boardGameHelperDescription: 'Support app for the "Remainder Troop" board game.',
        ballGameTitle: 'Surprise for Ricardo',
        ballGameSubtitle: '',
        ballGameDescription: 'Small game created as I learnet Angular to try and impress the fine folks at Mereo.',
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