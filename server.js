const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express();
const port=4000 || process.env.PORT

app.use(bodyparser.json());
app.use(cors());

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    if(email==='anu@gmail.com'){
        if(password==='1234512345'){
            res.json({'log':true})
        }else {
            res.json({'log':false})
        }
    }
    else {
        res.json({'log':false})
    }
    // console.log(email,password)
    res.end();
})

app.listen(port,()=>{
    console.log(`connected to port ${port}`)
})