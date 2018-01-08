/* Write code on document load */
$(document).ready(function() {
    var videoWrapper = $('.l-video');
    setTimeout(function(){ 
        videoWrapper.removeAttr('data-loader');
    }, 2000);

    var htmlVideo = '<div class="l-video-popup">' +
                        '<div class="popup-container">' +
                                '<div class="close-icon"></div>' +
                                '<iframe src="https://www.youtube.com/embed/C0DPdy98e4c">' +
                                '</iframe>' +
                        '</div>' +
                     '</div>';

    videoWrapper.append(htmlVideo);
});
