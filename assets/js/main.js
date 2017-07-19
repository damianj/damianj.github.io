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


$(document).ready(function() {
    email = "wvzrarm.qza@tznvy.pbz".replace(/[a-zA-Z]/g, function(c) {return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);});
    document.getElementById('contact').action = 'http://formspree.io/' + email;
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');

    $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 800);
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
        $('.form.contact-me')[0].reset();
        $('.contactform').delay(50).fadeIn(500);
    });
    $("#contact #cancel, .contactform").click(function(e) {
        if(!$(e.target).is('form, input, label, div, span, textarea, text') || $(e.target).is('#cancel')) {
            $('.contactform').delay(50).fadeOut(500);
        };
    });
    $('.level-bar-inner').hover(
        function(e) {
            $(e.target).parents('.item').find('.level-label').tooltip('show');
        },
        function(e) {
            $(e.target).parents('.item').find('.level-label').tooltip('hide');
        }
    );
    $('a.mailto').click(function() {
        window.location.href = "znvygb:wvzrarm.qza@tznvy.pbz".replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    });
});

function isIEorNot() {
    if (window.navigator.userAgent.search("MSIE") >= 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
        return 1100;
    };
    return 1083;
};

var enableHeaderText = new toogleBool();
var targetwidth = new Tracker();
targetwidth.next(isIEorNot());

$(window).resize(function() {
    if ($(document).width() > targetwidth.next(null) && $(document).scrollTop() == 0  &&!enableHeaderText.next(null)) {
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '75px',
        }, 0);
        enableHeaderText.next(true);
    };
    if ($(document).width() > targetwidth.next(null) && $(document).scrollTop() > 0 && !enableHeaderText.next(null)) {
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '5px',
        }, 0);
        enableHeaderText.next(true);
    }
});

var trackPageTop = new Tracker();
$(window).scroll(function() {
    if ($(document).scrollTop() > 0 && trackPageTop.next(null) == 0) {
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
    else if ($(document).scrollTop() == 0 && trackPageTop.next(null) > 0) {
        $('header').removeClass('shrink');
        $('img.profile-image').removeClass('shrink');
        if($(document).width() > targetwidth.next(null)) {
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '75px',
        }, 100);
        }
        $('h1.name, h2.desc').stop(true, true).animate({
            marginTop: '+=57px',
            opacity: '100',
        }, 300);
        $('body').css( "padding-top", "230px" );
    }
    trackPageTop.next($(document).scrollTop());
});
