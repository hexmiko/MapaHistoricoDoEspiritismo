window.jsPDF = window.jspdf.jsPDF;



// import transporter from "./emailsender.js";

let pdf = new jsPDF();

var canvas = document.getElementById("myCanvas");
var img = document.getElementById("ticket");

function sendEmail(pdf) {
    let email = document.getElementById('emailInput').value;
    console.log(pdf);
    Email.send({
        SecureToken: "",
        Username : "grupodeestudosherminiocdemiran@gmail.com",
        Password : "fbxs tztu ilbb cwhm",
        To: email,
        From: "grupodeestudosherminiocdemiran@gmail.com",
        Subject: "Mapa Histórico do Espiritismo em Fortaleza",
        Body: `Olá, segue a baixo o Pdf com o Mapa Histórico do Espiritismo em,
         Fortaleza proporcionado pelo Grupo de Estudos Hermínio C. de Miranda.`,
        Attachments: [
            {
                name: "Mapa.pdf", 
                data: pdf, 
            }]
    }).then(
    
        (message) => {
            // alert(message);
            if (message == 'OK') { 
                alert('Email enviado com sucesso!');
            } else {
                alert(message);
                console.log(message);
            }
        }
    );
}

function sendEmail2(pdf) {
    let email = document.getElementById('emailInput').value;

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
        subject: 'Teste', // Subject line
        html: '<p>Your html here</p>', // plain text body
        Attachments: [
            {
                name: "Mapa.pdf", 
                data: pdf, 
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
            return res.status(200).json({
                error: false,
                mensagem: "Erro: E-mail  enviado com sucesso!",
            })
        }
     });
}


function baixarPDF() {
    pdf.save();
}
