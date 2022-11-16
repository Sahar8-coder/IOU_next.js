export default async function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'apikey', // generated ethereal user
        pass: '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', // generated ethereal password
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