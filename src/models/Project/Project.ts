import Technology from "../Technology/Technology";

export default class Project {
    name : string;
    technologies : Array<Technology>;
    description : string;
    url : string;
    logoUri : string;
    imagesUri : string[];
    
    constructor(
        name : string,
        technologies : Array<Technology>,
        description : string,
        url : string,
        logoUri : string,
        imagesUri ?: string[],
    ) {
        this.name = name;
        this.technologies = technologies;
        this.description = description;
        this.url = url;
        this.logoUri = logoUri;
        this.imagesUri = imagesUri ?? [];
    }
}