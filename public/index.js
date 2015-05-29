function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html class=\"no-js\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <title></title>\n    <meta name=\"description\" content=\"\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"stylesheet\" href=\"stylesheets/normalize.css\">\n    <link rel=\"stylesheet\" href=\"stylesheets/main.css\">\n  </head>\n  <body><!--[if lt IE 8]>\n    <p class=\"browsehappy\">\n      You are using an <strong>outdated</strong> browser.\n      Please <a href=\"http://browsehappy.com/\">upgrade your browser</a>\n      to improve your experience.\n    </p><![endif]-->\n    <p>Hello world! This is HTML5 Boilerplate</p>\n    <p>lo</p><a href=\"#\" target=\"_blank\">link fsdf</a>\n    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\"></script>\n    <script>window.jQuery || document.write('<script src=\"javascripts/vendor/jquery-1.11.0.min.js\"><\\/script>')</script>\n  </body>\n</html>");;return buf.join("");
}