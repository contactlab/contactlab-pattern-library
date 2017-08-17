'use strict';

import fetchJsonp from 'fetch-jsonp';
import './view.html';

Polymer({
    is: 'gist-embed',
    properties: {
        user: {
            type: String,
            value: ''
        },
        uuid: {
            type: String,
            value: ''
        },
        noMeta: {
            type: Boolean,
            value: false
        },
        _css: {
            type: String
        },
        _loading: {
            type: Boolean,
            value: true
        }
    },

    attached: function () {
        var url = 'https://gist.github.com/';
        url += this.user + '/' + this.uuid + '.json';

        fetchJsonp(url).then(function (response) {
            return response.json();
        }).then(function (json) {
            this._css = json.stylesheet;
            this.$.embed.innerHTML = json.div;
            if (this.noMeta) {
                this.querySelector('.gist-meta').style.display = 'none';
            }
            this._loading = false;
        }.bind(this));
    }

});