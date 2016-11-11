$('.submit').on('click', sendInfo);

function createContact(){
  var contact = {
    name: $('#name').val(),
    email: $('#email').val(),
    message: $('#message').val()
  }
  return contact;
}

function sendInfo(evt){
  var contact = createContact();
  console.log('this is the contact obj ' + contact);
  $.post('/contact', contact, function(response){
    console.log(response);
    $('#contact-form').empty().html(response);
  })
}


