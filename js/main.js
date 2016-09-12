var perros = ["cachorro", "adulto", "senior"];

//move slow to the section
$(document).ready(function(){
  $(document).on('click', '.item-nav', function(ev){
    ev.preventDefault();
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top-71
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  });
  })
$(document).on('click', '.figure-pruducto', function(ev){
  ev.preventDefault(); //PREVENT DEFAULT ACTION FOR THE DOM
  $('.galleta').css('display', 'block');
  id = $(this).attr('data-tipo-perro');
  $('nav').find('.item_principal-nav-producto-activo').removeClass('item_principal-nav-producto-activo').addClass('item_principal-nav-producto');
  $('.carousel-inner').empty();
  $('.carousel-indicators').empty();
  $('.frutiger-LT-57-cond').empty();
  $('.info-nutricional').empty();
  $('#formato').find('.tamanos-produc').empty();
  $("div[data-tipo-perro='"+id+"']").removeClass('item_principal-nav-producto').addClass('item_principal-nav-producto-activo');
  $("li[data-tipo-perro='"+id+"']").removeClass('seco-'+perros[id-1]).addClass('seco-'+perros[id-1]+'-activo');
  $('.link_subcategoria-prodcuto').each(function(index, item){
    if (!$(this).is(':hidden')){
      $(this).slideToggle();
    }
  });
  $('#link-sub-'+perros[parseInt(id)-1]).slideToggle();
  $("li[data-perro='"+id+"']").removeClass("seco-"+perros[parseInt(id)-1]+'-activo');
  $("ul[data-tipo-perro='"+id+"']").removeClass("seco-"+perros[parseInt(id)-1]).addClass("seco-"+perros[parseInt(id)-1]+"-activo");
  $.getJSON('src/productos.json', function(){ //GET THE JSON AND data IS THE DATA FROM THE JSON
  }).done(function(data){
    for (var i = 0; i < data.tipoPerro.length; i++) { //LOOK FOR ALL THE DATA ON THE JSON
      if(id == data.tipoPerro[i].id){ //IF THE OPTION SELECTED EQUAL TO ID FROM THE ELEMENT
        $('.frutiger-bold-cond').text(data.tipoPerro[i].Nombre);
        for (var j = 0; j < data.tipoPerro[i].productos.length; j++) {
          if (j==0){
            $('.carousel-inner').append('<div data-tipo-perro='+id+' data-id='+data.tipoPerro[i].productos[j].id+' class="item active"><img src='+data.tipoPerro[i].productos[j].imagen+' alt="..."></div>');
            $('#indregientes').find('p').empty();
            $('.desc').empty();
            $('.desc').text(data.tipoPerro[i].productos[j].Desc);
            $('#ingredientes').find('p').append(data.tipoPerro[i].productos[j].Ingredientes);
            $('.text-grande').empty();
            $('.frutiger-LT-57-cond').text(data.tipoPerro[i].productos[j].Nombre);
            $('.carousel-indicators').append('<li data-target="#carousel-productos" data-slide-to='+j+' class="active"></li>');
            $('.text-grande').append(data.tipoPerro[i].productos[j].Caracteristicas);
            $('.info-nutricional').append(data.tipoPerro[i].productos[j].Nutricion);
            $('.carousel-indicators').append('')
            for (var k = 0; k < data.tipoPerro[i].productos[j].Porciones.length; k++) {
              $('#formato').find('.tamanos-produc').append('<figure><img src='+data.tipoPerro[i].productos[j].imagen+' alt=""><h3>'+data.tipoPerro[i].productos[j].Porciones[k]+'</h3></figure>');
            }
          }else{
            $('.carousel-inner').append('<div data-tipo-perro='+id+' data-tipo-producto='+data.tipoPerro[i].id+' data-id='+data.tipoPerro[i].productos[j].id+' class="item"><img src='+data.tipoPerro[i].productos[j].imagen+' alt="..."></div>');
            $('.carousel-indicators').append('<li data-target="#carousel-productos" data-slide-to='+j+'></li>');
          }
        }
        $('.container-producto').css('display', 'block');
        $('html, body').stop().animate({
          'scrollTop': $('.container-producto').offset().top-100
        }, 900, 'swing', function () {
        });
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
                  $('.desc').empty();
                  $('.desc').text(data.tipoPerro[i].productos[j].Desc);
                  $('#ingredientes').find('p').text(data.tipoPerro[i].productos[j].Ingredientes);
                  $('.info-nutricional').empty();
                  $('.info-nutricional').append(data.tipoPerro[i].productos[j].Nutricion);
                  $('.text-grande').empty();
                  $('.text-grande').append(data.tipoPerro[i].productos[j].Caracteristicas);
                  $('.frutiger-LT-57-cond').empty();
                  $('.frutiger-LT-57-cond').text(data.tipoPerro[i].productos[j].Nombre);
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

$(function(){
  $('#carousel-snacks').on('slid.bs.carousel', function (e) {
      var id_producto = $(this).find('div.active').attr('data-id');
      $('#formato').find('.tamanos-produc').empty();
      $.getJSON('src/snaks.json', function(){
      }).done(function(data){
        for (var i = 0; i < data.tiposnaks.length; i++) {
          if(id_producto == data.tiposnaks[i].id){
            $('#ingredientes').find('p').empty();
            $('.desc').empty();
            $('.desc').text(data.tiposnaks[i].Desc);
            $('#ingredientes').find('p').append(data.tiposnaks[i].Ingredientes);
            $('.info-nutricional').empty();
            $('.info-nutricional').append(data.tiposnaks[i].Nutricion);
            $('.text-grande').empty();
            $('.text-grande').append(data.tiposnaks[i].Caracteristicas);
            $('.frutiger-LT-57-cond').empty();
            $('.frutiger-LT-57-cond').text(data.tiposnaks[i].Nombre);
          }
        }
      });
  });
});
$(document).on('click', '.snack', function(ev){
  $('#carousel-productos').css('display', 'none');
  $('#carousel-snacks').css('display', 'block');
  $('.galleta').css('display', 'none');
  ev.preventDefault();
  var id = parseInt($(this).attr('data-perro'));
  if($(this).hasClass('seco-'+perros[id-1]+'-activo')){
    return;
  }
  $("li[perro='"+id+"']").removeClass('humedo-'+perros[id-1]+'-activo').addClass('humedo-'+perros[id-1]);
  $("li[data-tipo-perro='"+id+"']").removeClass('seco-'+perros[id-1]+'-activo').addClass('seco-'+perros[id-1]);
  $("li[data-perro='"+id+"']").removeClass('seco-'+perros[id-1]).addClass('seco-'+perros[id-1]+'-activo');
  $('.frutiger-bold-cond').text('SNACKS')
  $('#indregientes').find('p').empty();
  $('.carousel-inner').empty();
  $('.carousel-indicators').empty();
  $('.frutiger-LT-57-cond').empty();
  $('.info-nutricional').empty();
  $('#ingredientes').find('p').empty();
  $('#formato').find('.tamanos-produc').empty();
  $.getJSON('src/snaks.json', function(){
  }).always(function(data){
    for (var i = 0; i < data.tiposnaks.length; i++) {
      if(i == 0){
        $('.carousel-inner').append('<div data-id='+data.tiposnaks[i].id+' class="item active"><img src='+data.tiposnaks[i].imagen+' alt="..."></div>');
        $('#ingredientes').find('p').append(data.tiposnaks[i].Ingredientes);
        $('.info-nutricional').append(data.tiposnaks[i].Nutricion);
        $('.text-grande').empty();
        $('.desc').empty();
        $('.desc').text(data.tiposnaks[i].Desc);
        $('.carousel-indicators').append('<li data-target="#carousel-snacks" data-slide-to='+i+' class="active"></li>');
        $('.text-grande').append(data.tiposnaks[i].Caracteristicas);
        $('.frutiger-LT-57-cond').text(data.tiposnaks[i].Nombre);
        $('.carousel-indicators').append('')
      }else{
        $('.carousel-inner').append('<div data-id='+data.tiposnaks[i].id+' class="item"><img src='+data.tiposnaks[i].imagen+' alt="..."></div>');
        $('.carousel-indicators').append('<li data-target="#carousel-snacks" data-slide-to='+i+'></li>');
      }
    }
  });
});

$(document).on('click', '.humedo', function(ev){
  $('#carousel-productos').css('display', 'none');
  $('#carousel-snacks').css('display', 'block');
  $('.galleta').css('display', 'none');
  ev.preventDefault();
  var id = parseInt($(this).attr('perro'));
  if($(this).hasClass('seco-'+perros[id-1]+'-activo')){
    return;
  }
  $("li[perro='"+id+"']").removeClass('humedo-'+perros[id-1]).addClass('humedo-'+perros[id-1]+'-activo');
  $("li[data-tipo-perro='"+id+"']").removeClass('seco-'+perros[id-1]+'-activo').addClass('seco-'+perros[id-1]);
  $("li[data-perro='"+id+"']").removeClass('seco-'+perros[id-1]+'-activo').addClass('seco-'+perros[id-1]);
  $('.frutiger-bold-cond').text('SALSA')
  $('#indregientes').find('p').empty();
  $('.carousel-inner').empty();
  $('.carousel-indicators').empty();
  $('.frutiger-LT-57-cond').empty();
  $('.info-nutricional').empty();
  $('#ingredientes').find('p').empty();
  $('#formato').find('.tamanos-produc').empty();
  $.getJSON('src/humedo.json', function(){
  }).always(function(data){
    for (var i = 0; i < data.humedos.length; i++) {
      if(i == 0){
        $('.carousel-inner').append('<div data-id='+data.humedos[i].id+' class="item active"><img src='+data.humedos[i].imagen+' alt="..."></div>');
        $('#ingredientes').find('p').append(data.humedos[i].Ingredientes);
        $('.info-nutricional').append(data.humedos[i].Nutricion);
        $('.text-grande').empty();
        $('.desc').empty();
        $('.desc').text(data.humedos[i].Desc);
        $('.carousel-indicators').append('<li data-target="#carousel-snacks" data-slide-to='+i+' class="active"></li>');
        $('.text-grande').append(data.humedos[i].Caracteristicas);
        $('.frutiger-LT-57-cond').text(data.humedos[i].Nombre);
        $('.carousel-indicators').append('')
      }else{
        $('.carousel-inner').append('<div data-id='+data.humedos[i].id+' class="item"><img src='+data.humedos[i].imagen+' alt="..."></div>');
        $('.carousel-indicators').append('<li data-target="#carousel-snacks" data-slide-to='+i+'></li>');
      }
    }
  });
});
$(document).on('click', '.comida', function(ev){
  ev.preventDefault(); //PREVENT DEFAULT ACTION FOR THE DOM
  $('.galleta').css('display', 'block');
  var id_perro = parseInt($(this).attr('data-tipo-perro'));
  $('.item_principal-nav-producto-activo').next().slideToggle();
  $('nav').find('.item_principal-nav-producto-activo').removeClass('item_principal-nav-producto-activo').addClass('item_principal-nav-producto');
  $("div[data-tipo-perro='"+id_perro+"']").removeClass('item_principal-nav-producto').addClass('item_principal-nav-producto-activo');
  $("li[perro='"+id+"']").removeClass('humedo-'+perros[id-1]+'-activo').addClass('humedo-'+perros[id-1]);
  $("li[data-perro='"+id_perro+"']").removeClass('seco-'+perros[id_perro-1]+'-activo').addClass('seco-'+perros[id_perro-1]);
  $("li[data-tipo-perro='"+id_perro+"']").removeClass('seco-'+perros[id_perro-1]).addClass('seco-'+perros[id_perro-1]+'-activo');
  $('#carousel-snacks').css('display', 'none');
  $('#carousel-productos').css('display', 'block');
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
            $('.desc').empty();
            $('.desc').text(data.tipoPerro[i].productos[j].Desc);
            $('.frutiger-LT-57-cond').text(data.tipoPerro[i].productos[j].Nombre);
            $('.carousel-indicators').append('<li data-target="#carousel-productos" data-slide-to='+j+' class="active"></li>');
            $('.text-grande').append(data.tipoPerro[i].productos[j].Caracteristicas);
            $('.info-nutricional').append(data.tipoPerro[i].productos[j].Nutricion);
            $('.carousel-indicators').append('')
            for (var k = 0; k < data.tipoPerro[i].productos[j].Porciones.length; k++) {
              $('#formato').find('.tamanos-produc').append('<figure><img src='+data.tipoPerro[i].productos[j].imagen+' alt=""><h3>'+data.tipoPerro[i].productos[j].Porciones[k]+'</h3></figure>');
            }
          }else{
            $('.carousel-inner').append('<div data-tipo-perro='+id+' data-tipo-producto='+data.tipoPerro[i].id+' data-id='+data.tipoPerro[i].productos[j].id+' class="item"><img src='+data.tipoPerro[i].productos[j].imagen+' alt="..."></div>');
            $('.carousel-indicators').append('<li data-target="#carousel-productos" data-slide-to='+j+'></li>');
          }
        }
        $('.container-producto').css('display', 'block');
      }
    }
  });
});

