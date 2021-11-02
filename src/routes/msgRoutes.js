const express = require("express");
const msgRoute = express.Router();
const nodemailer = require('nodemailer');
const message = require('../model/message')



msgRoute.get('/',function (req,res){
     console.log('here')   
    res.render('msg',{})
    });
msgRoute.post('/',function(req, res) {
    console.log("hello")
         var item = {
            
            name:req.body.name,
             fname:req.body.fname,
             email:req.body.email
        }
        

        var MSG = message(item);
         MSG.save()
         .then((response) => {
            console.log(response);
    
            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'creationzv@gmail.com',
                    pass: 'Vishnu@123'
                }
            });
        
            console.log("started mail");
            
        
            let mailDetails = {
                from: 'creationzv@gmail.com',
                to: response.email,
                subject: 'Diwali Wishes from ' + response.name,
                text: 'your friend is wishing u a happy diwali https://deevalifromak.herokuapp.com/message/'+response._id
            };
            console.log(mailDetails);
            mailTransporter.sendMail(mailDetails, function (err, data) {
        
                if (err) {
                    console.log(err);
                    res.json({ success: false });
                    console.log('Error Occurs! Bad Request');
                } else {
                    res.json({ success: true, name: response.fname });
        
                    console.log('Email sent successfully');
                }
            });
        }) // saving to database
    })

    msgRoute.get('/:id', function (req, res) {


        let id = req.params.id;
        console.log(id);
        message.findOne({ _id: id }, function (err, data) {
            console.log(err);
    
            console.log(data);
    
            res.render("wish", {
                name: data.name,
                fname: data.fname
            })
    
    
        })
    
    });
  


module.exports = msgRoute;







   