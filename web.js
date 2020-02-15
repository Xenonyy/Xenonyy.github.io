//////////////////////// Website functionality ///////////////////////////

const body = $("body"),
    homepage = $("#homepage"),
    schoolpage = $("#schoolPage"),
    cs50page = $("#cs50page"),
    pages = $(".page");

// Set up homepage
pages.hide();
homepage.slideDown(800);

// Navigation in between menus
async function loadAnimation(ms, page) {
    pages.slideUp(ms);
    return new Promise(resolve => setTimeout(resolve, ms))
        .then(() => page.slideDown(600));
}

$("#home").click(async function () {
    await loadAnimation(400, homepage);
    body.css("background-image", "url('abstract.jpg')");
});
$("h2").click(async function () {
    await loadAnimation(400, cs50page);
});
$("h3").click(async function () {
    await loadAnimation(400, schoolpage);
    body.css("background-image", img);
});

var img = new Image();
img.src = 'triangle.jpg';
img.load = function() {
 var canvas = document.createElement('canvas');
 document.body.appendChild(canvas);
 var context = canvas.getContext('2d');
 context.drawImage(img, 0, 0);
 var data = context.getImageData(x, y, img.width, img.height).data;
 localStorage.setItem('image', data); // save image data
};
window.onload = function() {
    var picture = localStorage.getItem('image');
    var image = document.createElement('img');
    image.src = picture;
    document.body.appendChild(image);
};