$(document).ready(function() {
  var mybodyid = $('.this_should_be_the_body').attr('id');
  var mynavid = '#nav' + mybodyid;
  $(mynavid).attr('id', 'iamhere');
});