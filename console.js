(function() {
    var downloadEl = document.querySelector('.fa-cloud-download');
    function getXScroll(input_downloadEl) {
        if (input_downloadEl === null) {
            return null;
        }
        else if (input_downloadEl.classList.contains('x-scroller')) {
            return input_downloadEl;
        }
        else {
            return getXScroll(input_downloadEl.parentElement);
        }
    }
    var xScroll = getXScroll(downloadEl);
    if (!!xScroll.dataset['originalStyle']) {
        xScroll.setAttribute('style', xScroll.dataset['originalStyle'])
        xScroll.removeAttribute('data-original-style');
        xScroll.removeAttribute('data-originalStyle');
    }
    else {
        xScroll.dataset['originalStyle'] = xScroll.getAttribute('style');
        xScroll.style.position = 'fixed';
        xScroll.style.top = '0px';
        xScroll.style.zIndex = '100';
        xScroll.style.height = '100vh';
    }
})()
