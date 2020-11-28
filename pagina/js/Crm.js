var t = $('#example').DataTable();

$(document).ready(function() {
  document.getElementById("registroButton").addEventListener("click",registro);


  // Automatically add a first row of data
  // $('#addRow').click();

} );



function registro(){



  var nombre= document.getElementById("nombre").value
  var apellidos=document.getElementById("apellidos").value
  var telefono=document.getElementById("telefono").value
  var email=document.getElementById("correo").value
  var direccion=document.getElementById("direccion").value
  

  t.row.add( [
   nombre,
   apellidos,
   telefono,
   email,
   direccion
] ).draw( false );
}

