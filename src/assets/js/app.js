$(document).foundation();

var magellan = new Foundation.Magellan($('#main-nav'));
var mainBar = $('#main-bar');

function emCalc(em) {
  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
}

function updateBarHeight(size) {
  if(size == 'small') {
    magellan.options.barOffset = 0;
    magellan.options.threshold = 0;
  } else {
    magellan.options.barOffset = mainBar.height();
    magellan.options.threshold = mainBar.height() + emCalc(1);
  }
}

// Initialize
updateBarHeight(Foundation.MediaQuery.current);

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  updateBarHeight(newSize);
});
