'use strict';

import Promise from 'promise-polyfill';
import 'whatwg-fetch';

if (!window.Promise) {
    window.Promise = Promise;
}