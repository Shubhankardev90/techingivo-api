const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendEmail = (subject, text) => {
    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL_ID,
        to: process.env.RECIEVER_EMAIL_ID,
        subject: subject,
        text: text
    };

    // Wrap the sendMail function in a Promise
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}

module.exports = sendEmail;
