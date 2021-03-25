import Category from '../Category';

export default class Technology {
    name: string;
    logoUri: any;
    category: Category;
    webPageUrl : string;
    
    constructor(
      name : string,
      logoUri : string,
      category : Category,
      webPageUrl : string,
    ) {
      this.name = name;
      this.logoUri = logoUri;
      this.category = category; 
      this.webPageUrl = webPageUrl;
    }
}