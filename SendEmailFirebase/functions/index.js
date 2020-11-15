
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'blettersgroup@gmail.com', 
        pass: 'BLetters123!'
    } 
}); 
exports.emailSender = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
    	
    	const dest = req.query.dest;

        let mailDetails = { 
            from: 'blettersgroup@gmail.com', 
            to: dest, 
            subject: 'BLetters Confirmation', 
            text: 'Thanks for Signing up with us!'
        }; 
        
        
        
        return mailTransporter.sendMail(mailDetails, function(err, data) { 
            if(err){
                return res.send(err.toString());
            }
            return res.send('Email sent succesfully');
        }); 
        
    })
})

