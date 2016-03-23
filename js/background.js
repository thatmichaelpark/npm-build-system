var $ = require('jquery');

var makeBackgroundRed = function() {
    $('body').css('background-color', 'yellow');
};

module.exports = makeBackgroundRed;