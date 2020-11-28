var total=0
var contador=0;
var elements=document.getElementsByClassName("grid-item__content-wrapper")
var contadorDom=document.getElementById("contador")
var listaArticulos=[]
var localStorage = window.localStorage;


for (const iterator of elements) {
    iterator.addEventListener("click", buy);
}



function buy(e){
    var totalText=document.getElementById("total")
    contador++
    contadorDom.innerText=contador
    var producto=e.target.parentNode.parentNode.lastElementChild.lastElementChild.firstElementChild.innerText
    var precio=e.target.parentNode.parentNode.lastElementChild.lastElementChild.lastElementChild.innerText
    precio=precio.split("$")
    precio=precio[1]
    var imagen=e.target.parentNode.parentNode.firstElementChild.firstElementChild.nextSibling.src
    imagen.toString()
    imagen=imagen.split("Page/")
    imagen=imagen[1] 
    createObjCarrito(producto,precio,imagen)
    var articulo={
        nombre:producto,
        precio:precio

    }
    listaArticulos.push(articulo)
    precio=parseInt(precio)
    total=total+precio
    totalText.innerText="$"+total

    document.getElementById("contador2").innerText=contador
    alert("Se añadio al carrito")
}

function createObjCarrito(nombre,precio,imgen){
    var donde=document.getElementById("contenedorShop")
    var padre=document.createElement("div")
    padre.className="ps-cart-item"
    var a=document.createElement("a")
    a.className="ps-cart-item__close"
    a.addEventListener("click", deleteItem);
    padre.appendChild(a)
    var divimg=document.createElement("div")
    divimg.className="ps-cart-item__thumbnail"
    var img=document.createElement("img")
    img.src=imgen
    var divName=document.createElement("div")
    divName.className="ps-cart-item__content"
    var name=document.createElement("a")
    name.className="ps-cart-item__title"
    name.innerText=nombre
    divName.appendChild(name)
    var pName=document.createElement("p")
    var span=document.createElement("span")
    span.innerText="Total:"
    var i=document.createElement("i")
    i.innerText="$"+precio


    divimg.appendChild(img)

    span.appendChild(i)
    pName.appendChild(span)
    divName.appendChild(pName)

    padre.appendChild(a)
    padre.appendChild(divimg)
    padre.appendChild(divName)
    
    donde.appendChild(padre)
  
}
function deleteItem(){
    alert("Borrar")
}
function genTicket(){
    var name=document.getElementById("defaultForm-name").value
    var lastname=document.getElementById("defaultForm-last").value
    var tel=document.getElementById("defaultForm-tel").value
    var email=document.getElementById("defaultForm-email").value
    var folio=Math.floor(Math.random() * 1000);

    var cliente={
        folio:folio,
        nombre:name,
        apellidos:lastname,
        telefono:tel,
        email:email,
        compra:listaArticulos
    }
    localStorage.setItem('cliente', JSON.stringify(cliente));
   
    document.getElementById('closeModal').click();
    alert("Se relizo correctamente la compra")

}

function test(){
    if (typeof(Storage) !== "undefined") {
        var cliente2=JSON.parse(localStorage.getItem('cliente'))
      }
    
}