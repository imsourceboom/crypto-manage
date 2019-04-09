import flatpickr from 'flatpickr';
import {
    Korean
} from "flatpickr/dist/l10n/ko.js";

import {
    flatpic
} from '../elements';

const inputDate = flatpic.input;



flatpickr(inputDate, {
    'locale': Korean,
    // disableMobile: "true"
});