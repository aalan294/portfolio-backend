var nodemailer = require('nodemailer');


const sendMail = (req,res)=>{
    const {name, email, message} = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'aalansasonsingarayan@gmail.com',
          pass: 'opid nkqb fquq bkxr'
        }
      });
      
      var mailOptions = {
        from: 'aalansasonsingarayan@gmail.com',
        to: 'aalansasonsingarayana@gmail.com',
        subject: 'Message From Portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({"message": "Message send Successfully"})
        }
      });
    
}

module.exports={sendMail}