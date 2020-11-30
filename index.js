const morgan=require("morgan")
const express=require("express")
const app=express()

const auth=require('./middleware/auth')
const cors=require('./middleware/cors')
const notF=require('./middleware/notF')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true }))



//Rutas
const user= require("./Rutas/user")



app.use(cors)

app.get('/', (req,res,next)=>{
    return res.status(200).json({code: 1 , message: "Hola al proyecto final"})  
 });

app.use("/user",user);
app.use(auth);

app.use(notF);


app.listen(process.env.PORT || 3000,()=>{
    console.log("Servidor Corriendo")
});

