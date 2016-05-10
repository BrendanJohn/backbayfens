"use strict"; 

$(document).ready(function() {
  var mybodyid = $('.body').attr('id');
  var mynavid = '#nav' + mybodyid;
  $(mynavid).attr('id', 'iamhere');
});