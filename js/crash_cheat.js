var OriginTitle = document.title;
var titleTime;
var crashedIcon;

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    crashedIcon = "/images/crashed-dark.png";
} else {
    crashedIcon = "/images/crashed.png";
}

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        var icons = document.querySelectorAll("link[rel='icon']");
        for (var i = 0; i < icons.length; i++) {
            icons[i].href = crashedIcon;
        }
        document.title = '╭(°A°`)╮ 页面崩溃啦~';
        clearTimeout(titleTime);
    } else {
        var icons = document.querySelectorAll("link[rel='icon']");
        for (var i = 0; i < icons.length; i++) {
            icons[i].href = "/images/favicon.png";
        }
        document.title = '(ฅ>ω<*ฅ) 诶嘿，又好了~ ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});