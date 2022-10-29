export default async function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'frieda.rice@ethereal.email', // generated ethereal user
        pass: 'VPkxD45WjkzFjnzDc3', // generated ethereal password
      },
    });
    
    const mailData = {
        from: 'Fred Foo" <foo@example.com>',
        to: req.body.email,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
    
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }