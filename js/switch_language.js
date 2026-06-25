var _prevOnload = window.onload;

window.onload = function() {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-english")[0];
    switchLang.onclick = function() {
        var href = window.location.href;
        var indexOfEn = href.toLowerCase().indexOf('/en/');
        if(indexOfEn !== -1) {
            window.location.href = href.replace('/en/', '/');
        }
        else {
            window.location.href = href.replace(/(^http[s]?:\/\/[a-z0-9.]*[:?0-9]*\/)(.*)/i, '$1en/$2');
        }
        if(typeof(_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}