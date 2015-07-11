function mailto_email() {
    window.location.href = "znvygb:wvzrarm.qza@tznvy.pbz".replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};

function Tracker() {
    this.value = 0;
};

Tracker.prototype.next = function(e) {
    if(e != null) {
        this.value = e;
        return;
    }
    return this.value;
};

function toogleBool() {
    this.value = true;
};

toogleBool.prototype.next = function(e) {
    if (e != null) {
        this.value = e;
        return;
    }
    return this.value;
};

var enableNav = new toogleBool();
jQuery(document).ready(function($) {
    var $noscroll = $(window);
    $noscroll.disablescroll();
    $noscroll.disablescroll('undo');
    email = "wvzrarm.qza@tznvy.pbz".replace(/[a-zA-Z]/g, function(c) {return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);});
    document.getElementById('contact').action = 'http://formspree.io/' + email;
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });

    });
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
        //Change this to your own rss feeds
        "http://www.jimenezdmn.tumblr.com/rss", {
            // how many entries do you want?
            // default: 4
            // valid values: any integer
            limit: 3,
            // the effect, which is used to let the entries appear
            // default: 'show'
            // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
            effect: 'slideFastSynced',
            // outer template for the html transformation
            // default: "<ul>{entries}</ul>"
            // valid values: any string
            layoutTemplate: "<div class='item'>{entries}</div>",
            // inner template for each entry
            // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
            // valid values: any string
            entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        }
    );
    /* Github Activity Feed */
    GitHubActivity.feed({
        username: "damianj",
        selector: "#ghfeed"
    });
    /* Contact form */
    $("#send").click(function(e) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#msg").val();
        if (name == "" || email == "" || message == "") {
            e.preventDefault();
            alert("Please Fill All Fields");
        } else {
            if (validateEmail(email)) {
                $('.contactform').delay(50).fadeOut(500);
                enableNav.next(true);
                $noscroll.disablescroll("undo");
                $(".gha-feed").getNiceScroll().resize();
            } else {
                e.preventDefault();
                alert('Invalid Email Address');
            }
            function validateEmail(email) {
                var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                if (filter.test(email)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    });
    $(".popup-contact").click(function() {
        $('.contactform').find('form')[0].reset();
        enableNav.next(false);
        $noscroll.disablescroll('disable');
        $('.contactform').delay(50).fadeIn(500);
        $(".gha-feed").getNiceScroll().resize();
    });
    $("#contact #cancel, .contactform").click(function(e) {
        if(!$(e.target).is('form, input, label, div, span, textarea, text') || $(e.target).is('#cancel')) {
            $('.contactform').delay(50).fadeOut(500);
            enableNav.next(true);
            $noscroll.disablescroll("undo");
            $(".gha-feed").getNiceScroll().resize();
        };
    });
    $(".gha-feed").niceScroll({
        cursorcolor:"#6d95a0",
        cursoropacitymin: 0.5,
        cursoropacitymax: 1,
        cursorwidth: "8px",
        cursorborderradius: "0px",
        railoffset: {left: 13},
        scrollspeed: 90,
        mousescrollstep: 70,
    });
});

$( window ).resize(function() {
    $(".gha-feed").getNiceScroll().resize();
});

var trackPageTop = new Tracker(); /* Use tracker to optimize scroll() event to execute only when truly necessary */
$(window).scroll(function() {
    if ($(document).scrollTop() > 0 && trackPageTop.next(null) == 0 && enableNav.next(null)) {
        $('header').addClass('shrink');
        $('img.profile-image').addClass('shrink');
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '5px',
        }, 60);
        $('h1.name, h2.desc').stop(true, true).animate({
            marginTop: '-=57px',
            opacity: '0',
        }, 130);
        $('body').css( "padding-top", "175px" );
    }
    else if ($(document).scrollTop() == 0 && trackPageTop.next(null) > 0 && enableNav.next(null)) {
        $('header').removeClass('shrink');
        $('img.profile-image').removeClass('shrink');
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '75px',
        }, 100);
        $('h1.name, h2.desc').stop(true, true).animate({
            marginTop: '+=57px',
            opacity: '100',
        }, 300);
        $('body').css( "padding-top", "230px" );
    }
    trackPageTop.next($(document).scrollTop());
});
