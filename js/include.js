function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* Main js========================================================*/
include('js/jquery-3.4.1.min.js');
include('js/jquery-ui.min.js');
include('js/script.js');
//include(domain + '/js/jquery.mCustomScrollbar.js');
//include('js/swiper.min.js');
/* Boostap ========================================================*/
//include('boostrap/bootstrap.min.js');

