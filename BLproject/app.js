const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

let email = "";
let frequency = 1;
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/homePage.html'));
    //__dirname : It will resolve to your project folder.
    
});
router.get('/homePage.html',function(req,res){
    res.sendFile(path.join(__dirname+'/homePage.html'));
    
    //__dirname : It will resolve to your project folder.
    
});

router.get('/signUpPage.html',function(req,res){
    res.sendFile(path.join(__dirname+'/signUpPage.html'));
    //__dirname : It will resolve to your project folder.
    router.post('/signUp', (req, res) => {
        console.log(req.body);
        email = req.body.userEmail;
        res.redirect(path.join('/selectBlogsPage.html'));
    });
});
 


router.get('/selectBlogsPage.html',function(req,res){
    
    res.sendFile(path.join(__dirname+'/selectBlogsPage.html'));
    //__dirname : It will resolve to your project folder.

    
});

router.get('/frequencySelectionPage.html',function(req,res){

    router.post('/frequency', (req, res) => {
        console.log(req.body);
        frequency = req.body.freq;
        res.redirect(path.join('/signedUp.html'));
    });
    res.sendFile(path.join(__dirname+'/frequencySelectionPage.html'));
    //__dirname : It will resolve to your project folder.
    
});

router.get('/signedUp.html',function(req,res){
cron.schedule('0 0 */' + frequency * 24 + ' * * *', () => {
        let mailTransporter = nodemailer.createTransport({ 
            service: 'gmail', 
            auth: { 
                user: 'blettersgroup@gmail.com', 
                pass: 'BLETTERgroup12@'
            } 
        }); 
        
        let mailDetails = { 
            from: 'blettersgroup@gmail.com', 
                    to: email, 
                    subject: 'BLetters Confirmation', 
                    text: 'Thanks for signing up with us!'
                }; 
                
        
    
        mailTransporter.sendMail(mailDetails, function(err, data) { 
            if(err){
                res.send(err.toString());
            }
            res.send('Email sent succesfully');
        }); 
        
        
        //__dirname : It will resolve to your project folder.
        
        
    });
    res.sendFile(path.join(__dirname+'/signedUp.html'));
  
    
});


  
app.use(express.static(__dirname + '/public/'));

app.use('/', router);
app.listen(process.env.port || 3000);

