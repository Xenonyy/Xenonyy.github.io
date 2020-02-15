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
    body.css("background-image", "url('js.jpg')");
});