const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { transporter } = require('./emailHandler');

const app = express();
const port = 5050;

app.use(cors({
    origin: `*`
}));

app.use(bodyparser.json());

app.get('/', (req, res)=>{
    console.log('get')
    // let { name, email, subject, message } = req.body;
    // const mailOptions = {
    //     from: 'alihoussa16@gmail.com',
    //     to: 'alihoussa16@gmail.com',
    //     subject: subject,
    //     text: `name: ${name} \n
    //             email: ${email}\n
    //         ${message}`
    // }

    // transporter.sendMail(mailOptions, (err, data)=>{
    //     if(err){
    //         console.log('error Occured f had blasa : ', err);
    //         res.send({msg: 'there was an error'});
    //     }else{
    //         console.log('email sent successefully')
    //         res.send({msg: 'email sent successefully'});
    //     }
    // })
    res.send({msg: 'noted'})
})

app.listen(port, ()=>{
    console.log('listening');
});