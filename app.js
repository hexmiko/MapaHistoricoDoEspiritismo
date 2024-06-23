const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const path = require("path")
const body = require('body-parser')




app.use(body.urlencoded({     // to support URL-encoded bodies
    extended: false
})); 
app.use(body.json());       // to support JSON-encoded bodies

app.post('/sendEmail', (req, res) => {



    console.log(req.body.visitantEmail)
    let email = req.body.visitantEmail
    sendEmailMap(email)
});

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, "public")))
    res.sendFile('index.html', { root: __dirname + '/public' })
});
app.listen(process.env.PORT ||3000, () => {
    console.log('Server listening on port 3000');
});



function sendEmailMap(email) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'grupodeestudosherminiocdemiran@gmail.com',
            pass: 'fbxs tztu ilbb cwhm'
        }
    });

    const mailOptions = {
        from: 'grupodeestudosherminiocdemiran@gmail.com', // sender address
        to: email, // receiver (use array of string for a list)
        subject: 'Mapa Histórico do Espiritismo em Fortaleza', // Subject line
        html: `Olá, segue a baixo o Pdf com o Mapa Histórico do Espiritismo em,
         Fortaleza proporcionado pelo Grupo de Estudos Hermínio C. de Miranda.`, // plain text body
        attachments: [
            {
                filename: 'MapaHistorico.pdf',
                path: path.join(__dirname, 'public/Image/Mapa2.pdf'),
                contentType: 'application/pdf'
            }]
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            alert('Email falhou em ser enviado!!');
            return res.status(400).json({
                error: true,
                mensagem: "Erro: E-mail não enviado com sucesso!",
            })
        }
        else {
            console.log(info);
            alert('Email enviado com sucesso!');
            return res.status(400).json({
                error: false,
                mensagem: "Erro: E-mail  enviado com sucesso!",
            })
        }
     });
}
