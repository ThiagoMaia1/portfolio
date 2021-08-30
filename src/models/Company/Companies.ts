import Company from "./Company";

const companies = {
    mereo: new Company('Mereo', 'mereo.svg', 'https://mereo.com/'),
    ufop: new Company('Universidade Federal de Ouro Preto', 'ufop.jpg', 'https://ufop.br/'),
    ufvTutor: new Company('Universidade Federal de Viçosa', 'ufv.png', 'https://drive.google.com/file/d/1xexHKVkEbPjt9yVbi9Qmr3LgISoH5lJK/view?usp=sharing', 23),
    ultimato: new Company('Editora Ultimato', 'ultimato.png', 'https://www.ultimato.com.br/'),
    romanticaBoutique: new Company('Romântica Boutique', 'romanticaBoutique.png', 'https://www.facebook.com/RomanticaBoutiqueprodutossensuais/'),
    doBusiness: new Company('Do Business - English School', 'doBusiness.png', 'https://www.facebook.com/Do-Business-Language-School-119981734847291/'),
    rsdCash: new Company('RSD - Criptocurrency', 'rsdCash.svg'),
    flomatika: new Company('Flomatika', 'flomatika.svg'),
    ufvStudent: new Company('Universidade Federal de Viçosa', 'ufv.png', 'https://www.ufv.br/'),
}
export type CompanyKey = keyof typeof companies;

export default companies;