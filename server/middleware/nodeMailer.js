const nodemailer = require('nodemailer');

// create a transporter

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
    user:"poojarajput2814@gmail.com",
    pass:"nckb obse znah qpje",
    },
});

//verify the transporter
transporter.verify((error, success)=>{
    if(error)
    {
        console.log('Error connecting to email service:', error);

    }
    else{
        console.log('Email service ready to send mail');
    }
});
module.exports=transporter;
