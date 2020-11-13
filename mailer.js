let nodemailer = require('nodemailer');
let {emailPassword} = require('./keys');

let transporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    auth: {
        user: "utaustin@longhorngaming.gg",
        pass: emailPassword
    }
});

let mailOptions = {
    from: "utaustin@longhorngaming.gg",
    to: "test@gmail.com",
    subject: `Sauce`,
    html: '<h1>Hello</h1>'
}

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        throw error;
    } else {
        console.log("Email successfully sent!");
    }
});