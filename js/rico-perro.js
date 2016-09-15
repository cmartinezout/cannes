$(document).on('click','.figure-rico' ,function(e){
  e.preventDefault();
  $('.perro').next().hide();
  var id_tipo = parseInt($(this).attr('data-tipo-seccion'));
  $('.section-rico-perro').css('display', 'none');
  $('#myCarouselraza').find('.carousel-inner').empty();
  $('.custom-carousel-inner').empty();
  $("section[tipo='"+id_tipo+"']").css('display', 'block');
  $('html, body').stop().animate({
    'scrollTop': $("section[tipo='"+id_tipo+"']").offset().top-100
  }, 900, 'swing', function () {
  });
  if(id_tipo == 1){
    classToInput = 0;
    $('#link-sub-consejos').find("li[data-id='1']").removeClass('seco-cachorro').addClass('seco-cachorro-activo');
    $('.biensano').empty();
    $.getJSON('src/consejos.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.tipoConsejo[0].consejos.length; i++) {
        if(i%10==0){
          if (i==0){
            $('.biensano').append('<h4>#BIENESTAR Y CUIDADOS.</h4>');
            $('.biensano').append('<h3>'+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+'</h3>');
            $('.biensano').append('<p>'+data.tipoConsejo[0].consejos[i].cuerpo+'</p>');
            $('.biensano').append('<img src='+data.tipoConsejo[0].consejos[i].imagen+' alt="">');
            $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
            $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[0].consejos[i].id+" data-tipo-categoria="+data.tipoConsejo[0].id+" class='small-thumbnail consejo-list'><h3 class='active'>"+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+"</h3></a></div></td></tr>");
          }else{
            $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
          }
        }
        if(i != 0){
          $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[0].consejos[i].id+" data-tipo-categoria="+data.tipoConsejo[0].id+" class='small-thumbnail consejo-list'><h3>"+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+"</h3></a></div></td></tr>");
        }
      }
    });
  }
  if(id_tipo == 2){
    classToInput = 0;
    patt = new RegExp("^A");
    $('.items-lista-nombres').empty();
    $.getJSON('src/nombres.json', function(){
    }).done(function(data){
      for (var i= 0; i<data.total.length; i++) {
        if (patt.test(data.total[i].letra)){
          if (data.total[i].nombres.length != 0){
            for(var j=0; j<data.total[i].nombres.length; j++){
              if (j % 5 == 0) {
                classToInput = j+1
                $('.items-lista-nombres').append('<div class="item-ul '+classToInput+'" ></div>');
                $('.'+classToInput+'').append('<ul></ul>');
                $('.'+classToInput+'').find('ul').append('<li>'+data.total[i].nombres[j]+'</li>');
              }else{
                $('.'+classToInput+'').find('ul').append('<li>'+data.total[i].nombres[j]+'</li>');
              }
            }
          }
        }
      }
    });
  }
  if(id_tipo == 3) {
    cont = 0;
    classToInput = 0;
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.razas.length; i++) {
        cont++;
        if(i%10==0){
          if (i==0){
            $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item active'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
            classToInput = i+1;
            $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3 class='active'>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
          }else{
            $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
          }
        }
        if(i != 0){
          $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
          $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
        }
      }
    });
  }
  if(id_tipo != 2){
    $("div[data-tipo-seccion='"+id_tipo+"']").next().slideToggle();
  }
});

