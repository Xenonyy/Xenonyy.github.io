//////////////////////// Website functionality ///////////////////////////
const body = $("body"),
    homepage = $("#homepage"),
    schoolpage = $("#schoolPage"),
    projectPage = $("#projectPage"),
    loadPage = $("#loadingPage"),
    pages = $(".page");

// Setting up homepage and the loading screen	
$(window).on("load", async function () {	
    await loadAnimation(500, homepage);	
});	
document.onreadystatechange = () => {	
    do { 	
        loadPage.fadeIn("fast");	
    } while (document.readyState === "loading" || document.readyState === "interactive");	

    if (document.readyState === "complete") {	
        setTimeout(() => { loadPage.fadeOut("slow"); }, 500);	
    } else {	
        loadPage.fadeIn("fast");
    }
}
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
    await loadAnimation(400, projectPage);
    changeBG('triangle.jpg');
});
$("h3").click(async function () {
    await loadAnimation(400, schoolpage);
    changeBG('js.jpg');
});