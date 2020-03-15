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

// Loader
function loadingDivs() {
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 5; i++) {
            var spinner = $('<div/>', { id: "spinner"+i, class: 'spinner'});
            var spinnerContainer = $('<div/>', { class: 'spinnerContainer'});
            spinnerContainer.append($("#spinner"+i)); // Nesting each spinner into another spinner.
            var hex0 = $('<div/>', { class: 'hex0'});
            var hex120 = $('<div/>', { class: 'hex120'});
            var hex240 = $('<div/>', { class: 'hex240'});
        }
        $(".loaderContainer").prepend(spinner);
        $(".spinner").prepend(spinnerContainer);
    }
    $(".spinnerContainer").prepend(hex0, hex120, hex240);
}