var nodemailer = require('nodemailer');


const sendMail = (req,res)=>{
    const {name, email, message} = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dharaneedharanchinnusamy@gmail.com',
          pass: 'vmtxahsdzeenscxp'
        }
      });
      
      var mailOptions = {
        from: 'dharaneedharanchinnusamy@gmail.com',
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
