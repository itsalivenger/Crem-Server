const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const { transporter } = require('./emailHandler');
// ila baqi jak error ta3 cors try had approach o hyed / flkher ta3 URL ila kant
const origin = ["http://localhost:5500", 'https://itsalivenger.github.io/Crem-Dev/', 'https://itsalivenger.github.io/Crem-Dev', 
'https://itsalivenger.github.io', 'https://itsalivenger.github.io/', 'https://cremcreations.live'
, 'https://www.cremcreations.com', "https://itsalivenger.github.io/Crem-Dev/"];
const app = express();
const port = process.env.PORT || 5050;

app.use(cors({
    origin: origin
}));

app.use(bodyparser.json());

app.post('/', async (req, res)=>{
    console.log('post')
    let { name, email, phoneNum, subject, message } = req.body;
    

    const mailOptions = {
        from: 'alihoussa16@gmail.com',
        to: name === 'houbek' ? 'alihoussa16@gmail.com' : 'alihoussa16@gmail.com, cremcreations@gmail.com',
        subject: subject,
        text: name ? `name: ${name} \n
        email: ${email}\n
        phoneNumber: ${phoneNum}
    ${message}` : `Newsletter Email: ${email}`
    }

    await new Promise((err, data) => {
        // send mail
        transporter.sendMail(mailOptions, (err, data)=>{
            if(err){
                console.log('error Occured f had blasa : ', err);
                res.send({msg: 'there was an error', state: false, err, name});
            }else{
                console.log('email sent successefully')
                res.send({msg: 'email sent successefully', data, state: true, name});
            }
        })
    });
    // res.send({msg: 'noted'})
})

app.get('/', (req, res)=>{
    res.send('molle-e');
});


app.listen(port, ()=>{
    console.log('listening');
});