const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { transporter } = require('./emailHandler');

const app = express();
const port = 5050;

app.use(cors({
    origin: 'https://itsalivenger.github.io/Crem-Dev'
}));

app.use(bodyparser.json());

app.post('/', (req, res)=>{
    console.log('post')
    let { name, email, subject, message } = req.body;
    const mailOptions = {
        from: 'alihoussa16@gmail.com',
        to: 'alihoussa16@gmail.com',
        subject: subject,
        text: `name: ${name} \n
                email: ${email}\n
            ${message}`
    }

    transporter.sendMail(mailOptions, (err, data)=>{
        if(err){
            console.log('error Occured f had blasa : ', err);
            res.send({msg: 'there was an error'});
        }else{
            console.log('email sent successefully')
            res.send({msg: 'email sent successefully'});
        }
    })
})

app.listen(port, ()=>{
    console.log('listening');
});