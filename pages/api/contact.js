import nodemailer from 'nodemailer'
export default async function (req, res) {
    require('dotenv').config()

    let transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      /*auth: {
        user: 'k1rilovz@yandex.ru',
        pass: 'qhfxkhjcdlvgdwhs',
      },*/
      auth: {
        user: 'quadratic.eq@mail.ru',
        pass: 'kEm4eZ7HRbFVAyupfcH5',
      },
    });
    //console.log(transporter)
    const mailData = {
        from: 'quadratic.eq@mail.ru',
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
    console.log('fetched')
  }