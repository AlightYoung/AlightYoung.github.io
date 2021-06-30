var Browser_Agent = navigator.userAgent;
if (Browser_Agent.indexOf(" MSIE ") != - 1) {
    var lang = navigator.browserLanguage;
    if (lang == "zh-cn") {
        location.href = "https://alightyoung.gitee.io";
    }
}
else {
    var lang = navigator.language;
    if (lang == "zh-CN") {
        location.href = "https://alightyoung.gitee.io";
    }
}