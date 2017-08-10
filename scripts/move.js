'use strict';

const copy = require('recursive-copy');
const cb = (error, results) => {
    if (error) {
        console.error('Copy failed: ' + error);
    } else {
        console.info('Copied ' + results.length + ' files');
    }
}
const options = {
    overwrite: true
}


/* Ikonograph */
copy('./node_modules/ikonograph/dist/', './dist/assets/ikonograph', options, cb);

/* WebComponents v0 polyfill */
copy('./node_modules/webcomponents.js/webcomponents-lite.min.js', 
    './dist/assets/webcomponents-lite.min.js', options, cb);