Template.index.onRendered(function() {
    let settings = 'settings.json';
    this.autorun(() => {
        if (particlesJS) {
            console.log(`loading particles.js config from "${settings}"...`)
            /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
            particlesJS.load('particles', settings, function () {
                console.log('callback - particles.js config loaded');
            });
        }
    });

    $('.video-container .play-button').click(function() {
            var natWidth = $('.video-container img')[0].naturalWidth;
            var natHeight = $('.video-container img')[0].naturalHeight;
            var scaledWidth = $('.video-container img').width();
            var scaledHeight = $('.video-container img').height();
            var ratio = natWidth/natHeight;

            var containerWidth = scaledHeight * ratio;
            var containerHeight = scaledHeight;

            $('.video-container').css('background-image', 'none');
            $('.video-container .play-button').remove();
            
            $('.video-container').append('<div class="video" style="position:absolute;width:' + containerWidth + 'px;height:' + containerHeight + 'px;margin:auto;top:0;left:0;right:0;bottom:0;"></div>');

            $('.video').append('<iframe width="' + containerWidth + '" height="' + containerHeight + '" src="https://player.vimeo.com/video/83075012?color=ffffff&title=0&byline=0&portrait=0&autoplay=1&autohide=1&iv_load_policy=3&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
        });

        $(window).resize(function() {
            if ($('.video').length) {
                var natWidth = $('.video-container img')[0].naturalWidth;
                var natHeight = $('.video-container img')[0].naturalHeight;
                var scaledWidth = $('.video-container img').width();
                var scaledHeight = $('.video-container img').height();
                var ratio = natWidth/natHeight;

                var containerWidth = scaledHeight * ratio;
                var containerHeight = scaledHeight;
            
                $('.video').css({
                    'width': containerWidth,
                    'height': containerHeight
                });
                $('.video iframe').css({
                    'width': containerWidth,
                    'height': containerHeight
                });
            }
        });
});

Template.index.events({
    'click #login-button': function() {
        $('#login-popup').toggle();
    },
    'click #send-mail': function(e) {
        e.preventDefault();
        var name = $('#contact-name').val();
        var email = $('#contact-email').val();
        var message = $('#contact-message').val();

        Meteor.call('sendMail', name, email, message);
    }
});
