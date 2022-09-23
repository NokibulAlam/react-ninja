const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nokibul.alam02@gmail.com",
        pass: "njupdpxsqofvyzbx",
    },
    port: 465,
    host: "smtp.gmail.com",
});

exports.sendMail = (req, res, next) => {
    // console.log("Mail Sent");
    //  res.json({
    //     "name": "Himel",
    //     "age": 25
    // });

    const mailOption = {
        from: `Support From Naruto ${process.env.GMAIL}`,
        to: req.body.email,
        subject: `Thanks for Contacting with us ${req.body.name}`,
        html: `<h1>NODEMAILER R CODON</h1> <p>${req.body.name}</p>`
    };

    transport.sendMail(mailOption, (err, result) => {
        if(err){
            console.log(err);
        }
        else {
            console.log("MAIL SENT");
            return res.json({"success": true});
        }
    })

    console.log(req.body);
}