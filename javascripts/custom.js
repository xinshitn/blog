// JavaScript Document
var win_width;
(function ($) {

    $(window).load(function () {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(400).fadeOut("slow"); // will fade out the white DIV that covers the website.
    });
    function noMove(e) {
        e.preventDefault();
    }

    $(document).ready(function () {
        win_width = $(window).width();
        if (win_width >= 980) {
            $(".header").css("left", win_width / 2 - 490);
            $(".share-bottom").css("left", win_width / 2 - 490);
            $(".page-bottom").css("left", win_width / 2 - 490);
        }
        try {
            if (typeof(eval(iniFun)) == "function") {
                iniFun($);//初始化执行的方法
            }
        } catch(e) {}
        if (win_width >= 980) {
            $("#mainDiv").css("left", win_width / 2 - 490);
        }
        if (getExplorer() == "ie") {
            $(".menu-top").css("max-height", "429px");
        }
        //Top Menu
        $('.show-navigation').click(function () {
            $('.menu-top').toggleClass('show-menus');
            $('.menu-wrapper-background').fadeIn(250);
            $('.noScroll').bind('touchmove', noMove);
            $('body').css("overflow", 'hidden');
            return false;
        });

        $('.close-menu, .menu-wrapper-background').click(function () {
            $('.menu-top').toggleClass('show-menus');
            $('.menu-wrapper-background').fadeOut(250);
            $('body').css("overflow", 'auto');
            return false;
        });

        $('.has-submenu').click(function () {
            //$(this).parent().find('.submenu').slideToggle(350);
            $(this).parent().find('.submenu').toggleClass('show-submenu');
            $(this).find('.fa-plus').toggleClass('active-plus');
            return false;
        });

        /*/////////*/
        /*Pie Chart*/
        /*/////////*/

        var pieData = [
            {value: 50, color: "#e74c3c", highlight: "#c0392b", label: "Red"},
            {value: 10, color: "#2ecc71", highlight: "#27ae60", label: "Green"},
            {value: 20, color: "#f1c40f", highlight: "#f39c12", label: "Yellow"},
            {value: 20, color: "#2c3e50", highlight: "#34495e", label: "Dark Blue"}
        ];

        var barChartData = {
            labels: ["One", "Two", "Three", "Four", "Five"],
            datasets: [
                {
                    fillColor: "rgba(0,0,0,0.1)",
                    strokeColor: "rgba(0,0,0,0.2)",
                    highlightFill: "rgba(0,0,0,0.25)",
                    highlightStroke: "rgba(0,0,0,0.25)",
                    data: [20, 10, 40, 30, 10]
                }
            ]

        }

        window.onload = function () {
            if (document.getElementById("id") != undefined) {
                var pie_chart_1 = document.getElementById("generate-pie-chart").getContext("2d");
                window.pie_chart_1 = new Chart(pie_chart_1).Pie(pieData);

                var bar_chart_1 = document.getElementById("generate-bar-chart").getContext("2d");
                window.pie_chart_1 = new Chart(bar_chart_1).Bar(barChartData);
            }

        };

        //Share Bottom Socials
        $('.show-share-bottom').click(function () {
            $('.share-bottom').toggleClass('active-share-bottom');
            return false;
        });

        $('.close-share-bottom, .open-menu, .open-more').click(function () {
            $('.share-bottom').removeClass('active-share-bottom');
            return false;
        });

        //页码
        $('.show-page-bottom').click(function () {
            $('.page-bottom').toggleClass('active-page-bottom');
            return false;
        });

        $("#mainDiv").click(function(){
            $('.page-bottom').removeClass('active-page-bottom');
        });

        window.addEventListener('load', function () {
            FastClick.attach(document.body);
        }, false);

        //Countdown timer

        var endDate = "June 7, 2015 15:03:25";

        $('.countdown').countdown({
            date: endDate,
            render: function (data) {
                $(this.el).html(
                    "<div class='countdown-box box-years'><div class='countdown-years'>" + this.leadingZeros(data.years, 2) +
                    "</div><span>years</span></div><div class='countdown-box box-days'><div class='countdown-days'>" + this.leadingZeros(data.days, 2) +
                    "</div><span>days</span></div><div class='countdown-box box-hours'><div class='countdown-hours'>" + this.leadingZeros(data.hours, 2) +
                    "</div><span>hours</span></div><div class='countdown-box box-minutes'><div class='countdown-minutes'>" + this.leadingZeros(data.min, 2) +
                    "</div><span>min</span></div><div class='countdown-box box-seconds'><div class='countdown-seconds'>" + this.leadingZeros(data.sec, 2) +
                    "</div><span>sec</span></div>");
            }
        });


        //Animate.css scroll to begin animation //

        var wow = new WOW(
            {
                boxClass: 'animate',      // animated element css class (default is wow)
                animateClass: 'animated',     // animation css class (default is animated)
                offset: 0,              // distance to the element when triggering the animation (default is 0)
                mobile: true,           // trigger animations on mobile devices (true is default)
            }
        );
        wow.init();

        //Go up

        $('.footer-up').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800, 'easeInOutQuad');
            return false;
        });

        //Portfolio//

        $('.adaptive-one-activate').click(function () {
            $('.portfolio-adaptive').removeClass('adaptive-three');
            $('.portfolio-adaptive').removeClass('adaptive-two');
            $('.portfolio-adaptive').addClass('adaptive-one');
            $(this).addClass('active-adaptive-style');
            $('.adaptive-two-activate, .adaptive-three-activate').removeClass('active-adaptive-style');
            return false;
        });

        $('.adaptive-two-activate').click(function () {
            $('.portfolio-adaptive').removeClass('adaptive-three');
            $('.portfolio-adaptive').addClass('adaptive-two');
            $('.portfolio-adaptive').removeClass('adaptive-one');
            $(this).addClass('active-adaptive-style');
            $('.adaptive-three-activate, .adaptive-one-activate').removeClass('active-adaptive-style');
            return false;
        });

        $('.adaptive-three-activate').click(function () {
            $('.portfolio-adaptive').addClass('adaptive-three');
            $('.portfolio-adaptive').removeClass('adaptive-two');
            $('.portfolio-adaptive').removeClass('adaptive-one');
            $(this).addClass('active-adaptive-style');
            $('.adaptive-two-activate, .adaptive-one-activate').removeClass('active-adaptive-style');
            return false;
        });


        //Close Sharebox//

        $('.open-sharebox').click(function () {
            $('.sharebox-wrapper').fadeIn(200);
        });

        $('.close-sharebox').click(function () {
            $('.sharebox-wrapper').fadeOut(200);
        });

        $('.open-loginbox').click(function () {
            $('.loginbox-wrapper').fadeIn(200);
        });

        $('.close-loginbox').click(function () {
            $('.loginbox-wrapper').fadeOut(200);
        });

        //Checkboxes

        $('.checkbox-one').click(function () {
            $(this).toggleClass('checkbox-one-checked');
            return false;
        });
        $('.checkbox-two').click(function () {
            $(this).toggleClass('checkbox-two-checked');
            return false;
        });
        $('.checkbox-three').click(function () {
            $(this).toggleClass('checkbox-three-checked');
            return false;
        });
        $('.radio-one').click(function () {
            $(this).toggleClass('radio-one-checked');
            return false;
        });
        $('.radio-two').click(function () {
            $(this).toggleClass('radio-two-checked');
            return false;
        });

        //Switches

        $('.switch-1').click(function () {
            $(this).toggleClass('switch-1-on');
            return false;
        });

        $('.switch-2').click(function () {
            $(this).toggleClass('switch-2-on');
            return false;
        });

        $('.switch-3').click(function () {
            $(this).toggleClass('switch-3-on');
            return false;
        });

        $('.switch, .switch-icon').click(function () {
            $(this).parent().find('.switch-box-content').slideToggle(200);
            $(this).parent().find('.switch-box-subtitle').slideToggle(200);
            return false;
        });


        //Notifications

        $('.tap-dismiss-notification').click(function () {
            $(this).slideUp(200);
            return false;
        });

        $('.close-big-notification').click(function () {
            $(this).parent().slideUp(200);
            return false;
        });

        $('.notification-top').addClass('show-notification-top');

        $('.hide-top-notification').click(function () {
            $('.notification-top').removeClass('show-notification-top');
        });

        //Tabs
        $('.tab-but-1').click(function () {
            $('.tab-but').removeClass('tab-active');
            $('.tab-but-1').addClass('tab-active');
            $('.tab-content').slideUp(200);
            $('.tab-content-1').slideDown(200);
            return false;
        });

        $('.tab-but-2').click(function () {
            $('.tab-but').removeClass('tab-active');
            $('.tab-but-2').addClass('tab-active');
            $('.tab-content').slideUp(200);
            $('.tab-content-2').slideDown(200);
            return false;
        });

        $('.tab-but-3').click(function () {
            $('.tab-but').removeClass('tab-active');
            $('.tab-but-3').addClass('tab-active');
            $('.tab-content').slideUp(200);
            $('.tab-content-3').slideDown(200);
            return false;
        });

        $('.tab-but-4').click(function () {
            $('.tab-but').removeClass('tab-active');
            $('.tab-but-4').addClass('tab-active');
            $('.tab-content').slideUp(200);
            $('.tab-content-4').slideDown(200);
            return false;
        });

        $('.tab-but-5').click(function () {
            $('.tab-but').removeClass('tab-active');
            $('.tab-but-5').addClass('tab-active');
            $('.tab-content').slideUp(200);
            $('.tab-content-5').slideDown(200);
            return false;
        });

        //Toggles

        $('.deploy-toggle-1').click(function () {
            $(this).parent().find('.toggle-content').slideToggle(200);
            $(this).toggleClass('toggle-1-active');
            return false;
        });

        $('.deploy-toggle-2').click(function () {
            $(this).parent().find('.toggle-content').slideToggle(200);
            $(this).toggleClass('toggle-2-active');
            return false;
        });

        $('.deploy-toggle-3').click(function () {
            $(this).parent().find('.toggle-content').slideToggle(200);
            $(this).find('em strong').toggleClass('toggle-3-active-ball');
            $(this).find('em').toggleClass('toggle-3-active-background');
            return false;
        });

        //Submenu Nav

        $('.submenu-nav-deploy').click(function () {
            $(this).toggleClass('submenu-nav-deploy-active');
            $(this).parent().find('.submenu-nav-items').slideToggle(200);
            return false;
        });

        //Sliding Door

        $('.sliding-door-top').click(function () {
            $(this).animate({
                left: '101%'
            }, 500, 'easeInOutExpo');
            return false;
        });

        $('.sliding-door-bottom a em').click(function () {
            $(this).parent().parent().parent().find('.sliding-door-top').animate({
                left: '0px'
            }, 500, 'easeOutBounce');
            return false

        });

        /////////////////////////////////////////////////////////////////////////////////////////////
        //Detect user agent for known mobile devices and show hide elements for each specific element
        /////////////////////////////////////////////////////////////////////////////////////////////

        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
        var isiAndroid = navigator.userAgent.toLowerCase().indexOf("android");

        if (isiPhone > -1) {
            $('.ipod-detected').hide();
            $('.ipad-detected').hide();
            $('.iphone-detected').show();
            $('.android-detected').hide();
        }
        if (isiPad > -1) {
            $('.ipod-detected').hide();
            $('.ipad-detected').show();
            $('.iphone-detected').hide();
            $('.android-detected').hide();
        }
        if (isiPod > -1) {
            $('.ipod-detected').show();
            $('.ipad-detected').hide();
            $('.iphone-detected').hide();
            $('.android-detected').hide();
        }
        if (isiAndroid > -1) {
            $('.ipod-detected').hide();
            $('.ipad-detected').hide();
            $('.iphone-detected').hide();
            $('.android-detected').show();
        }


        //Detect if iOS WebApp Engaged and permit navigation without deploying Safari
        (function (a, b, c) {
            if (c in b && b[c]) {
                var d, e = a.location, f = /^(a|html)$/i;
                a.addEventListener("click", function (a) {
                    d = a.target;
                    while (!f.test(d.nodeName))d = d.parentNode;
                    "href"in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
                }, !1)
            }
        })(document, window.navigator, "standalone")

        var owlStaffControls = $(".staff-slider");
        owlStaffControls.owlCarousel({
            //Basic Stuff
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: [480, 1],
            itemsMobile: [370, 1],
            singleItem: false,
            itemsScaleUp: false,
            slideSpeed: 250,
            paginationSpeed: 250,
            rewindSpeed: 250,
            pagination: false,
            autoPlay: false,
            autoHeight: false,
        });

        $(".next-staff").click(function () {
            owlStaffControls.trigger('owl.next');
            return false;
        });
        $(".prev-staff").click(function () {
            owlStaffControls.trigger('owl.prev');
            return false;
        });

        var owlQuoteSlider = $(".quote-slider");
        owlQuoteSlider.owlCarousel({
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: [480, 1],
            itemsMobile: [370, 1],
            singleItem: false,
            itemsScaleUp: false,
            slideSpeed: 800,
            paginationSpeed: 300,
            rewindSpeed: 250,
            pagination: false,
            autoPlay: true,
        });

        $(".next-quote").click(function () {
            owlQuoteSlider.trigger('owl.next');
            return false;
        });
        $(".prev-quote").click(function () {
            owlQuoteSlider.trigger('owl.prev');
            return false;
        });

        /////////////////
        //Image Gallery//
        /////////////////
        $(".swipebox").swipebox({
            useCSS: true, // false will force the use of jQuery for animations
            hideBarsDelay: 3000 // 0 to always show caption and action bar
        });

        $(".wide-gallery-item").swipebox({
            useCSS: true, // false will force the use of jQuery for animations
            hideBarsDelay: 3000 // 0 to always show caption and action bar
        });

        var time = 7; // time in seconds

        var $progressBar,
            $bar,
            $elem,
            isPause,
            tick,
            percentTime;


        //Init the carousel
        $(".homepage-slider").owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: false,
            afterInit: progressBar,
            afterMove: moved,
            startDragging: pauseOnDragging
        });

        //Init progressBar where elem is $("#owl-demo")
        function progressBar(elem) {
            $elem = elem;
            //build progress bar elements
            buildProgressBar();
            //start counting
            start();
        }

        //create div#progressBar and div#bar then prepend to $("#owl-demo")
        function buildProgressBar() {
            $progressBar = $("<div>", {
                id: "progressBar"
            });
            $bar = $("<div>", {
                id: "bar"
            });
            $progressBar.append($bar).prependTo($elem);
        }

        function start() {
            //reset timer
            percentTime = 0;
            isPause = false;
            //run interval every 0.01 second
            tick = setInterval(interval, 10);
        };

        function interval() {
            if (isPause === false) {
                percentTime += 1 / time;
                $bar.css({
                    width: percentTime + "%"
                });
                //if percentTime is equal or greater than 100
                if (percentTime >= 100) {
                    //slide to next item
                    $elem.trigger('owl.next')
                }
            }
        }

        //pause while dragging
        function pauseOnDragging() {
            isPause = true;
        }

        //moved callback
        function moved() {
            //clear interval
            clearTimeout(tick);
            //start again
            start();
        }


        // Custom Navigation Events
        $(".next-home").click(function () {
            $(".homepage-slider").trigger('owl.next');
            return false;
        });
        $(".prev-home").click(function () {
            $(".homepage-slider").trigger('owl.prev');
            return false;
        });


        var screen_width = 0;
        var screen_height = 0;

        function resize_coverpage() {
            screen_width = $(window).width();
            screen_height = $(window).height();

            $('.coverpage-image').css({
                height: screen_height - 60,
                width: screen_width
            });
        };
        resize_coverpage();
        $(window).resize(resize_coverpage);

        $(".coverpage-slider").owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: true,
            afterInit: progressBar,
            afterMove: moved,
            startDragging: pauseOnDragging
        });


        $.scrollIt();

        //Fullscreen Slider Variables
        var screen_width = 0;
        var screen_height = 0;

        function resize_slider() {
            screen_width = $(window).width();
            screen_height = $(window).height();

            $('.slider-image').css({
                height: screen_height - 110,
                width: screen_width
            });
        };
        resize_slider();
        $(window).resize(resize_slider);

        $(".full-slider").owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: true,
            pagination: false,
            afterInit: progressBar,
            afterMove: moved,
            startDragging: pauseOnDragging
        });


    });

}(jQuery));

