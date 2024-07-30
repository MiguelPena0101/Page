function adjustIframeHeight() {
    const iframe = document.getElementById('resume-frame');
    if (iframe) {
        iframe.style.height = `${window.innerHeight - iframe.getBoundingClientRect().top - 20}px`;
    }
}

window.addEventListener('load', adjustIframeHeight);
window.addEventListener('resize', adjustIframeHeight);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});