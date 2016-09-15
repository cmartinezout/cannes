$(document).ready(function() {
  
$("#btn_enviar").click(function (e) {
  e.preventDefault();

  if($("#contNombre").val().length < 4) {
    alert("El nombre debe tener más de 3 caracteres");
    return false;
  }
  if($("#contEmail").val().length < 1) {
    alert("La dirección e-mail es obligatoria");
    return false;
  }
    if($("#contEmail").val().indexOf('@', 0) == -1 || $("#contEmail").val().indexOf('.', 0) == -1) {
    alert("La dirección es incorrecta");
    return false;
  
 }
   if($("#contComentario").val().length < 1) {
    alert("El comentario es obligatorio");
    return false;

  }else{

    $("#btn_enviar").attr("disabled","disabled");

Cel      = $("#contCel").val();
Nombre     = $("#contNombre").val();
Email      = $("#contEmail").val();
Comentario  = $("#contComentario").val();


    $.ajax({
      url: 'contactanos.php',
      cache: false,
      data: {Cel:Cel,Nombre:Nombre,Email:Email,Comentario:Comentario},
      dataType: "html",
      type: 'POST',
      success: function(data) {
        alert("Tus datos han sido enviados con éxito.");
$Cel      = $("#contCel").val();
$Nombre     = $("#contNombre").val();
$Email      = $("#contEmail").val();
$Comentario  = $("#contComentario").val();
   
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error al enviar mensaje de contacto");
        $("#btn_cotizador").removeAttr("disabled","disabled");
      }
    });
  }
  return false;
});
});