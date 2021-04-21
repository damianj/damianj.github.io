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
    document.getElementById('contact').action = 'https://formspree.io/' + email;
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');

    $('.level-bar-inner').each(function() {
        let itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 800);
    });
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* Github Activity Feed */
    GitHubActivity.feed({
        username: "damianj",
        selector: "#ghfeed"
    });
    
    /* Contact form */
    $("#send").click(function(e) {
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#msg").val();
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
                let filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
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

let enableHeaderText = new toogleBool();
let targetwidth = new Tracker();
targetwidth.next(isIEorNot());

$(window).resize(function() {
    if ($(document).width() > targetwidth.next(null) && $(document).scrollTop() == 0  &&!enableHeaderText.next(null)) {
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '-20px',
        }, 0);
        enableHeaderText.next(true);
    };
    if ($(document).width() > targetwidth.next(null) && $(document).scrollTop() > 0 && !enableHeaderText.next(null)) {
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '0px',
        }, 0);
        enableHeaderText.next(true);
    }
});

let trackPageTop = new Tracker();
$(window).scroll(function() {
    let sections_wrapper = $('div.container.sections-wrapper');

    if ($(document).scrollTop() > 0 && trackPageTop.next(null) == 0) {
        $('header').addClass('shrink');
        $('img.profile-image').addClass('shrink');
        $('img.profile-image').stop(true, true).animate({
            borderRadius: '100%',
        }, 60);
        $('div.profile-content').stop(true, true).animate({
            marginLeft: '-370px',
        }, 60);
        $('a.popup-contact').stop(true, true).animate({
            marginTop: '-20px',
        }, 60);
        $('h1.name, h2.desc').stop(true, true).animate({
            marginTop: '-=57px',
            opacity: '0',
        }, 130);
        sections_wrapper.css( "padding-top", "175px" );
    }
    else if ($(document).scrollTop() == 0 && trackPageTop.next(null) > 0) {
        $('header').removeClass('shrink');
        $('img.profile-image').removeClass('shrink');
        $('img.profile-image').stop(true, true).animate({
            borderRadius: '2.5%',
        }, 60);
        $('div.profile-content').stop(true, true).animate({
            marginLeft: '0px',
        }, 60);
        if($(document).width() > targetwidth.next(null)) {
            $('a.popup-contact').stop(true, true).animate({
                marginTop: '0px',
            }, 100);
        }
        $('h1.name, h2.desc').stop(true, true).animate({
            marginTop: '+=57px',
            opacity: '100',
        }, 300);
        sections_wrapper.css( "padding-top", "260px" );
    }
    trackPageTop.next($(document).scrollTop());
});

