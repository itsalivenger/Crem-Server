const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { transporter, mailOptions } = require('./emailHandler');

const app = express();
const port = 5050;

app.use(cors({
    origin: '*'
}));

app.use(bodyparser.json());

app.post('/', (req, res)=>{
    console.log(req.body, req.hostname)
    // let { name, email, subject, message } = req.body;
    // console.log(name)
    transporter.sendMail(mailOptions, (err, data)=>{
        if(err){
            console.log('error Occured f had blasa : ', err);
        }else{
            console.log('email sent successefully');
        }
    })
    res.send({msg: 'noted'});
})

app.listen(port, ()=>{
    console.log('listening');
});