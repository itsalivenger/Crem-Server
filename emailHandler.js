const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alihoussa16@gmail.com',
        pass: 'vxcbxavjthgqsjeq'
    }
});

module.exports = { transporter };