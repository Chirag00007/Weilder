import nodemailer from 'nodemailer';

export const sendEmail = async (options)  => {
    const trasporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port : 465,
        service: 'gmail',
        auth: {
          user: process.env.SMPT_MAIL ,
          pass: process.env.SMPT_PASSWORD ,
        },
      }); 

      const mailOption = {
        from: process.env.SMPT_MAIL  ,
        to: 'weilders.tech@gmail.com',
        subject: `${options.subject}`, 
        text :   `
        User Name: ${options.name}
        User Email: ${options.email}
        Message: ${options.message}
    `
      };
      console.log(mailOption)
    
      await trasporter.sendMail(mailOption)
}
