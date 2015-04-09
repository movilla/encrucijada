var canvas = document.getElementById("canvas");
var cnx = null;
if (canvas.getContext) {
        cnx = canvas.getContext("2d");
        creacnx();
}

function creacnx(){
        var image = document.getElementById('fondo'); // fondo
        cnx.drawImage(image, 0, 0, 744, 1039);         
        var texto = document.getElementById('titulo').value; // título
        cnx.font = "48px HEADOH";
        cnx.textAlign= "center";
        cnx.fillText(texto, 372, 80);
        var condicion = document.getElementById('condicion').value; // condición
        cnx.font = "italic 22px Ingleby";
        cnx.textAlign= "left";
        var start = 0;
        var currentLine = 0;
        var jumpAt = 60;
        var lineHeight = 30;
        var str;
        while (start < condicion.length) {
                str = condicion.substr(start,jumpAt);
                start += jumpAt;
                cnx.fillText(str, 50, 130+(lineHeight*currentLine++));
        }
        var narracion = document.getElementById('narracion').value;  // narración
        cnx.font = "22px Ingleby";
        cnx.textAlign= "left";
        var start = 0;
        var jumpAt = 60;
        var lineHeight = 30;
        var str;
        while (start < narracion.length) {
                str = narracion.substr(start,jumpAt);
                start += jumpAt;
                cnx.fillText(str, 50, 130+(lineHeight*currentLine++));
        }
        if (document.getElementById('option1').value == '1') { // opción 1 
                var opcion1 = document.getElementById('opcion1');
                cnx.drawImage(opcion1, 35, 130+(lineHeight*currentLine++), 672, 41);
        }
        if (document.getElementById('option1').value == '2') { // opción unica
                var unica_op = document.getElementById('unica_op');
                cnx.drawImage(unica_op, 35, 130+(lineHeight*currentLine++), 672, 41);
        }
        if ((document.getElementById('option1').value == '1') || (document.getElementById('option1').value == '2')) { // texto opción 1
        var primera_opcion = document.getElementById('primera_opcion').value;
        cnx.font = "22px Ingleby";
        cnx.textAlign= "left";
        var start = 0;
        var jumpAt = 60;
        var lineHeight = 30;
        var str;
        while (start < primera_opcion.length) {
                str = primera_opcion.substr(start,jumpAt);
                start += jumpAt;
                cnx.fillText(str, 50, 180+(lineHeight*currentLine++));
                }
    }
    if (document.getElementById('option2').value == '1') { // opción 2
       var opcion2 = document.getElementById('opcion2');
       cnx.drawImage(opcion2, 35, 180+(lineHeight*currentLine++), 672, 41);
    }
    if (document.getElementById('option2').value == '1') { // texto opción 2
    var segunda_opcion = document.getElementById('segunda_opcion').value;
    cnx.font = "22px Ingleby";
    cnx.textAlign= "left";
    var start = 0; // Carácter por el que empezar
    var jumpAt = 60; // Número de caracteres por línea.
    var lineHeight = 30; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
        while (start < segunda_opcion.length) {
                str = segunda_opcion.substr(start,jumpAt);
                start += jumpAt;
 
                cnx.fillText(str, 50, 225+(lineHeight*currentLine++));
        }
    }
}

document.querySelector('#captura').onclick = function () {
        var captura = document.getElementById('captura');
        var img2 = canvas.toDataURL("image/png");
        captura.innerHTML = '<img class="captura" src="'+img2+'"/>';
}
