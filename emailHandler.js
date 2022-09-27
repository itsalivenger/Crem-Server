const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alihoussa16@gmail.com',
        pass: 'vxcbxavjthgqsjeq'
    }
});

const mailOptions = {
    from: 'alihoussa16@gmail.com',
    to: 'alihoussa16@gmail.com',
    subject: 'text',
    text: 'dzajdlazkjdlazkjd'
}

module.exports = {transporter, mailOptions};