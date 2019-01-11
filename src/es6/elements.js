const doc = document;

const elements = {
    header: {
        self: doc.querySelector('body > header'),
        nav: doc.querySelector('header nav'),
        ul: doc.querySelector('header nav ul'),
        li: doc.querySelector('header nav ul li')
    },
    invest: {
        self: doc.querySelector('section.invest'),
        pcMenu: doc.querySelector('section.invest article.project--menu .for--pc ul'),
        mobileMenu: doc.querySelector('section.invest article.project--menu .for--mobile .project'),
        mobileMenuBox: doc.querySelector('section.invest article.project--menu .for--mobile .box')
    },
    paging: doc.querySelector('.list .footer ul'),
    search: {
        self: doc.querySelector('section.search'),
        projects: doc.querySelector('section.search article.selected .invested--projects')
    }
};

export default elements;

console.log('Webpack On!!');
