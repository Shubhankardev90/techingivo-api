const Email = require('../model/Email.js')
const sendEmail = require('../Helpers/email.js')


const sendQuery = async(req, res) => {
    const { name, phone, email, subject, message, } = req.body;
    let res_message = "There is some error can you please resend";
    const email_message = `Dear Techingivo team,\n\nI hope this email finds you well. We are excited to inform you that we have received a new enquiry from a prospective client. Please find the details below:\n\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nKindly review the information and take appropriate action. Should you have any questions or need further details, feel free to reach out.\n\nThank you for your prompt attention to this matter.\n\nBest Regards`;
    let res_email = await sendEmail(subject, email_message);
    let from = process.env.EMAIL_ID;
    let to = process.env.RECIEVER_EMAIL_ID;
    const emailModel = new Email({
        name, phone, email, sender_email:from, receiver_email:to, subject:subject, message:message
    })
    if(res_email){
        res_message = "We recieved your request we'll connect you back in next 24 hours";
        emailModel.sent = true;
    }
    await emailModel.save();
    res.json({
        "status": "OK",
        "message": res_message
    })
}

module.exports = {
    sendQuery
}