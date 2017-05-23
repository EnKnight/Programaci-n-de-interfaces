var inputs = document.querySelectorAll( 'input[type=text], input[type=email], input[type=password]' );
for (i = 0; i < inputs.length; i ++) {
  var inputEl = inputs[i];
  if( inputEl.value.trim() !== '' ) {
  	inputEl.parentNode.classList.add( 'input--filled' );
  }
  inputEl.addEventListener( 'focus', onFocus );
  inputEl.addEventListener( 'blur', onBlur );
}

function onFocus( ev ) {
  ev.target.parentNode.classList.add( 'inputs--filled' );
}

function onBlur( ev ) {
  if ( ev.target.value.trim() === '' ) {
  	ev.target.parentNode.classList.remove( 'inputs--filled' );
  } else if ( ev.target.checkValidity() == false ) {
    ev.target.parentNode.classList.add( 'inputs--invalid' );
    ev.target.addEventListener( 'input', liveValidation );
  } else if ( ev.target.checkValidity() == true ) {
    ev.target.parentNode.classList.remove( 'inputs--invalid' );
    ev.target.addEventListener( 'input', liveValidation );
  }
}

function liveValidation( ev ) {
  if ( ev.target.checkValidity() == false ) {
    ev.target.parentNode.classList.add( 'inputs--invalid' );
  } else {
    ev.target.parentNode.classList.remove( 'inputs--invalid' );
  }
}

var submitBtn = document.querySelector( 'input[type=submit]' );
submitBtn.addEventListener( 'click', onSubmit );

function onSubmit( ev ) {
  /*$("#username").show(); $("#lbl_username").show();
  $("#pasword").hide(); $("#lbl_pasword").hide();*/

  var inputsWrappers = ev.target.parentNode.querySelectorAll( 'span' );
  for (i = 0; i < inputsWrappers.length; i ++) {
    input = inputsWrappers[i].querySelector( 'input[type=text], input[type=email]' );
    if ( input.checkValidity() == false ) {
      inputsWrappers[i].classList.add( 'inputs--invalid' );
    } else if ( input.checkValidity() == true ) {
      inputsWrappers[i].classList.remove( 'inputs--invalid' );
    }
  }

  

}


function redireccionar() 
{
  var pagina="/conection.php"
  location.href=pagina
  setTimeout ("redireccionar()", 20000)
} 


$(document).ready(function(){
   $("#virtualKeyboardChromeExtensionUrlBar").hide(); 

  $(document).on('click', '.muestra-dropdowns', function(){
    $('#lbl_username, #username, #lbl_pasword, #pasword, #lbl_email, #email, #lbl_name, #name, #lbl_f_last_name, #f_last_name, #lbl_s_last_name, #s_last_name, .muestra-dropdowns').fadeOut();
    $('#submit, .dropdowns, .muestra-dropdowns-2').fadeIn();
    return false;
  });

  $(document).on('click', '.muestra-dropdowns-2', function(){
    $('#lbl_username, #username, #lbl_pasword, #pasword, #lbl_email, #email, #lbl_name, #name, #lbl_f_last_name, #f_last_name, #lbl_s_last_name, #s_last_name, .muestra-dropdowns').fadeIn();
    $('#submit, .dropdowns, .muestra-dropdowns-2, #lbl_horarios, #horario_id').fadeOut();
    return false;
  });
   

 

  $(document).on('submit', '.form-login', function(e){
      //No pone todos los datos en la liga 
      e.preventDefault();
      var var_sel = document.getElementById("horario_sel");
      var strUser = var_sel.options[var_sel.selectedIndex].value;

      var datos = $(this).serialize()//+strUser;
      $.post('http://localhost/Interfaces_2/Signup/Php/conection.php', datos, function(res){
        $('.form-login')[0].reset();
        //window.location.href='http://localhost:9000/#!/alumnos';
        //window.location='http://localhost:9000/#!/alumnos';
          console.log(res);
      });
      //window.location='http://localhost:9000/#!/alumnos';

  });

  $(document).on('change', '.select-disciplina', function(){
    var disc = $(this).val();
    var datos = {
      'disciplina' : disc
    };
    $.post('http://localhost/Interfaces_2/Signup/Php/get_horarios.php', datos, function(res){
      $('.div-horarios').html(res);
    });
  });
});