$(document).on('click','.figure-rico' ,function(e){
  e.preventDefault();
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
    $('.biensano').find('h4').empty();
    $('.biensano').find('h3').empty();
    $('.biensano').find('p').empty();
    $('.biensano').find('img').empty();
    $.getJSON('src/consejos.json', function(){
    }).done(function(data){
      for (var i = 0; i < data.tipoConsejo[0].consejos.length; i++) {
        if(i%10==0){
          if (i==0){
            $('.custom-carousel-inner').append("<div class='item active'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
            $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[0].consejos[i].id+" class='small-thumbnail consejo-list'><h3 class='active'>"+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+"</h3></a></div></td></tr>");
          }else{
            $('.custom-carousel-inner').append("<div class='item'><div class='row-fluid'><table><tbody class='"+(i+1)+"'></tbody></table></div></div>");
            classToInput = i+1;
          }
        }
        if(i != 0){
          $('.'+classToInput+'').append("<tr><td><div class='span3'><a href='#x' data-id="+data.tipoConsejo[0].consejos[i].id+" class='small-thumbnail consejo-list'><h3>"+data.tipoConsejo[0].consejos[i].titulo.toUpperCase()+"</h3></a></div></td></tr>");
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
});

$(document).on('click', '.perro' ,function(e){
  e.preventDefault();
  var id_tipo = parseInt($(this).attr('data-tipo-seccion'));
  $('.section-rico-perro').css('display', 'none');
  $('#myCarouselraza').find('.carousel-inner').empty();
  $('.custom-carousel-inner').empty();
  $("section[tipo='"+id_tipo+"']").css('display', 'block');
  $('html, body').stop().animate({
    'scrollTop': $("section[tipo='"+id_tipo+"']").offset().top-100
  }, 900, 'swing', function () {
  });
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
  $(this).next().slideToggle();
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