$(document).on('click', '.perro' ,function(e){
  e.preventDefault();
  $('.perro').next().hide();
  var id_tipo = parseInt($(this).attr('data-tipo-seccion'));
  $('.section-rico-perro').css('display', 'none');
  $('#myCarouselraza').find('.carousel-inner').empty();
  $('.custom-carousel-inner').empty();
  $("section[tipo='"+id_tipo+"']").css('display', 'block');
  $('html, body').stop().animate({
    'scrollTop': $("section[tipo='"+id_tipo+"']").offset().top-100
  }, 900, 'swing', function () {
  });
  if(id_tipo == 1){
    classToInput = 0;
    $('#link-sub-consejos').find("li").removeClass('seco-cachorro-activo').addClass('seco-cachorro');
    $('#link-sub-consejos').find("li[data-id='1']").removeClass('seco-cachorro').addClass('seco-cachorro-activo');
    $('.biensano').empty();
    $.getJSON('src/consejos.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.tipoConsejo[0].consejos.length; i++) {
        if(i%10==0){
          if (i==0){
            $('.biensano').append('<h4>#BIENESTAR Y CUIDADOS.</h4>');
            $('.biensano').append('<h3>'+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+'</h3>');
            $('.biensano').append('<p>'+data.tipoConsejo[0].consejos[i].cuerpo+'</p>');
            $('.biensano').append('<img src='+data.tipoConsejo[0].consejos[i].imagen+' alt="">');
            $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
            $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[0].consejos[i].id+" data-tipo-categoria="+data.tipoConsejo[0].id+" class='small-thumbnail consejo-list'><h3 class='active'>"+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+"</h3></a></div></td></tr>");
          }else{
            $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
          }
        }
        if(i != 0){
          $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[0].consejos[i].id+" data-tipo-categoria="+data.tipoConsejo[0].id+" class='small-thumbnail consejo-list'><h3>"+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+"</h3></a></div></td></tr>");
        }
      }
    });
  }
  if(id_tipo == 2){
    classToInput = 0;
    patt = new RegExp("^A");
    $('.items-lista-nombres').empty();
    $.getJSON('src/nombres.json', function(){
    }).done(function(data){
      for (var i= 0; i<data.total.length; i++) {
        if (patt.test(data.total[i].letra)){
          if (data.total[i].nombres.length != 0){
            for(var j=0; j<data.total[i].nombres.length; j++){
              if (j % 5 == 0) {
                classToInput = j+1
                $('.items-lista-nombres').append('<div class="item-ul '+classToInput+'" ></div>');
                $('.'+classToInput+'').append('<ul></ul>');
                $('.'+classToInput+'').find('ul').append('<li>'+data.total[i].nombres[j]+'</li>');
              }else{
                $('.'+classToInput+'').find('ul').append('<li>'+data.total[i].nombres[j]+'</li>');
              }
            }
          }
        }
      }
    });
  }
  if(id_tipo == 3) {
    cont= 0;
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.razas.length; i++) {
        cont++
        if(i%10==0){
          if (i==0){
            $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item active'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
            classToInput = i+1;
            $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" data-cont="+cont+" class='small-thumbnail raza-list'><h3 class='active'>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
          }else{
            $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
          }
        }
        if(i != 0){
          $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" data-cont="+cont+" class='small-thumbnail raza-list'><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
          $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
        }
      }
    });
  }
  $("div[data-tipo-seccion='"+id_tipo+"']").next().slideToggle();
});

$(function(){
  $('#myCarouselraza').on('slid.bs.carousel', function (e) {
      var id_raza = $(this).find('div.active').attr('data-id-perro');
      $('h3.active').removeClass('active');
      $("a[data-id='"+id_raza+"']").find('h3').addClass('active');
  });
});

//CHANGE TO DOG
$(document).on('click','.raza-list' ,function(e){
  e.preventDefault();
  var id_raza = $(this).attr('data-cont');
  console.log(id_raza);
  $('#myCarouselraza').carousel(parseInt(id_raza-1));
})

$(document).on('change', '.filtro', function(e){
  e.preventDefault();
  $('#myCarouselraza').find('.carousel-inner').empty();
  $('.custom-carousel-inner').empty();
  var raza = $('.select-1').val();
  var pelo = $('.select-2').val();
  if (pelo == "" && raza == ""){
    classToInput= 0;
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.razas.length; i++) {
        if(i%10==0){
          if (i==0){
            $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item active'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
            classToInput = i+1;
            $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" data-cont="+cont+" class='small-thumbnail raza-list'><h3 class='active'>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
          }else{
            $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
          }
        }
        if(i != 0){
          $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
          $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
        }
      }
    });
  }else if(pelo != "" && raza == ""){
    j = 0;
    cont=0;
    classToInput = 0;
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.razas.length; i++) {
          if(data.razas[i].pelaje == pelo){
            cont++;
              if (j==0){
                j++;
                $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+j+"'></tbody></table></div></div>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item active'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3 class='active'>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
              }else if (cont < 10){
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
                //classToInput = i+1;
              }else if(cont==10){
                j++;
                $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+j+"'></tbody></table></div></div>");
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
              }else if(cont>10){
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
              }
          }
      }
    });
  }else if(pelo == "" && raza != ""){
    j = 0;
    cont=0;
    classToInput = 0;
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.razas.length; i++) {
          if(data.razas[i].tamano == raza){
            cont++;
              if (j==0){
                j++;
                $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+j+"'></tbody></table></div></div>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item active'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3 class='active'>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
              }else if (cont < 10){
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
                //classToInput = i+1;
              }else if(cont==10){
                j++;
                $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+j+"'></tbody></table></div></div>");
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
              }else if(cont>10){
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
              }
          }
      }
    });
  }else{
    j = 0;
    cont=0;
    classToInput = 0;
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.razas.length; i++) {
          if(data.razas[i].tamano == raza && data.razas[i].pelaje == pelo){
            cont++;
              if (j==0){
                j++;
                $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+j+"'></tbody></table></div></div>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item active'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3 class='active'>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
              }else if (cont < 10){
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
                //classToInput = i+1;
              }else if(cont==10){
                j++;
                $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+j+"'></tbody></table></div></div>");
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
              }else if(cont>10){
                $('.'+j+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.razas[i].id+" class='small-thumbnail raza-list' data-cont="+cont+"><h3>"+data.razas[i].Nombre.toUpperCase()+"</h3></a></div></td></tr>");
                $('#myCarouselraza').find('.carousel-inner').append("<div data-id-perro="+data.razas[i].id+" class='item'><img src='"+data.razas[i].imagen+"' alt=''><div class='contenido-raza'><div class='triangulo_naranjo'></div><h3>RAZA "+data.razas[i].Nombre.toUpperCase()+"</h3><p>"+data.razas[i].Descripcion+"</p></div></div>")
              }
          }
      }
    });
  }
});

