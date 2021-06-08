const homepage = $("#homePage"),
    d = document;

window.onload = () => {
    homepage.fadeIn(2000);
    homepage.css({"opacity": "1"});
    document.getElementById("particles-js").classList.remove("hide");
    // homepage.scrollTop();
    // location.assign("#homePage");
}

// Animations for page titles and panels.
const TitleAnimations = (e1, e2) => {       
    $(`${e1}`).css({'animation': `${e2} 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)`});
}
if (d.readyState === 'interactive') {
    $(d).scroll(function() {
        if ($(this).scrollTop() > 100) {
            TitleAnimations('#aboutTitle, #contactTitle', 'fadeInLeftTitle');
        }
        if ($(this).scrollTop() > 1000) {
            TitleAnimations('#projectsTitle', 'fadeInDown');
            TitleAnimations('#projectsPanel', 'fadeInDownPanel');
        }
    });
}

// Slideshow of images of skills on 'About Me' page
let skillsImageArray = ["./images/webp/react.webp", "./images/webp/node.webp", "./images/webp/html-js-css.webp", "./images/webp/sass.webp", "./images/webp/jest.webp", "./images/webp/jquery.webp", "./images/webp/gsap.webp", "./images/webp/git.webp"];
let skillsImageArrayName = ["React (JavaScript UI Library)", "Node.js (Back-end JS Environment)", "HTML-JS-CSS (Core) ", "Sass (CSS Extension)", "Jest (JavaScript testing framework)", "jQuery (JavaScript Library)", "Gsap (JavaScript Animation Library)", "Git (Version Control System)"]
const timer = ms => new Promise(res => setTimeout(res, ms)) // Returns a Promise that resolves after "ms" Milliseconds
let i = 0;

const SlideShow = async() => {
    for (let i = 0; i < skillsImageArray.length; i++) {
        $("#slideCounter").text(`${i+1}/${skillsImageArray.length}`);
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

// Technologies used on 'Projects' page hover animation
let techArr = ["react", "sass", "jest", "gsap", "git"];
for (const tech of Object.entries(techArr)) {
    $(`.${tech[1]}`).hover(() => {
        $(tech[1]).removeClass("hide");
        $(`.${tech[1]}`).addClass("hide-almost");
    }, () => {
        $(tech[1]).addClass("hide");
        $(`.${tech[1]}`).removeClass("hide-almost");

    });
}
// Hover animation for the second project (so the same technologies don't get highlighted everywhere by hovering one of them)
let techArr2 = ["socketio2", "express2", "react2", "sass2", "git2"];
for (const tech of Object.entries(techArr2)) {
    $(`.${tech[1]}`).hover(() => {
        $(tech[1]).removeClass("hide");
        $(`.${tech[1]}`).addClass("hide-almost");
    }, () => {
        $(tech[1]).addClass("hide");
        $(`.${tech[1]}`).removeClass("hide-almost");

    });
}
// Hover animation for the third project (so the same technologies don't get highlighted everywhere by hovering one of them)
let techArr3 = ["react3", "css3", "git3"];
for (const tech of Object.entries(techArr3)) {
    $(`.${tech[1]}`).hover(() => {
        $(tech[1]).removeClass("hide");
        $(`.${tech[1]}`).addClass("hide-almost");
    }, () => {
        $(tech[1]).addClass("hide");
        $(`.${tech[1]}`).removeClass("hide-almost");

    });
}
// Switch to a gif when hovering a project's image to showcase the project. Easily scalabe and maintainable now!
let projects = [1,2,3];
for (let project of projects) {
    $(`#projectsImgContainer-${project}`).hover(() => {
        $(`#projectsImg-${project}`).toggleClass("hide");
        $(`#projectsImgHover-${project}`).toggleClass("hide");
    }, () => {
        $(`#projectsImg-${project}`).toggleClass("hide");
        $(`#projectsImgHover-${project}`).toggleClass("hide");
    });
    // Wait for fade out animation to end, then reset the video.
    $(`#projectsImgContainer-${project}`).mouseout(async() => {
        await timer(400);
        $("video")[project-1].currentTime = 0; // Needs -1 to work.
    });
}

// Hamburger Menu SVG
$('#menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('#header-menu').toggleClass('hidden');
    $('#header-menu').toggleClass('animation');
});
// Automatically close menu after navigating
$('#phone-nav a').click(function () {
    $('#menu-toggle').removeClass('open');
    $('#header-menu').toggleClass('hidden');
    $('#header-menu').toggleClass('animation');

});

// Phone-specific header interaction
let isMobile = false; // Initiate as false
// Device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
if (isMobile === true) {
    $(d).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.header').addClass('hide');
        } else {
            $('.header').removeClass('hide');
        }
    })
}
