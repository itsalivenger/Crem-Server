const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { transporter } = require('./emailHandler');
const origin = ["http://localhost:5000", 'https://itsalivenger.github.io/Crem-Dev/', 'https://itsalivenger.github.io/Crem-Dev', 
'https://itsalivenger.github.io', 'https://itsalivenger.github.io/'];
const app = express();
const port = process.env.PORT || 5050;

app.use(cors({
    origin: origin,
    credentials: true
}));

app.use(bodyparser.json());

app.post('/', async (req, res)=>{
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

    await new Promise((err, data) => {
        // send mail
        transporter.sendMail(mailOptions, (err, data)=>{
            if(err){
                console.log('error Occured f had blasa : ', err);
                res.send({msg: 'there was an error'});
            }else{
                console.log('email sent successefully')
                res.send({msg: 'email sent successefully', data});
            }
        })
    });
    res.send({msg: 'noted'})
})

app.get('/', (req, res)=>{
    res.send('molle-e');
});


app.listen(port, ()=>{
    console.log('listening');
});