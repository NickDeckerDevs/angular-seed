'use strict';

angular.module('lunch', [
    'ngSanitize',
    'dcbImgFallback',
    'venue.controller',
    'venue.services',
    'user.controller',
    'user.services',
    'user.storage',
    'app.filters'
    // 'app.directives'
]);
