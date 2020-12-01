var localStorage = window.localStorage;
var tablaID= document.getElementById("tbody");
var contador=7;

  $(document).ready( function () {
    $('#example').DataTable({
      "language": {
        "search": "Buscar:"
      },
      "oLanguage": {
        "sLengthMenu": "Mostrar _MENU_ registros",
      }
    });
    
    var cliente2=JSON.parse(localStorage.getItem('cliente'))
    
    console.log(cliente2.compra)
    var tr= document.createElement("tr")
    var td1= document.createElement("td")
    var td2= document.createElement("td")
    var td3= document.createElement("td")
    var td4= document.createElement("td")
    var td5= document.createElement("td")

    td1.innerText=contador;
    td2.innerText=cliente2.compra[0].nombre;
    td3.innerText=`$ ${cliente2.compra[0].precio}`;
    td4.innerText= 1;
    td5.innerText= "21 de Noviembre 2020";

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    tablaID.appendChild(tr)
    
   

} );
