const body = $("body"),
    homepage = $("#homePage"),
    schoolpage = $("#schoolPage"),
    aboutpage = $("#aboutPage"),
    contactpage = $("contactPage"),
    pages = $(".page"),
    d = document;

body.removeClass("stop-scrolling");
function homeAni() {
    homepage.fadeIn(2000);
    homepage.css({"display": "inline-table"});
}
homeAni();
// Setting up homepage and the loading screen	
// $(window).on("load", async function () {	
//     await loadAnimation(500, homepage);
//     window.location.assign("https://xenonyy.github.io/home");
// });

// Remove the scrollbar to wait for the loading animation
// $(window).on('load', function () {
//     setTimeout(() => { $('body').removeClass('stop-scrolling'); }, 750);
// });

// Navigation in between pages
// async function loadAnimation(ms, page) {
//     pages.slideUp(ms);
//     return new Promise(resolve => setTimeout(resolve, ms))
//         .then(() => page.slideDown(600));
// }
// function changeBG(source) {	
//     document.body.style.backgroundImage = "url(" + source + ")";	
// }

// $("#home").click(async function () {
    // await loadAnimation(400, homepage);
    // changeBG('abstract.jpg');
// });
// $("h2").click(async function () {
    // await loadAnimation(400, aboutpage);
    // changeBG('triangle.jpg');
// });
// $("h3").click(async function () {
    // await loadAnimation(400, schoolpage);
    // changeBG('js.jpg');
// });


// Navigation
$("#home").on("click", function () {
    d.getElementById("homePage").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
});
$("#aboutMe").on("click", function () {
    d.getElementById("aboutPage").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    // location.assign("/about")
});
$("#contact").click(function () {
    d.getElementById("contactPage").scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
});
$("#projects").click(function () {
    d.getElementById("projectsPage").scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
});


// Animations
function aboutAni() {       
    $('#aboutTitle, #contactTitle').css({
        'animation': 'fadeInLeftTitle 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)'
    });
}
if (d.readyState === 'interactive') {
    $(d).scroll(function() {
        if ($(this).scrollTop() > 100) {
            aboutAni();
        }
    });
}

// Slideshow
let skillsImageArray = ["./images/react.png", "./images/html-js-css.png", "./images/sass.png", "./images/jquery.png", "./images/gsap.png", "./images/git.png"];
let skillsImageArrayName = ["React (JavaScript UI Library)", "HTML5-ES6-CSS3 (Core) ", "Sass (CSS Extension)","jQuery (JavaScript Library)", "Gsap (JavaScript Animation Library)", "Git (Version Control System)"]
const timer = ms => new Promise(res => setTimeout(res, ms)) // Returns a Promise that resolves after "ms" Milliseconds
let i = 0;

const SlideShow = async() => {
    for (let i = 0; i < skillsImageArray.length; i++) {
        $("#slideCounter").text(`${i+1}/6`);
        $("#slideName").text(skillsImageArrayName[i]);
        d.querySelector("#skillsImg").classList.remove("hide");
        d.querySelector("#skillsImg").src = skillsImageArray[i];
        await timer(2500);
        d.querySelector("#skillsImg").classList.add("hide");
        await timer(500);
        if (i + 1 >= skillsImageArray.length) i = -1; // Reset slideshow
    }
}
SlideShow();

// Project-technologies hover animation
let techArr = ["react", "sass", "gsap", "git"];
for (const tech of Object.entries(techArr)) {
    $(`.${tech[1]}`).hover(() => {
        $(tech[1]).removeClass("hide");
        $(`.${tech[1]}`).addClass("hide-almost");
    }, () => {
        $(tech[1]).addClass("hide");
        $(`.${tech[1]}`).removeClass("hide-almost");

    })
}
// Switch to another image on hover, delay for the animation.
$("#projectsImgContainer-1").hover(() => {
    $("#projectsImg-1").addClass("hide");
    $("#projectsImgHover-1").removeClass("hide");
}, () => {
    $("#projectsImg-1").removeClass("hide");
    $("#projectsImgHover-1").addClass("hide");
})
$("#projectsImgContainer-1").mouseout(async() => {
    await timer(400);
    $("video").get(0).currentTime = 0;
})