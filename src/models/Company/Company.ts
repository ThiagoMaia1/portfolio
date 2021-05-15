class Company {
    constructor (
        public name : string,
        public logoUri : string,
        public pageUrl = '',
        public marginBottomVH ?: number,
    ) {}
}

export default Company;