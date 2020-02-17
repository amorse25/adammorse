
/* Auto scroll capabilites to selected section from nav links */
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});


/* Allow button for auto scrolling back to top of page */
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 40) {
            $("#top-button").fadeIn();
        } else {
            $("#top-button").fadeOut();
        }
    });

    $("#top-button").click(function() {
        $("html, body").animate({scrollTop: 0}, 800);
    })
})


const darkButton = document.querySelector('#dark-button');
const lightButton = document.querySelector('#light-button');
const colorButton = document.querySelector('#color-button');

darkButton.addEventListener('click', function(e) {
    document.documentElement.style.setProperty('--aboutColor', 'black');
    document.documentElement.style.setProperty('--projectsColor', 'black');
    document.documentElement.style.setProperty('--contactColor', 'black');
    document.documentElement.style.setProperty('--fontColor', 'whitesmoke');
    document.documentElement.style.setProperty('--cardBackgroundColor', 'rgb(66, 66, 66)');
    document.documentElement.style.setProperty('--cardFontColor', 'whitesmoke');
    document.documentElement.style.setProperty('--borderWidth', '1px');
    document.documentElement.style.setProperty('--accentColor', 'black');
    document.documentElement.style.setProperty('--whiteColor', 'white');
    document.documentElement.style.setProperty('--imgBackgroundColor', 'white');
    document.documentElement.style.setProperty('--imgBorderWidth', '2px');
    document.documentElement.style.setProperty('--backgroundOverlay', 'rgba(0, 0, 0, 0.575)');
    document.documentElement.style.setProperty('--borderColor', 'white');
})

lightButton.addEventListener('click', function(e) {
    document.documentElement.style.setProperty('--aboutColor', 'white');
    document.documentElement.style.setProperty('--projectsColor', 'white');
    document.documentElement.style.setProperty('--contactColor', 'white');
    document.documentElement.style.setProperty('--fontColor', 'rgb(30, 30, 30)');
    document.documentElement.style.setProperty('--cardBackgroundColor', 'whitesmoke');
    document.documentElement.style.setProperty('--cardFontColor', 'rgb(30, 30, 30)');
    document.documentElement.style.setProperty('--borderWidth', '1px');
    document.documentElement.style.setProperty('--accentColor', 'white');
    document.documentElement.style.setProperty('--whiteColor', 'rgb(30, 30, 30)');
    document.documentElement.style.setProperty('--imgBackgroundColor', 'none');
    document.documentElement.style.setProperty('--imgBorderWidth', '0px');
    document.documentElement.style.setProperty('--backgroundOverlay', 'rgba(0, 0, 0, 0.275)');
    document.documentElement.style.setProperty('--borderColor', 'white');
})

colorButton.addEventListener('click', function(e) {
    document.documentElement.style.setProperty('--aboutColor', 'rgb(182, 206, 216)');
    document.documentElement.style.setProperty('--projectsColor', 'rgb(219, 123, 123)');
    document.documentElement.style.setProperty('--contactColor', 'rgb(188, 199, 248)');
    document.documentElement.style.setProperty('--fontColor', 'rgb(30, 30, 30)');
    document.documentElement.style.setProperty('--cardBackgroundColor', 'rgb(248, 247, 247)');
    document.documentElement.style.setProperty('--cardFontColor', 'rgb(30, 30, 30)');
    document.documentElement.style.setProperty('--borderWidth', '1px');
    document.documentElement.style.setProperty('--accentColor', '#2e81ce');
    document.documentElement.style.setProperty('--whiteColor', 'white');
    document.documentElement.style.setProperty('--imgBackgroundColor', 'white');
    document.documentElement.style.setProperty('--imgBorderWidth', '2px');
    document.documentElement.style.setProperty('--whiteSmokeColor', 'whitesmoke');
    document.documentElement.style.setProperty('--backgroundOverlay', 'rgba(0, 0, 0, 0.475)');
    document.documentElement.style.setProperty('--borderColor', 'white');
})




