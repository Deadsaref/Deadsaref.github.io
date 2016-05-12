$(document).ready(function() {
    $('.sliderBox > .controls > .point').bind('click', function() {
        if ($(this).attr('class') == 'point active') {
            return false;
        }
        $('.sliderBox > .controls > .point').removeClass('active');
        $(this).addClass('active');
        $('.sliderBox > .images').css('left', '-' + $('.point').index(this) * 620 + 'px');
    });

    $('.sliderBox > .controls > .slide').bind('click', function() {
        var imageID = $('[class="point active"]').index('.sliderBox > .controls > [class*="point"]');
        var imagesCount = $('.sliderBox > .controls > .point').length - 1;

        if ($(this).attr('id') == 'right') {
            if (imageID == imagesCount) {
                $($('.sliderBox > .controls > .point'))[0].click();
            } else {
                imageID++;
                $($('.sliderBox > .controls > .point'))[imageID].click();
            }
        } else if ($(this).attr('id') == 'left') {
            if (imageID == 0) {
                $($('.sliderBox > .controls > .point'))[imagesCount].click();
            } else {
                imageID--;
                $($('.sliderBox > .controls > .point'))[imageID].click();
            }
        }

    });
});