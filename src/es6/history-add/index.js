import {
    investHistory
} from '../elements';

const button = investHistory.addButton;

const firstLi = (x) => {
    let li = document.createElement('li');
    li.innerText = '2019-04-03';
    x.appendChild(li);
}
const secondLi = (x) => {
    let li = document.createElement('li');
    li.innerText = '매도';
    x.appendChild(li);
}
const thirdLi = (x) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    li.innerText = '12345234';
    span.innerText = 'AMB';
    let ul = x.appendChild(li);
    ul.appendChild(span);
}
const fourthLi = (x) => {
    let li = document.createElement('li');
    li.innerText = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사';
    x.appendChild(li);
}

function historyAdd() {
    const container = this.parentElement.children[0];
    const record = document.querySelector('.history-record');
    const ul = document.createElement('ul');
    firstLi(ul);
    secondLi(ul);
    thirdLi(ul);
    fourthLi(ul);
    record.before(ul);
}

if (button !== null) {
    button.addEventListener('click', historyAdd);
}