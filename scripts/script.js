$(document).ready(function() {
  console.log("Ready!");
  var mybodyid = $('.this_should_be_the_body').attr('id');
  var mynavid = '#nav' + mybodyid;
  console.log("mybodyid is " + mybodyid);
  console.log("mynavid is " + mynavid);
  $(mynavid).attr('id', 'iamhere');
});