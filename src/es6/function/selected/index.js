const selected = e => {
    // console.log(e.currentTarget);
    const child = Array.from(e.currentTarget.children);

    child.map(c => {
        if (c == e.target || c == e.target.parentElement) {
            // console.log(e.target.nodeName);
            // console.log(e.target.parentElement);
            c.classList.add('on');
        } else {
            if (e.target.nodeName === 'LI' || e.target.parentElement.nodeName === 'LI') {
                // console.log(e.target.parentElement.nodeName);
                c.classList.remove('on');
            }
        }
    });
};

export default selected;
