function main() {}

var parser = math.parser();


$(".euler").click(function (e) {
    $(".tbody").empty()
    var m = $("#input").val()

    console.log(parser.eval('f(x, y) = ' + m + '')); // f(x, y)

    euler(parseFloat($("#X").val()), parseFloat($("#Y").val()), parseFloat($("#H").val()));

});
$(".mejorado").click(function (e) {
    $(".tbody").empty()
    var m = $("#input").val()

    console.log(parser.eval('f(x, y) = ' + m + '')); // f(x, y)

    euler_mejorado(parseFloat($("#X").val()), parseFloat($("#Y").val()), parseFloat($("#H").val()));

});
$(".ralston").click(function (e) {
    $(".tbody").empty()
    var m = $("#input").val()

    console.log(parser.eval('f(x, y) = ' + m + '')); // f(x, y)

    ralston(parseFloat($("#X").val()), parseFloat($("#Y").val()), parseFloat($("#H").val()));

});

function euler(x, y, h) {
    var yn, fun;


    var i = 0;

    while (x < 2) {

        i += 1;

        yn = y + h * (parser.eval('f(' + x + ',' + y + ')'));
        console.log(" # " + i + " Yn+1 = " + yn + " Yn = " + y + " x = " + x + "\n");
        $(".tbody").prepend(" <tr> <th>" + yn + "</th> <th>" + y + "</th> <th>" + x + "</th>  </tr>")

        x += parseFloat(h);
        console.log(x)
        y = yn;

    }

}

function euler_mejorado(x, y, h) {

    var yp, yc, funtion;

    // Estas son las condiciones para el 2b
    var i = 0;

    // Este es Euler Mejorado con 1/2; Heuhn
    while (x < 2) {
        i++;
        fun = parser.eval('f(' + x + ',' + y + ')');

        yp = y + h * fun;
        newfun = parser.eval('f(' + (x + h) + ',' + yp + ')');
        yc = y + (1 / 2) * (fun + newfun) * h;
        console.log("iteracción # " + i + " Yn+1 = " + yc + " Yn = " + y + " x = " + x + "\n");
        $(".tbody").prepend(" <tr> <th>" + yc + "</th> <th>" + y + "</th> <th>" + x + "</th>  </tr>")

        x += h;
        y = yc;
    }
}

function ralston(x, y, h) {
    var yp1, yp2, yc;

    // Estas son las condiciones para el 2b
    var i = 0;

    // Este es Euler Mejorado; Ralston
    while (x < 2) {
        i++;
        //Este es el k1
        yp1 = parser.eval('f(' + x + ',' + y + ')');
        //Este es el k2
        yp2 = parser.eval('f(' + (x + 0.75 * h) + ',' + (y + h * 0.75 * yp1) + ')');

        //Aquì se evalua para hallar yi+1=yi+(k1+2*k2)*h/3
        yc = y + (1 / 3) * (yp1 + 2 * yp2) * h;
        console.log("iteracción # " + i + " Yn+1 = " + yc + " Yn = " + y + " x = " + x + "\n");
        $(".tbody").prepend(" <tr> <th>" + yc + "</th> <th>" + y + "</th> <th>" + x + "</th>  </tr>")

        x += h;
        y = yc;
    }
}


window.onload = main;