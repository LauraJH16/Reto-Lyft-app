$(document).ready(function() {
  setTimeout(function() {
    $('#splash').css('display', 'none');
    $('#home').css('display', 'block');
  }, 3000);

  var signUp = $('#sign-up');
  var x = Math.floor((Math.random() * (999 - 99 + 1)) + 99);    
  var validateEmail = false;
  var validateName = false; 
  var validateLastName = false;
  var validateCheck = false;
  var $check = $('input[type=checkbox]');

  $(signUp).click(function() {
    window.location.href = 'views/sign1.html';
  });

  $('.chevron').click(function() {
    window.location.href = '../index.html';        
  });

  $('select').material_select();

  $('.select-country').click(function() {
    $('ul').toggleClass('desactive');
    $('ul').toggleClass('activelist');
  });

  $('.btn-sign').click(function() {
    alert('Tú codigo: LAB-' + x);
    window.location.href = 'sign2.html';
  });

  $('#sign input').keyup(function() {
    if ($('#sign input').val().length > 8) {
      $('.btn-sign').removeAttr('disabled');
      $('.btn-sign').removeClass('disable');            
    } else {
      $('.btn-sign').prop('disabled', true); 
      $('.btn-sign').addClass('disable');
    }
  });

  $('.chevron-two').click(function() {
    window.location.href = 'sign1.html';
  });

  $('.resend').click(function() {
    alert('Tú codigo: LAB-' + x);        
  });

  $('#sign .input-two').keyup(function() {
    if ($('#sign .input-two').val().length > 2 && $('#sign .input-two').val().length < 4) {
      $('.btn-sign-two').removeAttr('disabled');
      $('.btn-sign-two').removeClass('disable');            
    } else {
      $('.btn-sign-two').prop('disabled', true); 
      $('.btn-sign-two').addClass('disable');
    }
  });

  $('.btn-sign-two').click(function() {
    window.location.href = 'form.html';
  });

  $('.chevron-three').click(function() {
    window.location.href = 'sign2.html';
  });

  $('.email-form').keyup(function(event) {
    var regexEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

    if (regexEmail.test($(this).val())) {
      validateEmail = true;
      enableButton(); 
    } else {
      disableButton();
    }
  });

  $('.name-form').keyup(function(event) {
    if ($(this).val().length > 3 && $(this).val() !== '') {
      validateName = true;
      enableButton(); 
    } else {
      disableButton();
    }
  });

  $('.lastname-form').keyup(function(event) {
    if ($(this).val().length > 3 && $(this).val() !== '') {
      validateLastName = true;
      enableButton(); 
    } else {
      disableButton();
    }
  });

  $check.on('click', function(event) {
    if (event.target.checked) {
      validateCheck = true;
      enableButton();
    } else {
      disableButton();
    }
  });

  function enableButton() {
    if (validateName && validateLastName && validateEmail && validateCheck) {
      $('.btn-sign-three').removeAttr('disabled');
      $('.btn-sign-three').removeClass('disable'); 
    }
  }
    
  function disableButton() {
    $('.btn-sign-three').prop('disabled', true); 
    $('.btn-sign-three').addClass('disable');
  }

  $('.btn-sign-three').click(function() {
    window.location.href = 'finale.html';
  });

  $('.venezuela').click(function() {
    $('.select-country').attr('src', '../assets/images/venezuela.png');
    $('.input-one').text('+58');
  });

  $('.mexico').click(function() {
    $('.select-country').attr('src', '../assets/images/mexico.jpg');
    $('.input-one').text('+52');
  });

  $('.us').click(function() {
    $('.select-country').attr('src', '../assets/images/us.png');
    $('.input-one').val('+1');
  });

  $('.peru').click(function() {
    $('.select-country').attr('src', '../assets/images/peru.png');
    $('.input-one').val('+51');
  });
});