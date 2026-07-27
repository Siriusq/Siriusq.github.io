var _prevOnload = window.onload;

window.onload = function () {
    var switchEnglish = document.getElementsByClassName("menu-item-switch-to-english")[0];
    var switchChinese = document.getElementsByClassName("menu-item-switch-to-chinese")[0];

    function switchLanguage(targetHost, fallback) {
        var url = new URL(window.location.href);
        var noTranslatePages = [
            // 添加没有对应翻译的页面
            // "/example.html"
            "qut-arch-final-year-guide.html",
            "Test.html",
            "uog-it-course-selection-guide.html",
            "vivo-tws-air-battery-replacement.html"
        ];

        if (noTranslatePages.includes(url.pathname)) {
            window.location.href = fallback;
            return false;
        }

        url.hostname = targetHost;
        window.location.href = url.href;
        return false;
    }

    if (switchEnglish) {
        switchEnglish.onclick = function () {
            return switchLanguage(
                "en.siriusq.top",
                "https://en.siriusq.top/"
            );
        };
    }

    if (switchChinese) {
        switchChinese.onclick = function () {
            return switchLanguage(
                "siriusq.top",
                "https://siriusq.top/"
            );
        };
    }

    if (typeof (_prevOnload) === 'function') {
        _prevOnload();
    }
};