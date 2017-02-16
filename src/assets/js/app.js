$(document).foundation();

var magellan = new Foundation.Magellan($('#main-nav'));
var mainBar = $('#main-bar');

function updateBarHeight(size) {
  if(size == 'small') {
    magellan.options.barOffset = 0;
  } else {
    magellan.options.barOffset = mainBar.height();
  }
}

// Initialize
updateBarHeight(Foundation.MediaQuery.current);

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  updateBarHeight(newSize);
});
