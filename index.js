const morgan=require("morgan")
const express=require("express")
const app=express()


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true }))



app.get('/', (req,res,next)=>{
    return res.status(200).json({code: 1 , message: "Hola al proyecto final"})
     
 });

app.listen(process.env.PORT || 3000,()=>{
    console.log("Servidor Corriendo")
});

