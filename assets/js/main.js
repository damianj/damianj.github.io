jQuery(document).ready(function($) {
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
        "http://damianjimenez.tumblr.com/rss", {
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
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({
        username: "damianj",
        selector: "#ghfeed"
    });
    /* Contact form */
    $("#send").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#msg").val();
        if (name == "" || email == "" || message == "") {
            alert("Please Fill All Fields");
        } else {
            if (validateEmail(email)) {
                var data = {name: name, email: email, message: message}
                var posting = $.post("php/contact.php", data);
                posting.done(function(d) {
                    alert(d)
                });
                $('#contactform').delay(50).fadeOut(500)
                $('html, body').css({
                    'overflow': 'auto',
                    'height': 'auto'
                });
            } else {
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
    $("#popup-contact").click(function() {
        $('#contactform').delay(50).fadeIn(500)
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });
    $("#contact #cancel, #contactform").click(function(e) {
        if(!$( event.target).is('form, input, label, div, span, textarea, text') || $( event.target).is('#cancel')) {
            $('#contactform').delay(50).fadeOut(500)
            $('html, body').css({
                'overflow': 'auto',
                'height': 'auto'
            });
        };
    });
});


function mailto_email() {
    window.location.href = "znvygb:wvzrarm.qza@tznvy.pbz".replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};