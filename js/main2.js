(function($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



    /*==================================================================
     [ Simple slide100 ]*/

    $('.simpleslide100').each(function() {
        var delay = 7000;
        var speed = 1000;
        var itemSlide = $(this).find('.simpleslide100-item');
        var nowSlide = 0;

        $(itemSlide).hide();
        $(itemSlide[nowSlide]).show();
        nowSlide++;
        if (nowSlide >= itemSlide.length) {
            nowSlide = 0;
        }

        setInterval(function() {
            $(itemSlide).fadeOut(speed);
            $(itemSlide[nowSlide]).fadeIn(speed);
            nowSlide++;
            if (nowSlide >= itemSlide.length) {
                nowSlide = 0;
            }
        }, delay);
    });


})(jQuery);
var timeLeft = 60;
var countdownTimer = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    // Play voice effect here
    var audio = new Audio('voice_effect.mp3');
    audio.play();

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        // Redirect to your channel here
        window.location.href = "https://t.me/+XEpvzA8-RvI1MmNl";
    }
}, 1000);
var circleElements = document.querySelectorAll('.bor1');
var colorIndex = 0;
var colors = ['red', 'black']; // Add more colors if needed

function animateCircles() {
    circleElements.forEach(function(circle) {
        circle.style.backgroundColor = colors[colorIndex];
    });

    colorIndex = (colorIndex + 1) % colors.length;
    setTimeout(animateCircles, 1000); // Adjust timing if needed
}

animateCircles();

function redirectToLink() {
    window.location.href = "https://t.me/+XEpvzA8-RvI1MmNl";
}