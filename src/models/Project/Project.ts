import Category from "../Category";
import Technology from "../Technology/Technology";

export default class Project {
    name : string;
    subtitle: string;
    technologies : Array<Technology>;
    description : string;
    url : string;
    logoUri : string;
    imagesUri : string[];
    
    constructor(
        name : string,
        subtitle : string,
        technologies : Array<Technology>,
        description : string,
        url : string,
        logoUri : string,
        imagesUri ?: string[],
    ) {
        this.name = name;
        this.subtitle = subtitle;
        this.technologies = technologies;
        this.description = description;
        this.url = url;
        this.logoUri = logoUri;
        this.imagesUri = imagesUri ?? [];
    }

    get categories() : Array<Category> {
        const categories = this.technologies.map(t => t.category);
        const unique = new Set(categories);
        const uniqueArray = [...unique];
        return uniqueArray.sort();
    } 

    getCategoryTechnologies(category : Category) : Array<Technology> {
        return this.technologies.filter(t => t.category === category);
    }
}