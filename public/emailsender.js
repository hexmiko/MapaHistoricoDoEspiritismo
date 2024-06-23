const nodemailer = ("nodemailer");



let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'grupodeestudosherminiocdemiran@gmail.com',
            pass: 'fbxs tztu ilbb cwhm'
        }
    });


// export default transporter

module.exports = transporter

export default transporter