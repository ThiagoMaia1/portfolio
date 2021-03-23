import Category from '../Category';

export default class Technology {
    name: string;
    logoUri: any;
    category: Category;
    
    constructor(
       name : string,
       logoUri : string,
       category : Category,
    ) {
       this.name = name;
       this.logoUri = logoUri;
       this.category = category; 
    }
}