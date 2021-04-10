const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const keys = require('../../config/keys');

const hasConfirmedMail = (req, res, next) => {
        
    // console.log(req.user);
    if(req.user.hasVerifiedEmail) {
        return res.redirect('/');
    }
    
    var date = new Date();
    var mail = {
                "id": req.user._id,
                "created": date.toString()
                }

    const token_mail_verification = jwt.sign(mail, keys.GMAIL.EMAIL_SECRET, { expiresIn: '1d' });

    var url = keys.baseUrl + 'auth/confirmation/' + token_mail_verification;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: keys.GMAIL.EMAIL_ID,
            pass: keys.GMAIL.EMAIL_PASS,
        },
    })

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Green World" <greenworlds2021@gmail.com>',  // sender address
        to: req.user.email, // list of receivers seperated by comma
        subject: "Green Account Verification", // Subject line
        text: "Click on the link below to veriy your account " + url, // plain text body
    }, (error, info) => {

        if (error) {
            console.log(error)
            return;
        }
        console.log('Message sent successfully!');
        console.log(info);
        transporter.close();
        res.send('Click the emailed Link');
    });


}

module.exports = hasConfirmedMail;