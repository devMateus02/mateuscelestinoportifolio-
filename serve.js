require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const nodemailer = require('nodemailer');
const db = require('./db');
const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/projetos', (req, res) => {
  const page = parseInt(req.query.page) || 1;      // Página atual, padrão 1
  const limit = parseInt(req.query.limit) || 5;    // Itens por página, padrão 5
  const offset = (page - 1) * limit;               // Cálculo do offset

  // Primeiro busca a contagem total de projetos
  db.query('SELECT COUNT(*) AS total FROM projetos', (countErr, countResult) => {
    if (countErr) {
      console.error('Erro ao contar projetos:', countErr);
      return res.status(500).json({ error: 'Erro ao contar projetos' });
    }

    const total = countResult[0].total;
    const totalPages = Math.ceil(total / limit);

    // Depois busca os projetos paginados
    db.query('SELECT * FROM projetos LIMIT ? OFFSET ?', [limit, offset], (err, results) => {
      if (err) {
        console.error('Erro na consulta paginada:', err);
        return res.status(500).json({ error: 'Erro ao buscar projetos' });
      }

      res.json({
        projetos: results,
        pagination: {
          total,
          totalPages,
          page,
          limit
        }
      });
    });
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
