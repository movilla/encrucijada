var canvas = document.getElementById("canvas");
var cnv = null;
if (canvas.getContext) {
    cnv = canvas.getContext("2d");
    trazarCnv();
}

function trazarCnv(){
    //Estilo inicial
    cnv.strokeStyle = "olive";
    cnv.shadowOffsetX = 0;
    cnv.shadowOffsetY = 0;  
    cnv.lineWidth = 2;
    //Borramos canvas
    cnv.clearRect(0,0,canvas.width,canvas.height);
    //Texto en el input      
    var texto = document.getElementById('titulo').value;
    // fondo de la carta
    var image = document.getElementById('fondo');
    // posición y tamaño del fondo
    cnv.drawImage(image, 0, 0, 744, 1039);            
    // tipo y tamaño letra
    cnv.font = "48px HEADOH";
    // posición texto y centrar
    cnv.textAlign= "center";
    cnv.fillText(texto, 372, 80);
    // vamos con la condición
    var condicion = document.getElementById('condicion').value;
    cnv.font = "italic 20px Ingleby";
    cnv.textAlign= "left";
/*    cnv.fillText(condicion, 50, 130);*/
    var start = 0; // Carácter por el que empezar
    var currentLine = 0; // Línea en la que nos encontramos.
    var jumpAt = 60; // Número de caracteres por línea.
    var lineHeight = 30; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < condicion.length)
    {
        str = condicion.substr(start,jumpAt);
        start += jumpAt;
 
        cnv.fillText(str, 50, 130+(lineHeight*currentLine++));
    }
    // vamos con la narración
    var narracion = document.getElementById('narracion').value;
    cnv.font = "20px Ingleby_regular";
    cnv.textAlign= "left";
    var start = 0; // Carácter por el que empezar
    var jumpAt = 60; // Número de caracteres por línea.
    var lineHeight = 30; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < narracion.length)
    {
        str = narracion.substr(start,jumpAt);
        start += jumpAt;
 
        cnv.fillText(str, 50, 130+(lineHeight*currentLine++));
    }
    // vamos con al opción 1
    if (document.getElementById('option1').value == '1') {
       var opcion1 = document.getElementById('opcion1');
       cnv.drawImage(opcion1, 35, 130+(lineHeight*currentLine++), 672, 41);
    }
    // vamos con el texto de la opción 1
    if (document.getElementById('option1').value == '1') {
    var primera_opcion = document.getElementById('primera_opcion').value;
    cnv.font = "20px Ingleby_regular";
    cnv.textAlign= "left";
    var start = 0; // Carácter por el que empezar
    var jumpAt = 60; // Número de caracteres por línea.
    var lineHeight = 30; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < primera_opcion.length)
    {
        str = primera_opcion.substr(start,jumpAt);
        start += jumpAt;
 
        cnv.fillText(str, 50, 180+(lineHeight*currentLine++));
    }
    }
    // vamos con al opción 2
    if (document.getElementById('option2').value == '1') {
       var opcion2 = document.getElementById('opcion2');
       cnv.drawImage(opcion2, 35, 180+(lineHeight*currentLine++), 672, 41);
    }
    // vamos con el texto de la opción 1
    if (document.getElementById('option2').value == '1') {
    var segunda_opcion = document.getElementById('segunda_opcion').value;
    cnv.font = "20px Ingleby_regular";
    cnv.textAlign= "left";
    var start = 0; // Carácter por el que empezar
    var jumpAt = 60; // Número de caracteres por línea.
    var lineHeight = 30; // Ancho de cada línea.
    var str; // Auxiliar donde guardar el texto partido.
 
    while (start < segunda_opcion.length)
    {
        str = segunda_opcion.substr(start,jumpAt);
        start += jumpAt;
 
        cnv.fillText(str, 50, 225+(lineHeight*currentLine++));
    }
    }
/*    var x = 10;
    var y = 90;
    var alto = 50;
    var relleno = 10;
    cnv.font = "italic bold " + alto +"px Times New Roman, sans-serif";
    var metrica = cnv.measureText(texto);
    var anchoCaja = metrica.width+2*relleno;
    var altoCaja = alto+2*relleno;
    cnv.strokeStyle = "blue";
    cnv.lineWidth = 5;
    cnv.lineJoin = "round";           
    cnv.strokeRect(x,y,anchoCaja,altoCaja);
    cnv.fillStyle = "red";
    cnv.shadowColor = "rgba(0,255,190,0.5)";
    cnv.shadowOffsetX = 2;
    cnv.shadowOffsetY = 2;
    cnv.fillText(texto, x+relleno, y+alto);
*/
}

document.querySelector('#captura').onclick = function () {
        var captura = document.getElementById('captura');
        var img2 = canvas.toDataURL("image/png");
        captura.innerHTML = '<img class="captura" src="'+img2+'"/>';
}
