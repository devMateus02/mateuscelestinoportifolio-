require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro na conexão:', err));

const ProjetoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  src: String,
  site: String,
  github: String,
  tecnologias: [String],
}, { timestamps: true });

const Projeto = mongoose.model('Projetos', ProjetoSchema);

// ROTA: Buscar projetos com paginação
app.get('/projetos', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page)) || 1;
    const limit = Math.max(1, parseInt(req.query.limit)) || 3;
    const skip = (page - 1) * limit;

    const [total, projetos] = await Promise.all([
      Projeto.countDocuments(),
      Projeto.find().limit(limit).skip(skip)
    ]);

    const totalPages = Math.ceil(total / limit);

    res.json({
      projetos,
      pagination: {
        total,
        totalPages,
        page,
        limit
      }
    });
  } catch (err) {
    console.error('Erro ao buscar projetos:', err);
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
});



// ROTA: Enviar email
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
