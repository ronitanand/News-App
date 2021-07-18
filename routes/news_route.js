const express=require('express');
const axios=require('axios').default;
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));



router.get('/',async (req,res)=>{
    try{ const response=await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=64cef9f5e67c42c8af5ffa557e69546e')  ;
        const articles=response.data.articles;
        res.render('news',{articles});
    }
    catch{
        console.log('error');
    }
    
})

router.post('/xyz', async (req,res)=>{
console.log(req.body.news_search);
const response=await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=64cef9f5e67c42c8af5ffa557e69546e&q=${req.body.news_search}`);
const articles=response.data.articles;
res.render('news',{articles});
})

module.exports=router;
