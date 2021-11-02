
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const msgRoute = require('./src/routes/msgRoutes');


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/message',msgRoute);



app.get("/", function(req, res) {
    res.render("index", {
    title: 'Diwali wishes'
    });


});




app.listen(process.env.PORT || 3018, () => {
    console.log(process.env.PORT);
    console.log("Server ready at" );
});
    
