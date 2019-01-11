import Ele from '../elements';

const page = Ele.paging;
if (page !== null) {
    page.addEventListener('click', e => {
        const child = Array.from(e.currentTarget.children);
        child.map(c => {
            if (c == e.target || c == e.target.parentElement) {
                if (c.classList.contains('page')) {
                    c.classList.add('active');
                }
            } else {
                if (e.target.nodeName === 'LI' || e.target.parentElement.nodeName === 'LI') {
                    c.classList.remove('active');
                }
            }
        });
    });
}