//浏览器判断
function getExplorer() {
    var explorer = window.navigator.userAgent;
//ie
    if (explorer.indexOf("MSIE") >= 0) {
        return "ie";
    }
//firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        return "Firefox";
    }
//Chrome
    else if (explorer.indexOf("Chrome") >= 0) {
        return "Chrome";
    }
//Opera
    else if (explorer.indexOf("Opera") >= 0) {
        return "Opera";
    }
//Safari
    else if (explorer.indexOf("Safari") >= 0) {
        return "Safari";
    }
}

/*各类分享功能*/
function shareWeibo(title) {
    if (window.navigator.userAgent.indexOf("MSIE") > 0)
        window.event.returnValue = false;
    else
        window.event.preventDefault();
    var p = {
        url: location.href,
        type: 'icon',
        ralateUid: '1068495385',
        language: 'zh_cn',
        appkey: '4045697247',
        title: title + '-清汀驿站',
        searchPic: 'false',
        style: 'simple'
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    window.open("http://service.weibo.com/share/share.php?" + s.join("&"));
}
function shareEmail(title, summary) {
    var p = {
        url: location.href,
        to: 'qqmail',
        desc: '一个很神奇的个人网站', /*默认分享理由(可选)*/
        summary: summary, /*摘要(可选)*/
        title: title + '-清汀驿站', /*分享标题(可选)*/
        site: '', /*分享来源 如：腾讯网(可选)*/
        pics: '' /*分享图片的路径(可选)*/
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    window.open("http://mail.qq.com/cgi-bin/qm_share?" + s.join("&"));
}
function shareQQ(title, summary) {
    var p = {
        url: location.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/
        desc: '一个很神奇的个人网站', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
        title: title + '-清汀驿站', /*分享标题(可选)*/
        summary: summary, /*分享摘要(可选)*/
        pics: '', /*分享图片(可选)*/
        flash: '', /*视频地址(可选)*/
        site: 'QQ分享', /*分享来源(可选) 如：QQ分享*/
        style: '203',
        width: 16,
        height: 16
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    window.open("http://connect.qq.com/widget/shareqq/index.html?" + s.join('&'));
}
function shareRenren(title, description) {
    //var rrShareParam = {
    //    resourceUrl: '',	//分享的资源Url
    //    srcUrl: '',	//分享的资源来源Url,默认为header中的Referer,如果分享失败可以调整此值为resourceUrl试试
    //    pic: '',		//分享的主题图片Url
    //    title: '清汀驿站',		//分享的标题
    //    description: '一个很神奇的个人网站'	//分享的详细描述
    //};
    //rrShareOnclick(rrShareParam);
//            http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2Fnews.163.com%2Fapi%2F15%2F0824%2F10%2FB1PCL9S200014AEE.html%23sns_renren&title=女孩溺亡尸体器官丢失%20警方%3A船只螺旋桨搅动所致_网易新闻中心&images=
    var p = {
        resourceUrl: location.href,
        title: title + '-清汀驿站',
        description: description,
        images: ''
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    window.open("http://widget.renren.com/dialog/share?" + s.join('&'));
}

//百度统计
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?0a77f08c5c4bb1c7e6f57cbb20d851f7";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();