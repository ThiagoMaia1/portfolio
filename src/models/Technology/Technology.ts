import Category from '../Category'
import { TechnologyFamilies } from './Technologies'

const folder = 'technologies/'

export default class Technology {
  logoUri: string

  constructor(
    public name: string,
    logoUri: string,
    public category: Category,
    public webPageUrl: string,
    public family: TechnologyFamilies,
  ) {
    this.logoUri = folder + logoUri
  }
}
