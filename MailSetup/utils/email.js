import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendMail = async (subject, text, recipients) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients,
      subject,
      text
    };

    await transporter.sendMail(mailOptions);
    console.log('Emails sent to:', recipients);
  } catch (error) {
    console.error('Email send error:', error);
  }
};

export default sendMail;
