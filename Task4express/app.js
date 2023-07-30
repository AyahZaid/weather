
const express=require ('express');
const app =express()
const port =process.env.port||3000;




const path=require ('path')

const publicDirctory=path.join(__dirname,'./public')
const hbs = require('hbs');


app.set('view engine', 'hbs');

const viewsDirectory = path.join (__dirname , "/views" )
app.set( "views" , viewsDirectory)

const partialsPath = path.join (__dirname , "/partials")
hbs.registerPartials(partialsPath)

app.get("/home",(req,res)=>{
    res.render("index")
})

app.get('/weather',(req,res)=>{
    res.render("weather",{
        title:'weather',
        country:"cairo",
        latitude:25.4941838299718,
        longtude:28.871903452398,
        currentWeather:'clear',
        temp:"33°C"
    })
})



app.listen(port,()=>{
    console.log(`This Server is Running http://localhost:${port}`);
}
)
