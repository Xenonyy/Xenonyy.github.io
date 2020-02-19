//////////////////////// Website functionality ///////////////////////////
const body = $("body"),
    homepage = $("#homepage"),
    schoolpage = $("#schoolPage"),
    cs50page = $("#cs50page"),
    pages = $(".page"),
    loadPage = $("#loadingPage");

// Transition animation delays
async function loadAnimation(ms, page) {
    pages.slideUp(ms);
    return new Promise(resolve => setTimeout(resolve, ms))
        .then(() => page.slideDown(600));
}

// Setting up homepage
$(window).on("load", async function () {
    await loadAnimation(500, homepage);
    loadPage.fadeOut("slow");
});

// Navigation in between menus
function changeBG(source) {
    document.body.style.backgroundImage = "url(" + source + ")";
}

$("#home").click(async function () {
    await loadAnimation(400, homepage);
    changeBG('abstract.jpg');
});
$("h2").click(async function () {
    await loadAnimation(400, cs50page);
    changeBG('triangle.jpg');
});
$("h3").click(async function () {
    await loadAnimation(400, schoolpage);
    changeBG('js.jpg');
});