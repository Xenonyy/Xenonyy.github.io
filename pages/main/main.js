const homepage = $("#homePage"),
    d = document;

window.onload = () => {
    homepage.fadeIn(2000);
    homepage.css({"opacity": "1"});
    // homepage.scrollTop();
    // location.assign("#homePage");
}

// Animations
function aboutAni() {       
    $('#aboutTitle, #contactTitle').css({
        'animation': 'fadeInLeftTitle 2s cubic-bezier(0.22, 0.61, 0.36, 1)'
    });
}
if (d.readyState === 'interactive') {
    $(d).scroll(function() {
        if ($(this).scrollTop() > 100) {
            aboutAni();
        }
        if ($(this).scrollTop() > 1000) {
            $('#projectsTitle').css({
                'animation': 'fadeInLeftTitle 2s cubic-bezier(0.22, 0.61, 0.36, 1)'
            });
        }
    });
}

// Slideshow
let skillsImageArray = ["./images/react.png", "./images/html-js-css.png", "./images/sass.png", "./images/jquery.png", "./images/gsap.png", "./images/git.png"];
let skillsImageArrayName = ["React (JavaScript UI Library)", "HTML-JS-CSS (Core) ", "Sass (CSS Extension)","jQuery (JavaScript Library)", "Gsap (JavaScript Animation Library)", "Git (Version Control System)"]
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