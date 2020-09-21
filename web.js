//////////////////////// Website functionality ///////////////////////////
const body = $("body"),
    homepage = $("#homePage"),
    schoolpage = $("#schoolPage"),
    aboutpage = $("#aboutPage"),
    loadpage = $("#loadingPage"),
    contactpage = $("contactPage");
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
loadpage.hide();
body.removeClass("stop-scrolling");
homepage.fadeIn(2000);

// Loading page
// document.onreadystatechange = () => {	
//     do { 	
//         loadpage.fadeIn("fast");
//     } while (document.readyState === "loading" || document.readyState === "interactive");	

//     if (document.readyState === "complete") {	
//         setTimeout(() => { loadpage.fadeOut("slow"); }, 400);
//     } else {	
//         loadpage.fadeIn("fast");
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

// $("#home").click(async function () {
    // await loadAnimation(400, homepage);
    // changeBG('abstract.jpg');
    // window.scrollTo(0,0);
// });
// $("h2").click(async function () {
    // await loadAnimation(400, aboutpage);
    // changeBG('triangle.jpg');
    // $("#footer").hide();
    // $("#content-wrap").css("padding-bottom", "0");
    // window.scrollTo(0,800);
// });
// $("h3").click(async function () {
    // await loadAnimation(400, schoolpage);
    // changeBG('js.jpg');
    // $("#schoolPanel").css("visibility", "visible");
    // body.css("overflow-y", "auto");
    // body.css("background-size", "cover");
    // $("#footer").hide();
    // $("#content-wrap").css("padding-bottom", "0");
//     window.scrollTo(0,1520);
// });


// Turning the website into a scrollable format
// $("#sourceCodePage").hide();
// $("#schoolPanel").hide();
// schoolpage.hide();
$("#aboutPanel").hide();

$(document).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#aboutPanel').fadeIn(800);
    }
});
$("#home").on("click", function () {
    document.getElementById("homePage").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});
$("#aboutMe").on("click", function () {
    document.getElementById("aboutPage").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});
$("#contact").on("click", function () {
    document.getElementById("contactPage").scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
});