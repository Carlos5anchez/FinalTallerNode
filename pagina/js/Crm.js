var t = $('#example').DataTable();
var headers={};
var url="http://127.0.0.1:3000"

$(document).ready(function() {
  
  if(localStorage.getItem("token"))
  {
      headers= {
          headers:{
              'Authorization':"bearer"+localStorage.getItem("token")
          }
      }
      loadUsers(); 
  }
  else{
      window,lotion.href="login.html"
  }


} );


function loadUsers(){
  axios.get(url + "/user/",headers)
  .then(function(res){
      console.log(res)
      imprimirUsers(res.data.mesagge)

  }).catch(function(err){
      console.log(err)
  })

}


function imprimirUsers(usuarios){

  for (let i = 0; i < pokemon.length; i++) {
    t.row.add( [
      usuarios[i].userName,
      usuarios[i].userLastName,
      usuarios[i].userPhone,
      usuarios[i].userEmail,
      usuarios[i].userAddress
   ] ).draw( false );
    
}


  
}




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

// axios.get(url + "/pokemon",headers)
// .then(function(res){
//     console.log(res)
//     displayPokemon(res.data.mesagge)

// }).catch(function(err){
//     console.log(err)
// })

}

