var imagenes=new Array(
    '/static/visa.png',
    '/static/mastercard.png',
    '/static/american.png',
    '/static/discover.png',
    '/static/error.png',
    '/static/comodin.png'
);

function cambiarImagen(){
  var visa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
  var mastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
  var americanexpress = /^3[4-7]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
  var discover = /^6011-?\d{4}-?\d{4}-?\d{4}$/;

  if (visa.test(document.getElementById("texto").value)){
    $("#imagen").attr("src", imagenes[0]);
  }
  else if (mastercard.test(document.getElementById("texto").value)) {
    $("#imagen").attr("src", imagenes[1]);
  }
  else if (americanexpress.test(document.getElementById("texto").value)) {
    $("#imagen").attr("src", imagenes[2]);
  }

  else if (discover.test(document.getElementById("texto").value)) {
      $("#imagen").attr("src", imagenes[3]);
  }
  else {
    $("#imagen").attr("src", imagenes[4]);
  }

}

function dos()
{
  $("#imagen").hide();
  cambiarImagen();
  $("#imagen").fadeIn();
}
