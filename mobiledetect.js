// checks useragent
function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobi|android|iphone|ipad|windows phone/i.test(userAgent);
}
// adds a class that disables hover effects (this script was made solely for this purpose)
if (isMobile()) {
    document.body.classList.add('mobile');
}
