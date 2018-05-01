const express = require('express');
const multer = require('multer');
// const mongoose = require('mongodb');
const upload = multer({ dest: 'public/' });
const port = 3000;
const app = express();
// const mongoose = require('mongoose');
const pug= require ('pug');
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set("views", "./views");
app.use(express.urlencoded({extended: true}));

// app.get/route is the actual rsvp form

// app.post/reply is "Thank you for your response" with a link to guest list

// app.get/guests will show list of attending and not attending


app.get('/', function(req, res) {

    var name = req.body.guest_name, name;
    var email = req.body.guest_email, email;
    var attending = req.body.guest_attendace;
    var number = req.body.total_party;

    res.render('index');
});


app.post('/reply', function (req, res) {
    let instance = new req.response({ 
        // do something to response on 18
        name: req.name,
        email: req.email,
        attending: req.attending,
        guests: req.guests,   
    });
    instance.save(function (err, instance) {
        if (err) return console.error(err);
    })

    res.send(`
    <h1>Thanks ${name}!</h1>
    <p>Click here to see current <a href="/">/guests</a> </p>
    `);   
});
    


app.get('/guests', function (req, res)  {
    // if else for attending/ not attending?
    if (guest_attendance === yes) {
        document.write(name + "happily confirmed!");
    } else {
        document.write(name + "regretfully declined.");
    }
});

app.listen(port);