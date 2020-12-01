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
    
    var cliente2=JSON.parse(localStorage.getItem('cliente'))
    

    var tr= document.createElement("tr")
    var td1= document.createElement("td")
    var td2= document.createElement("td")
    var td3= document.createElement("td")
    var td4= document.createElement("td")
    
    td1.innerText=cliente2.nombre;
    td2.innerText=cliente2.apellidos;
    td3.innerText=cliente2.email;
    td4.innerText=cliente2.telefono;

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tablaID.appendChild(tr)
   
//     <tr>
//     <td>Tiger Nixon</td>
//     <td>System Architect</td>
//     <td>Edinburgh</td>
//     <td>61</td>
// </tr>


} );
