import $t, { Sentences } from "../../translation/Translation";
import companies from "../Company/Companies";
import Company from "../Company/Company";
import Technology from "../Technology/Technology";

class ProfessionalExperience {
    title : string;
    description : string;
    company : Company;
    initialDate : Date;

    constructor (   
        job : keyof Sentences,
        public companyKey : keyof typeof companies,
        initialYear : number,
        initialMonth : number,
        public durationInMonths : number | undefined,
        public skillSet : Technology[],
        public relevantForIT = true,
        public isEducation = false,
    ) {
        this.title = $t(job);
        this.description = $t(job + 'Description' as keyof Sentences);
        this.company = companies[companyKey];
        this.initialDate = new Date(initialYear, initialMonth - 1, 1, 0, 0, 0);
    }

    get finalDate() {
        if (this.durationInMonths === undefined) return undefined;
        const wholeYears = Math.floor(this.durationInMonths/12);
        const year = this.initialDate.getFullYear() + wholeYears;
        const month = this.initialDate.getMonth() + this.durationInMonths - wholeYears*12 - 1;
        return new Date(year, month, 1, 0, 0, 0);
    }
    
    static companyExperiences = (experiences : ProfessionalExperience[], companyKey : keyof typeof companies, isEducation = false) => 
        experiences.filter(e => e.companyKey === companyKey && e.isEducation === isEducation)
                   .sort((a, b) => b.initialDate.getTime() - a.initialDate.getTime());
    
    static filterByTechnology = (experiences : ProfessionalExperience[], technologyFilter : (technologyArray : Technology[]) => boolean) => 
        experiences.filter(e => e.isEducation || !!technologyFilter(e.skillSet));
}

export default ProfessionalExperience;