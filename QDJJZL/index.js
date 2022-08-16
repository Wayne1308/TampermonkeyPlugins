// ==UserScript==
// @name         QDJJZL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  qdjjzl无需hy直接查看信息
// @author       You
// @match       https://interview2.poetries.top/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    const $ = window.jQuery
    $(function(){
        console.log('加载脚本');
        setTimeout(function() {
            $('title').text('Wayne Test')
            $('.site-name, .logo').css('display', 'none')
            const list = $('.content__default').children();
            if(list && $(list[49]).css('display') === 'none') {
                list.css('display','block')
                list.css('opacity', 1)
            }
            $('.content-lock.btn-wrap').css('display', 'none')
        }, 1000)
        $(document).on('click', function(e) {
            $('title').text('Wayne Test')
            setTimeout(function() {
                const list = $('.content__default').children()
                if(list && $(list[49]).css('display') === 'none') {
                    list.css('display','block')
                    list.css('opacity', 1)
                }
                $('.content-lock.btn-wrap').css('display', 'none');
                $('.site-name, .logo').css('display', 'none')
            }, 1000)
        })
    })
    // Your code here...
})();
