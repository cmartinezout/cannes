$(document).on('click','.figure-rico' ,function(e){
  e.preventDefault();
  var id_tipo = parseInt($(this).attr('data-tipo-seccion'));
  $('.section-rico-perro').css('display', 'none');
  $("section[tipo='"+id_tipo+"']").css('display', 'block');
  $('html, body').stop().animate({
    'scrollTop': $("section[tipo='"+id_tipo+"']").offset().top-100
  }, 900, 'swing', function () {
  });
  if(id_tipo == 1) {
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
    });
  }
});

$(document).on('click', '.perro' ,function(e){
  e.preventDefault();
  var id_tipo = parseInt($(this).attr('data-tipo-seccion'));
  $('.section-rico-perro').css('display', 'none');
  $("section[tipo='"+id_tipo+"']").css('display', 'block');
  $('html, body').stop().animate({
    'scrollTop': $("section[tipo='"+id_tipo+"']").offset().top-100
  }, 900, 'swing', function () {
  });
  if(id_tipo == 1) {
    $.getJSON('src/razas.json', function(){
    }).done(function(data){
    });
  }
});
