import Ele from '../elements';
import selected from '../function/selected';

const invest = Ele.invest.self;

if (invest !== null) {
    /*
        tablet landscape
        laptop
        desktop
        프로젝트 선택 메뉴
    */
    const pcMenu = Ele.invest.pcMenu;

    pcMenu.addEventListener('click', selected);

    /*
        mobile
        tablet portrait
        프로젝트 선택 메뉴
    */
    const mobileMenu = Ele.invest.mobileMenu;
    const mobileMenuBox = Ele.invest.mobileMenuBox;

    mobileMenu.addEventListener('click', () => {
        mobileMenuBox.classList.toggle('on');
    });
}
