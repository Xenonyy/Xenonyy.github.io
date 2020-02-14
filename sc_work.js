function triangleEq(valA, valB, valC) {

    var valA = parseInt($("#tri1").val());
    $("#tri1").text(valA);

    var valB = parseInt($("#tri2").val());
    $("#tri2").text(valB);

    var valC = parseInt($("#tri3").val());
    $("#tri3").text(valC);
    console.log(valA, valB, valC);

    if (valA < 1 || valB < 1 || valC < 1) {
        window.alert("Invalid input.");
        $("#tri_sol").text("Invalid input.");
        return;
    } else if (valA + valB > valC && valA + valC > valB && valB + valC > valA) {
        window.alert("This is a valid triangle.");
        $("#tri_sol").text("This is a valid triangle.");
    } else {
        window.alert("This isn't a valid triangle.");
        $("#tri_sol").text("This isn't a valid triangle.");
    }
}
// triangleEq();

function AGM(num1, num2) {
    
    var num1 = parseInt($("#agm1").val());
    $("#agm1").text(num1);

    var num2 = parseInt($("#agm2").val());
    $("#agm2").text(num2);

    if (num1 < 1 || num2 < 1) {
        window.alert("Invalid input.");
        $("#agm_sol").text("Invalid input.");
        return;
    } else {
        for (let i = 0; i < 50; i++) {
            let AM = 1/2 * (num1 + num2);
            let GM = Math.sqrt(num1 * num2);
            var num1 = AM;
            var num2 = GM;
            console.log(num1, num2, AM, GM);
            $("#agm_sol").text(GM.toPrecision(21));
        }
    }
}
// AGM();

function quadEq(a,b,c) {

    var a = $("#quad1").val();
    $("#quad1").text(a);

    var b = $("#quad2").val();
    $("#quad2").text(b);

    var c = $("#quad3").val();
    $("#quad3").text(c);

    var xPos = parseFloat((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)).toPrecision(3);
    var xNeg = parseFloat((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)).toPrecision(3);
    console.log(xPos, xNeg);

    if (a == 0 && b == 0 && c == 0) {
        window.alert("Invalid input.");
        $("#quad_yn").text("Invalid input.");
        $("#quad_sol").text("No solution.");
        $("#quad_sol2").text("No solution.");
        return;
    }
    if (Math.pow(b, 2) - (4 * a * c) > 0) {
        window.alert("This equation has two solutions.");
        $("#quad_yn").text("This equation has two solutions.");
        $("#quad_sol").text(xPos);
        $("#quad_sol2").text(xNeg);

    } else if (Math.pow(b, 2) - (4 * a * c) === 0) {
        window.alert("This equation has one solution.");
        $("#quad_yn").text("This equation has one solution.");
        $("#quad_sol").text(xPos);
        $("#quad_sol2").text("No solution.");
    
    } else if (Math.pow(b, 2) - (4 * a * c) < 0) {
        window.alert("This equation has no solutions.");
        $("#quad_yn").text("This equation has no solution.");
        $("#quad_sol").text("No solution.");
        $("#quad_sol2").text("No solution.");
    }
}
// quadEq();

function diff(num1, num2) {

    var num1 = parseInt($("#diff1").val());
    $("#diff1").text(num1);

    var num2 = parseInt($("#diff2").val());
    $("#diff2").text(num2);

    if (num1.toString().length >= 4 || num2.toString().length >= 4) {
        if (Math.abs(num1 - num2) > 8) {
            window.alert("Enter a smaller range or use smaller numbers.");
            return;
        } else {
            var difference = [];
                differenceInc = [];
            for (let i = num1; i < num2 - 1; i++) {
                difference.push(i + 1);
            }
            for (let i = num1; i <= num2; i++) {
                differenceInc.push(i);
            }
        }
    } else if (num2.toString().length < 4 || num2.toString().length > 4) {
        if (Math.abs(num1 - num2) >= 13) {
            window.alert("Enter a smaller range.");
            return;
        } else {
            var difference = [];
                differenceInc = [];
            for (let i = num1; i < num2 - 1; i++) {
                difference.push(i + 1);
            }
            for (let i = num1; i <= num2; i++) {
                differenceInc.push(i);
            }
        }
    }
        $("#diff_sol").text(difference);
        $("#diff_sol2").text(differenceInc);
        console.log(difference);

        if (Math.abs(num1 - num2) < 2) {
            $("#diff_sol").text("No non-exclusive solution.");
        }
}
// diff();

function room(length, width) {
    
    var length = parseInt($("#room1").val());
    $("#room1").text(length);

    var width = parseInt($("#room2").val());
    $("#room2").text(width);

    var tiles = 0;
        sqr_hor = length / 100;
        sqr_ver = width / 100;
        floatSum = 0;
    
    if (length < 15 && width < 5) {
        $("#room_sol").text("Invalid input");
    } else if (length >= width * 3) {
        for (let i = 0; i < length; i+=15) {
            tiles++;
            $("#room_sol").text(tiles);
            floatSum = length / 15;
        }
    } else if (width * 3 >= length) {  
        for (let i = 0; i < width; i+=5) {
            tiles++;
            $("#room_sol").text(tiles);
            floatSum = width / 5;
        }
    }

    var sqrSum = (sqr_hor * sqr_ver).toFixed(2);
        cost = tiles * 1890;
        waste = Math.ceil(Math.abs(floatSum - Math.ceil(floatSum)));

    $("#room_sol2").text(cost + " HUF");
    $("#room_sol3").text(waste);
    console.log(tiles, cost + " ft", sqr_hor, sqr_ver, sqrSum, floatSum, waste);
    
}
// room();