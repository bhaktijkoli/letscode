window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');

require('./core/bootstrap');
