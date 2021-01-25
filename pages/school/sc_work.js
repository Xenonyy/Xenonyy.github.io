function triangleEq(valA, valB, valC) {

    var valA = parseInt($("#tri1").val());
        valB = parseInt($("#tri2").val());
        valC = parseInt($("#tri3").val());

    $("#tri1").text(valA);
    $("#tri2").text(valB);
    $("#tri3").text(valC);

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

function AGM(num1, num2) {
    
    var num1 = parseInt($("#agm1").val());
        num2 = parseInt($("#agm2").val());

    $("#agm1").text(num1);
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

function quadEq(a,b,c) {

    var a = $("#quad1").val();
        b = $("#quad2").val();
        c = $("#quad3").val();

    $("#quad1").text(a);
    $("#quad2").text(b);
    $("#quad3").text(c);

    var xPos = parseFloat((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)).toPrecision(3);
    var xNeg = parseFloat((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)).toPrecision(3);

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

function diff(num1, num2) {

    var num1 = parseInt($("#diff1").val());
        num2 = parseInt($("#diff2").val());

    $("#diff1").text(num1);
    $("#diff2").text(num2);

    if (num1.toString().length >= 4 || num2.toString().length >= 4) {
        if (Math.abs(num1 - num2) > 8) {
            window.alert("Enter a smaller range.\nMaximum range is 13, but only 8 for 4-digit and larger numbers.");
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
    } else if (num1.toString().length < 4 || num2.toString().length < 4) {
        if (Math.abs(num1 - num2) >= 13) {
            window.alert("Enter a smaller range.\nMaximum range is 13, but only 8 for 4-digit and larger numbers.");
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

        if (Math.abs(num1 - num2) < 2) {
            $("#diff_sol").text("No non-exclusive solution.");
        }
}

function circleCalc(dia, Cference, area) {

    var dia = parseInt($("#dia").val());
        Cference = parseFloat((2 * Math.PI) * (dia / 2)).toPrecision(4);
        area = parseFloat(Math.PI * (Math.pow((dia / 2), 2))).toPrecision(4);

    $("#dia").text(dia);
    $("#circle_sol").text(Cference);
    $("#circle_sol2").text(area);

    if (dia <= 0) {
        window.alert("Invalid input.");
        $("#circle_sol").text("Invalid input.");
        $("#circle_sol2").text("Invalid input.");
    }
}