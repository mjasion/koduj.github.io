'use strict'

var kodujApp = angular.module('KodujApp', [
    'app.directives',
    'ngSanitize'
])

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

