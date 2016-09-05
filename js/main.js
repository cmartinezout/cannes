$(document).on('click', '.items-producto', function(ev){
  ev.preventDefault(); //PREVENT DEFAULT ACTION FOR THE DOM
  id = $(this).attr('data-tipo-perro');
  $.getJSON('src/productos.json', function(data){ //GET THE JSON AND data IS THE DATA FROM THE JSON
    for (var i = 0; i < data.tipoPerro.length; i++) { //LOOK FOR ALL THE DATA ON THE JSON
      if(id == data.tipoPerro[i].id){ //IF THE OPTION SELECTED EQUAL TO ID FROM THE ELEMENT
        alert(data.tipoPerro[i].productos[0].Nombre)
      }
    }
  });
});

$(document).on('click', '.figure-pruducto', function(ev){
  ev.preventDefault(); //PREVENT DEFAULT ACTION FOR THE DOM
  $('.carousel-inner').empty();
  $('.carousel-indicators').empty();
  $('.frutiger-LT-57-cond').empty();
  $('.info-nutricional').empty();
  $('#formato').find('.tamanos-produc').empty();
  id = $(this).attr('data-tipo-perro');
  $.getJSON('src/productos.json', function(){ //GET THE JSON AND data IS THE DATA FROM THE JSON
  }).done(function(data){
    for (var i = 0; i < data.tipoPerro.length; i++) { //LOOK FOR ALL THE DATA ON THE JSON
      if(id == data.tipoPerro[i].id){ //IF THE OPTION SELECTED EQUAL TO ID FROM THE ELEMENT
        $('.frutiger-bold-cond').text(data.tipoPerro[i].Nombre);
        for (var j = 0; j < data.tipoPerro[i].productos.length; j++) {
          if (j==0){
            $('.carousel-inner').append('<div data-tipo-perro='+id+' data-id='+data.tipoPerro[i].productos[j].id+' class="item active"><img src='+data.tipoPerro[i].productos[j].imagen+' alt="..."></div>');
            $('#indregientes').find('p').empty();
            $('#ingredientes').find('p').text(data.tipoPerro[i].productos[j].Ingredientes);
            $('.text-grande').empty();
            $('.frutiger-LT-57-cond').text(data.tipoPerro[i].productos[j].Nombre);
            $('.carousel-indicators').append('<li data-target="#carousel-example-generic" data-slide-to='+j+' class="active"></li>');
            $('.text-grande').append(data.tipoPerro[i].productos[j].Caracteristicas);
            $('.info-nutricional').append(data.tipoPerro[i].productos[j].Nutricion);
            $('.carousel-indicators').append('')
            for (var k = 0; k < data.tipoPerro[i].productos[j].Porciones.length; k++) {
              $('#formato').find('.tamanos-produc').append('<figure><img src='+data.tipoPerro[i].productos[j].imagen+' alt=""><h3>'+data.tipoPerro[i].productos[j].Porciones[k]+'</h3></figure>');
            }
          }else{
            $('.carousel-inner').append('<div data-tipo-perro='+id+' data-tipo-producto='+data.tipoPerro[i].id+' data-id='+data.tipoPerro[i].productos[j].id+' class="item"><img src='+data.tipoPerro[i].productos[j].imagen+' alt="..."></div>');
            $('.carousel-indicators').append('<li data-target="#carousel-example-generic" data-slide-to='+j+'></li>');
          }
        }
        $('.container-producto').css('display', 'block');
      }
    }
  });
});

//GET THE ACTUAL ITEM ON THE CAROUSEL
//TODO
//REFACTOR THIS PLS
$(function(){
  $('#carousel-productos').on('slid.bs.carousel', function (e) {
      var id_tipo_perro = $(this).find('div.active').attr('data-tipo-perro');
      var id_tipo_producto = $(this).find('div.active').attr('data-tipo-producto');
      var id_producto = $(this).find('div.active').attr('data-id');
      $('#formato').find('.tamanos-produc').empty();
      $.getJSON('src/productos.json', function(){
      }).done(function(data){
        for (var i = 0; i < data.tipoPerro.length; i++) {
          if(id_tipo_perro == data.tipoPerro[i].id){
              for (var j = 0; j < data.tipoPerro[i].productos.length; j++) {
                if(id_producto == data.tipoPerro[i].productos[j].id){
                  $('#indregientes').find('p').empty();
                  $('#ingredientes').find('p').text(data.tipoPerro[i].productos[j].Ingredientes);
                  $('.info-nutricional').empty();
                  $('.info-nutricional').append(data.tipoPerro[i].productos[j].Nutricion);
                  $('.text-grande').empty();
                  $('.text-grande').append(data.tipoPerro[i].productos[j].Caracteristicas);
                  $('.frutiger-LT-57-cond').empty();
                  $('.frutiger-LT-57-cond').text(data.tipoPerro[i].productos[j].Nombre);
                  console.log(data.tipoPerro[i].productos[i].Porciones);
                  for (var k = 0; k < data.tipoPerro[i].productos[i].Porciones.length; k++) {
                    $('#formato').find('.tamanos-produc').append('<figure><img src='+data.tipoPerro[i].productos[j].imagen+' alt=""><h3>'+data.tipoPerro[i].productos[j].Porciones[k]+'</h3></figure>');
                  }
                }
              }
          }
        }
      });
  });
});
