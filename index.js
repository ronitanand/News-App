const express=require('express')
const app=express();
const port=5000;
const axios=require('axios').default;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const news_router=require('./routes/news_route');
app.set('view engine','ejs');
app.use('/news',news_router);
app.use(express.static('public'));




app.get('/',(req,res)=>{
    res.redirect('/news')
})



app.listen(5000,()=>{
    console.log(`Server started on port ${port}`) ;

})