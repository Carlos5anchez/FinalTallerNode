window.onload=init



function init(){
    if(!localStorage.getItem("token")){
        document.getElementById("botonLogin").addEventListener("click",obtenerValores)
    }
    else{
        window.location.href="Usuarios.html"
    }
}
 function obtenerValores(){

    const usuario=document.getElementById("emailLogin").value;
    const contraseña=document.getElementById("passwordLogin").value;
    axios({
        method:"post",
        url:"http://127.0.0.1:3000/user/login",
        data:{
            adminEmail:usuario,
            adminPassword: contraseña,
           
        }
       
    }).then(function(res){
       
        if(res.data.code === 200){
            localStorage.setItem("token",res.data.message)
             window.location.hraf="Usuarios.html"
           
        }
        else{
            alert("Usuario y/o contraseña incorrectos")
        }
    }).catch(function(err){
    console.log(err)
    })
}