$(document).on('click', '.consejo-list', function(e){
  e.preventDefault();
  var data_tipo = $(this).attr('data-tipo-categoria');
  var id_nota = $(this).attr('data-id');
  $('h3.active').removeClass('active');
  $(this).find('h3').addClass('active');
  $('.biensano').empty();
  $.getJSON('src/consejos.json', function(){
  }).done(function(data){
    for (var i = 0; i < data.tipoConsejo.length; i++) {
      if (data_tipo == data.tipoConsejo[i].id){
        for (var j = 0; j < data.tipoConsejo[i].consejos.length; j++) {
          if(id_nota == data.tipoConsejo[i].consejos[j].id){
            $('.biensano').append('<h4>#'+data.tipoConsejo[i].nombre.toUpperCase()+'.</h4>');
            $('.biensano').append('<h3>'+data.tipoConsejo[i].consejos[j].titulo.toUpperCase()+'</h3>');
            $('.biensano').append('<p>'+data.tipoConsejo[i].consejos[j].cuerpo+'</p>');
            $('.biensano').append('<img src='+data.tipoConsejo[i].consejos[j].imagen+' alt="">');
            break;
          }
        }
      }
    }
  });
});

$(document).on('click', '.consejo', function(e){
  e.preventDefault();
  var id_nota = $(this).attr('data-id');
  $('.biensano').empty();
  $('.custom-carousel-inner').empty();
  $('#link-sub-consejos').find("li").removeClass('seco-cachorro-activo').addClass('seco-cachorro');
  $(this).removeClass('seco-cachorro').addClass('seco-cachorro-activo');
  $.getJSON('src/consejos.json', function(){
  }).done(function(data){
    for (var i = 0; i < data.tipoConsejo.length; i++) {
      if(data.tipoConsejo[i].id == id_nota){
        for (var j = 0; j < data.tipoConsejo[i].consejos.length; j++) {
            if(j%10==0){
              if (j==0){
                $('.biensano').append('<h4>#'+data.tipoConsejo[i].nombre.toUpperCase()+'.</h4>');
                $('.biensano').append('<h3>'+data.tipoConsejo[i].consejos[j].titulo.toUpperCase()+'</h3>');
                $('.biensano').append('<p>'+data.tipoConsejo[i].consejos[j].cuerpo+'</p>');
                $('.biensano').append('<img src='+data.tipoConsejo[i].consejos[j].imagen+' alt="">');
                $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+(j+1)+"'></tbody></table></div></div>");
                classToInput = j+1;
                $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[i].consejos[j].id+" data-tipo-categoria="+data.tipoConsejo[j].id+" class='small-thumbnail consejo-list'><h3 class='active'>"+data.tipoConsejo[i].consejos[j].titulo.toUpperCase()+"</h3></a></div></td></tr>");
              }else{
                $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+(j+1)+"'></tbody></table></div></div>");
                classToInput = j+1;
              }
            }
            if(j != 0){
              $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[i].consejos[j].id+" data-tipo-categoria="+data.tipoConsejo[i].id+" class='small-thumbnail consejo-list'><h3>"+data.tipoConsejo[i].consejos[j].titulo.toUpperCase()+"</h3></a></div></td></tr>");
            }
        }
      }
    }
  });
});

$(document).on('click', '.letra-abc', function(e){
  e.preventDefault();
  var letra = $(this).attr('value');
  $('.nav-lista-nombre').find('h3').text(letra);
  classToInput = 0;
  patt = new RegExp("^"+letra+"");
  $('.items-lista-nombres').empty();
  $.getJSON('src/nombres.json', function(){
  }).done(function(data){
    for (var i= 0; i<data.total.length; i++) {
      if (patt.test(data.total[i].letra)){
        if (data.total[i].nombres.length != 0){
          for(var j=0; j<data.total[i].nombres.length; j++){
            if (j % 5 == 0) {
              classToInput = j+1
              $('.items-lista-nombres').append('<div class="item-ul '+classToInput+'" ></div>');
              $('.'+classToInput+'').append('<ul></ul>');
              $('.'+classToInput+'').find('ul').append('<li>'+data.total[i].nombres[j]+'</li>');
            }else{
              $('.'+classToInput+'').find('ul').append('<li>'+data.total[i].nombres[j]+'</li>');
            }
          }
        }
      }
    }
  });
})
