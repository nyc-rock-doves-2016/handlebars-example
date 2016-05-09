$(document).ready(function(){
  var dogs = [ { name: 'Steven'}, {name: 'James'}, {name: 'Mildred'} ];
  var templateSource = $('#tmpl').html();
  var template = Handlebars.compile(templateSource);
  var output = template({pets: dogs});
  $('#mydiv').html(output);

});

