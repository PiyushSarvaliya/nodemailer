const express = require("express")
const nodemailer = require("nodemailer")
const app = express()

const transpoter = nodemailer.createTransport({
    service : "gmail",
    auth :{
        user : "piyushsarvaliya123@gmail.com",
        pass : "qmnq auvw gqhj qmpe",
    }
})

app.post("/sendmail" , (req , res) =>{
    let {email , text , subject} = req.body

    let mailoption = {
        from : "piyushsarvaliya123@gmail.com",
        to : req.body.email,
        subject : req.body.subject,
        text : req.body.text
    }

    transpoter.sendMail(mailoption , (error , info) =>{
        if(error){
            console.log(error)
        }
        else{
            console.log(info)
        }
    })
    res.send("mail is sent")
})


app.listen(8090 , ()=>{
    console.log("server is start 8090")
})