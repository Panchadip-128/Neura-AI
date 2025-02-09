// filepath: /d:/web2/backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'panchadip128@gmail.com', // Replace with your email
      pass: 'hvkp rdrt mrdo cduq', // Replace with your email password
    },
  });

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Replace with your email
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(201).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;