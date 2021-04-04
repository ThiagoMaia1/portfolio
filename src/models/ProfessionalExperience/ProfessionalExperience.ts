import getTranslatedSentence, { sentences } from "../../translation/Translation";
import companies from "../Company/Companies";
import Company from "../Company/Company";

class ProfessionalExperience {
    title : string;
    description : string;
    company : Company;
    initialDate : Date;

    constructor (   
        job : keyof sentences,
        public companyKey : keyof typeof companies,
        initialYear : number,
        initialMonth : number,
        public durationInMonths : number | undefined,
        public relevantForIT = true,
    ) {
        this.title = getTranslatedSentence(job);
        this.description = getTranslatedSentence(job + 'Description' as keyof sentences);
        this.company = companies[companyKey];
        this.initialDate = new Date(initialYear, initialMonth, 1, 0, 0, 0);
    }

    get finalDate() {
        if (this.durationInMonths === undefined) return undefined;
        const wholeYears = Math.floor(this.durationInMonths/12);
        const year = this.initialDate.getFullYear() + wholeYears;
        const month = this.initialDate.getMonth() + this.durationInMonths - wholeYears*12;
        return new Date(year, month, 1, 0, 0, 0);
    }
}

export default ProfessionalExperience;