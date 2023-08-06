window.jsPDF = window.jspdf.jsPDF;

let pdf = new jsPDF();

var canvas = document.getElementById("myCanvas");
var img = document.getElementById("ticket");

function sendEmail(pdf) {
    let email = document.getElementById('emailInput').value;
    console.log(pdf);
    Email.send({
        SecureToken: "eaa5def1-3c51-46b9-babc-e3a1c34fb74b",
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

function baixarPDF() {
    pdf.save();
}
