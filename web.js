//////////////////////// Website functionality ///////////////////////////
const body = $("body"),
    homepage = $("#homepage"),
    schoolpage = $("#schoolPage"),
    aboutpage = $("#aboutPage"),
    loadPage = $("#loadingPage"),
    pages = $(".page");

// Setting up homepage and the loading screen	
// $(window).on("load", async function () {	
//     await loadAnimation(500, homepage);
//     window.location.assign("https://xenonyy.github.io/home");
// });
window.scrollTo(0,0); //Pages disappear until u start scrolling if you come back to the site without this.

// Remove the scrollbar to wait for the loading animation
// $(window).on('load', function () {
//     setTimeout(() => { $('body').removeClass('stop-scrolling'); }, 750);
// });
homepage.hide();
loadPage.hide();
body.removeClass("stop-scrolling");
homepage.fadeIn(1500);

// Loading page
// document.onreadystatechange = () => {	
//     do { 	
//         loadPage.fadeIn("fast");
//     } while (document.readyState === "loading" || document.readyState === "interactive");	

//     if (document.readyState === "complete") {	
//         setTimeout(() => { loadPage.fadeOut("slow"); }, 400);
//     } else {	
//         loadPage.fadeIn("fast");
//     }
// }

// Navigation in between pages
async function loadAnimation(ms, page) {
    pages.slideUp(ms);
    return new Promise(resolve => setTimeout(resolve, ms))
        .then(() => page.slideDown(600));
}
function changeBG(source) {	
    document.body.style.backgroundImage = "url(" + source + ")";	
}

$("#home").click(async function () {
    // await loadAnimation(400, homepage);
    // changeBG('abstract.jpg');
    window.scrollTo(0,0);
});
$("h2").click(async function () {
    // await loadAnimation(400, aboutpage);
    // changeBG('triangle.jpg');
    // $("#footer").hide();
    // $("#content-wrap").css("padding-bottom", "0");
    window.scrollTo(0,800);
});
$("h3").click(async function () {
    // await loadAnimation(400, schoolpage);
    // changeBG('js.jpg');
    // $("#schoolPanel").css("visibility", "visible");
    // body.css("overflow-y", "auto");
    // body.css("background-size", "cover");
    // $("#footer").hide();
    // $("#content-wrap").css("padding-bottom", "0");
    window.scrollTo(0,1520);
});
$("h5").click(function () {
    window.scrollTo(0,2200);
});

// Turning the website into a scrollable format
$("#sourceCodePage").hide();
$("#schoolPanel").hide();
schoolpage.hide();
$("#aboutPanel").hide();
// $("#contactPanel").hide();

$(document).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#aboutPanel').fadeIn(800);
    }
    // if ($(this).scrollTop() > 1000) {
    //     $('#schoolPanel').fadeIn(800);
    // }
    // if ($(this).scrollTop() > 600) {
    //     $('#contactPanel').fadeIn(800);
    // }
});