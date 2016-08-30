// $(function(){
//   //IF YOU CLICK ON AN ELEMETN a
//   $(document).on('click', 'a', function(ev){
//     ev.preventDefault(); //PREVENT DEFAULT ACTION FOR THE DOM
//     id = $(this).attr('id');
//     $.getJSON('test.json', function(data){ //GET THE JSON AND data IS THE DATA FROM THE JSON
//       for (var i = 0; i < data.razas.length; i++) { //LOOK FOR ALL THE DATA ON THE JSON
//         if(id == data.razas[i].id){ //IF THE OPTION SELECTED EQUAL TO ID FROM THE ELEMENT
//           $('#desc').text(data.razas[i].Caracteristicas); //FILL THE H1 WITH Caracteristicas, IF YOU WANNA CHANGE THE DOM, YOU JUST CHANGE THE ID
//           $('#img_lista').attr('src', data.razas[i].imagen) //FILL THE IMG WITH imagen
//           $('#test_select').val(id);
//         }
//       }
//     });
//   });
// });
// //IF YOU CHOOSE A DIFFERENT OPTION FROM THE SELECT
// $(document).on('change', $('#test_select'), function(el){ //el IS THE ELEMENT, IN THIS CASE =  $('#test_select')
//   $.getJSON('test.json', function(data){ //GET THE JSON AND data IS THE DATA FROM THE JSON
//     for (var i = 0; i < data.razas.length; i++) { //LOOK FOR ALL THE DATA ON THE JSON
//       if($(el.target).val() == data.razas[i].id){ //IF THE OPTION SELECTED EQUAL TO ID FROM THE ELEMENT
//         $('#desc').text(data.razas[i].Caracteristicas); //FILL THE H1 WITH Caracteristicas, IF YOU WANNA CHANGE THE DOM, YOU JUST CHANGE THE ID
//         $('#img_lista').attr('src', data.razas[i].imagen) //FILL THE IMG WITH imagen
//       }
//     }
//   });
// });
//FILL DOMS WITH DATA FROM JSON
$(function(){ //WHEN DOCUMENT IS READY
  $.getJSON('src/productos.json', function(data){ //GET THE JSON AND data IS THE DATA FROM THE JSON
    for (var i = 0; i < data.productos.length; i++) { //LOOK FOR ALL THE DATA ON THE JSON
      if(i == 0){
        $('#productos-ol').append('<li data-target="#myCarousel" data-slide-to='+i+' class="active"></li>')
        $('#wrapper-productos').append('<div class="item active"><img src='+data.productos[i].imagen+' width="460" height="345"></div>')
      }else{
        $('#productos-ol').append('<li data-target="#myCarousel" data-slide-to='+i+'></li>')
        $('#wrapper-productos').append('<div class="item"><img src='+data.productos[i].imagen+' width="460" height="345"></div>')
      }
      $('#lista').append('<li><a href="" class="link-img" id='+data.productos[i].id+'>'+data.productos[i].Nombre+'</a></li>');
      //$('#test_select').append('<option value='+data.productos[i].id+'>'+data.productos[i].id+'</option>');
    }
  });
});
