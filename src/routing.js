'use strict';

import { createRouter } from 'router5';
import browserPlugin from 'router5/plugins/browser';
import listenersPlugin from 'router5/plugins/listeners';

const options = {};
const router = createRouter([], options)
    .usePlugin(browserPlugin({ useHash: true, defaultRoute: '' }))
    .usePlugin(listenersPlugin());

router.addListener(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

export default router;