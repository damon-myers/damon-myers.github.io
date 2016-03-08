function collapseNavbar() {
    if ($('.main-nav').offset().top > 50) {
        $('.main-nav').addClass("main-nav-scrolled");
    } else {
        $('.main-nav').removeClass("main-nav-scrolled");
    }
}

$(document).ready(collapseNavbar);
$(window).scroll(collapseNavbar);