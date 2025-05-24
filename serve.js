require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const nodemailer = require('nodemailer');
const db = require('./db');
const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/projetos', (req, res) => {
  db.query('SELECT * FROM projetos', (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      return res.status(500).json({ error: 'Erro ao buscar projetos' });
    }
    res.json(results);
  });
});


app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Nova mensagem de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ success: false, message: 'Erro ao enviar email' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
