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

/* Polymer v1.x */
copy('./node_modules/@polymer/polymer/', './dist/assets/polymer/', options, cb);

/* Ikonograph v3 */
// copy('./node_modules/ikonograph/dist/', './dist/assets/ikonograph', options, cb);

/* WebComponents v0 polyfill */
copy('./node_modules/webcomponents.js/webcomponents-lite.min.js', 
    './dist/assets/webcomponents-lite.min.js', options, cb);

/* Web Animations API polyfill */
copy('./node_modules/web-animations-js/web-animations-next.min.js',
    './dist/assets/web-animations-next.min.js', options, cb);