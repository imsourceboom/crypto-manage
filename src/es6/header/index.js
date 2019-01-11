import Ele from '../elements';
import selected from '../function/selected';

const header = Ele.header.self;

if (header !== null) {
    /*
        header의 main 메뉴 active class toggle
    */
    const ul = Ele.header.ul;

    ul.addEventListener('click', selected);
}
