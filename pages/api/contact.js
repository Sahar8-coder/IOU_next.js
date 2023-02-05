import nodemailer from 'nodemailer'
export default async (req, res) => {
//export async function getServerSideProps({ req, res }) {
    require('dotenv').config()

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      /*auth: {
        user: 'k1rilovz@yandex.ru',
        pass: 'qhfxkhjcdlvgdwhs',
      },*/
      /*auth: {
        user: 'quadratic.eq@mail.ru',
        pass: 'RvAbja5FBLcin58phgAs',
      },*/
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    });
    //console.log(transporter)
    const mailData = {
        from: 'quadratic.eq@mail.ru',
        to: `${req.body.email}, ${req.body.email_teach}`,
        subject: `Message From quadratic.eq`,
        text: "Оценка ученика " + req.body.name + " — " + req.body.message,
        html: `<div>Оценка ученика ${req.body.name}  —  ${req.body.message}</div>`
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