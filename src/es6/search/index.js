import Ele from '../elements';

const projects = Ele.search.projects;

if (projects !== null) {
    projects.addEventListener('click', e => {
        const child = Array.from(e.currentTarget.children);
        child.map(c => {
            if (c == e.target || c == e.target.parentElement) {
                c.classList.add('active');
            } else {
                if (
                    e.target.nodeName === 'FIGURE' ||
                    e.target.parentElement.nodeName === 'FIGURE'
                ) {
                    c.classList.remove('active');
                }
            }
        });
    });
}
