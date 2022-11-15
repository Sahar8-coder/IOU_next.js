export default async function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'k1rilovz@yandex.ru', // generated ethereal user
        pass: process.env.pass, // generated ethereal password
      },
    });
    
    const mailData = {
        from: 'k1rilovz@yandex.ru',
        to: req.body.email,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
    
    await transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }