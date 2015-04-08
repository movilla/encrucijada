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
    cnv.font = "bold 48px Impact";
    // posición texto y centrar
    cnv.textAlign= "center";
    cnv.fillText(texto, 372, 80);
    // vamos con la condición
    var condicion = document.getElementById('condicion').value;
    cnv.font = "italic 14px Impact";
    cnv.fillText(condicion, 100, 150);

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

var img2 = canvas.toDataURL("image/png");
document.write('<img class="captura" src="'+img2+'"/>');
