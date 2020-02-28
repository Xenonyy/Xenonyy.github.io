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


// TODO: DOESNT CREATE THE ELEMENT FOR SOME REASON. NOT EVEN IN HTML..........


// for (let i = 0; i < 5; i++) {
//     const spinner = document.createElement("div", { class: "spinner"});
//     const spinnerContainer = document.createElement("div", { class: "spinnerContainer"});
//     const hex0 = document.createElement("div", { class: "hex0"});
//     const hex120 = document.createElement("div", { class: "hex120"});
//     const hex240 = document.createElement("div", { class: "hex240"});
// }
// $(".loaderContainer").append($(".spinner"));
// $(".spinnerContainer").appendTo($(".spinner"));