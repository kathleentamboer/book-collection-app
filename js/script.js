$('.title').click(function(){
  $('.alphabet').show();
});

// toggle autocomplete demo
$(document).on('focus', '.autocomplete > input', function(){
  var foo = $(this).parent();
  foo.children('ul').show();
});

$(document).on('click', '#clear', function(){
  $('.autocomplete > ul').hide();
});

