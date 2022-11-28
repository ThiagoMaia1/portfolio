import Category from '../Category'
import Technology from '../Technology/Technology'

export default class Project {
  constructor(
    public name: string,
    public subtitle: string,
    public technologies: Array<Technology>,
    public description: string,
    public url: string,
    public logoUri: string,
    public githubUrl: string,
    public imagesUri: string[] = [],
    public linkAfterDescription?: { url: string; label: string },
    public iframeUrl?: string,
  ) {}

  get categories(): Array<Category> {
    const categories = this.technologies.map((t) => t.category)
    const unique = new Set(categories)
    const uniqueArray = [...unique]
    return uniqueArray.sort()
  }

  getCategoryTechnologies(category: Category): Array<Technology> {
    return this.technologies.filter((t) => t.category === category)
  }
}
