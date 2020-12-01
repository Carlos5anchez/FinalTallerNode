var t = $('#example').DataTable();
var headers={};
var url="http://127.0.0.1:3000"
var correoBuscado;

$(document).ready(function() {
  document.getElementById("registroButton").addEventListener("click",registroNuevoUsuario)
  document.getElementById("bajaoButton").addEventListener("click",eliminarUsuario)
  document.getElementById("updateButton").addEventListener("click",UPDATEUsuario)
  document.getElementById("buscarButton").addEventListener("click",buscarUsuario)
  
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
      window.location.href="Index.html"
  }


} );


function loadUsers(){
  axios.get(url + "/user/",headers)
  .then(function(res){
      imprimirUsers(res.data.message)

  }).catch(function(err){
      console.log(err)
  })

}


function imprimirUsers(usuarios){
  for (let i = 0; i < usuarios.length; i++) {
    t.row.add( [
      usuarios[i].userName,
      usuarios[i].userLastName,
      usuarios[i].userPhone,
      usuarios[i].userEmail,
      usuarios[i].userAddress
   ] ).draw( false );
    
}


  
}




function registroNuevoUsuario(){


  var nombre= document.getElementById("nombre").value
  var apellidos=document.getElementById("apellidos").value
  var telefono=document.getElementById("telefono").value
  var email=document.getElementById("correo").value
  var direccion=document.getElementById("direccion").value
  

 

axios({
  method:"post",
  url:"http://127.0.0.1:3000/user/signin",
  data:{
    userName:nombre,
    userLastName: apellidos,
    userPhone:telefono,
    userEmail:email,
    userAddress:direccion
     
  }
 
}).then(function(res){
  console.log(res.data)
  if(res.data.code === 201){
    document.getElementById("closeModal").click();
    t.row.add( [
      nombre,
      apellidos,
      telefono,
      email,
      direccion
   ] ).draw( false );
     
  }
  else{
      alert("Hubo un problema al registrar")
  }
}).catch(function(err){
console.log(err)
})

}


function eliminarUsuario(){

  var email=document.getElementById("bajaCorreo").value

axios({
  method:"delete",
  url:"http://127.0.0.1:3000/user/userDelete",
  data:{
    userEmail:email

  }
 
}).then(function(res){
  console.log(res.data)
  if(res.data.code === 201){
    document.getElementById("closeModal1").click();
  
  }
  else{
      alert("Hubo un problema al Borrar")
  }
}).catch(function(err){
console.log(err)
})

}


function UPDATEUsuario(){

 
  var nombre= document.getElementById("nombreUpdate").value
  var apellidos=document.getElementById("apellidosUpdate").value
  var telefono=document.getElementById("telefonoUpdate").value
  var direccion=document.getElementById("direccionUpdate").value

axios({
  method:"put",
  url:"http://127.0.0.1:3000/user/userUpdate",
  data:{
    userName:nombre,
    userLastName: apellidos,
    userPhone:telefono,
    userEmail:correoBuscado,
    userAddress:direccion
     
  }
 
}).then(function(res){
  console.log(res.data)
  if(res.data.code === 201){
    alert(correoBuscado)
    document.getElementById("closeModal2").click();
  }
  else{
      alert("Hubo un problema al actualizar")
  }
}).catch(function(err){
console.log(err)
})

}

function buscarUsuario(){

  var email=document.getElementById("correoBuscar").value
 

  
axios({
  method:"post",
  url:"http://127.0.0.1:3000/user/buscarUsuario",
  data:{
    userEmail:email

  }
 
}).then(function(res){
  console.log(res.data)
  correoBuscado= email
  
  if(res.data.code === 201){
    document.getElementById("closeModal21").setAttribute("data-toggle","modal")
    document.getElementById("closeModal21").setAttribute("data-target","#form2")
    document.getElementById("closeModal21").click();

  }
  else{
      alert("Hubo un problema al buscar")
  }
}).catch(function(err){
console.log(err)

})



    

  
  

//   buscarButton data-toggle="modal" data-target="#form2"
// }
}

