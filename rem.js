~function() {
  function setHtmlFontSize () {
    var deviceWidth = document.documentElement.clientWidth > 640 ? 640 : document.documentElement.clientWidth;
    document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 6.4 + 'px !important';
  }
  setHtmlFontSize();
  window.addEventListener('resize', setHtmlFontSize)
}();
