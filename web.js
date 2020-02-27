//////////////////////// Website functionality ///////////////////////////

const body = $("body"),
    homepage = $("#homepage"),
    schoolpage = $("#schoolPage"),
    latestpage = $("#latestPage"),
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
function changeBG(source) {	
    document.body.style.backgroundImage = "url(" + source + ")";	
}

$("#home").click(async function () {
    await loadAnimation(400, homepage);
    changeBG('abstract.jpg');
});
$("h2").click(async function () {
    await loadAnimation(400, latestpage);
    changeBG('triangle.jpg');
});
$("h3").click(async function () {
    await loadAnimation(400, schoolpage);
    changeBG('js.jpg');
});