$(document).on('click', '.seco', function(ev){
  ev.preventDefault(); //PREVENT DEFAULT ACTION FOR THE DOM
  $('.galleta').css('display', 'block');
  var id_perro = parseInt($(this).attr('data-tipo-perro'));
  $('nav').find('.item_principal-nav-producto-activo').removeClass('item_principal-nav-producto-activo').addClass('item_principal-nav-producto');
  $("div[data-tipo-perro='"+id_perro+"']").removeClass('item_principal-nav-producto').addClass('item_principal-nav-producto-activo');
  $("li[data-perro='"+id_perro+"']").removeClass('seco-'+perros[id_perro-1]+'-activo').addClass('seco-'+perros[id_perro-1]);
  $("li[perro='"+id+"']").removeClass('humedo-'+perros[id-1]+'-activo').addClass('humedo-'+perros[id-1]);
  $("li[data-tipo-perro='"+id_perro+"']").removeClass('seco-'+perros[id_perro-1]).addClass('seco-'+perros[id_perro-1]+'-activo');
  $('#carousel-snacks').css('display', 'none');
  $('#carousel-productos').css('display', 'block');
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
            $('.desc').empty();
            $('.desc').text(data.tipoPerro[i].productos[j].Desc);
            $('.frutiger-LT-57-cond').text(data.tipoPerro[i].productos[j].Nombre);
            $('.carousel-indicators').append('<li data-target="#carousel-productos" data-slide-to='+j+' class="active"></li>');
            $('.text-grande').append(data.tipoPerro[i].productos[j].Caracteristicas);
            $('.info-nutricional').append(data.tipoPerro[i].productos[j].Nutricion);
            $('.carousel-indicators').append('')
            for (var k = 0; k < data.tipoPerro[i].productos[j].Porciones.length; k++) {
              $('#formato').find('.tamanos-produc').append('<figure><img src='+data.tipoPerro[i].productos[j].imagen+' alt=""><h3>'+data.tipoPerro[i].productos[j].Porciones[k]+'</h3></figure>');
            }
          }else{
            $('.carousel-inner').append('<div data-tipo-perro='+id+' data-tipo-producto='+data.tipoPerro[i].id+' data-id='+data.tipoPerro[i].productos[j].id+' class="item"><img src='+data.tipoPerro[i].productos[j].imagen+' alt="..."></div>');
            $('.carousel-indicators').append('<li data-target="#carousel-productos" data-slide-to='+j+'></li>');
          }
        }
        $('.container-producto').css('display', 'block');
      }
    }
  });
});
