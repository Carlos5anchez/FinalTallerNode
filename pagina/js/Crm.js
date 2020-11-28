var localStorage = window.localStorage;
var tablaID= document.getElementById("tbody");

  $(document).ready( function () {
    $('#example').DataTable({
      "language": {
        "search": "Buscar:"
      },
      "oLanguage": {
        "sLengthMenu": "Mostrar _MENU_ registros",
      }
    });
  });